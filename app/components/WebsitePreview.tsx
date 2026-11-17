"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import "./website-preview.css";

function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const readMotionPreference = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const serverMotionPreference = () => false;
const words = ["WiT", "WEB", "CO."];

type Particle = { x: number; y: number; homeX: number; homeY: number; vx: number; vy: number; accent: boolean };

export function WebsitePreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scatterRef = useRef<() => void>(() => {});
  const [word, setWord] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, readMotionPreference, serverMotionPreference);
  const still = paused || reducedMotion;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const mask = document.createElement("canvas");
    const maskContext = mask.getContext("2d", { willReadFrequently: true });
    if (!maskContext) return;
    const styles = getComputedStyle(canvas);
    const particleColor = styles.getPropertyValue("--particle");
    const accentColor = styles.getPropertyValue("--particle-accent");
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastFrame = 0;
    let time = 0;
    let visible = true;
    let pointer = { x: -1000, y: -1000 };
    let ripple = { x: 0, y: 0, age: 1000 };

    function draw(timestamp = 0) {
      if (!context) return;
      const elapsed = lastFrame ? Math.min(timestamp - lastFrame, 32) : 16;
      lastFrame = timestamp;
      const step = elapsed / 16.67;
      time += still ? 0 : elapsed;
      context.clearRect(0, 0, width, height);
      const radius = Math.min(width * .22, 115);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!still) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < radius && distance > 0) {
            const force = (1 - distance / radius) * 3.4 * step;
            p.vx += dx / distance * force;
            p.vy += dy / distance * force;
          }
          const drift = Math.sin(time * .0016 + p.homeX * .018) * 2;
          p.vx += (p.homeX - p.x) * .045 * step;
          p.vy += (p.homeY + drift - p.y) * .045 * step;
          p.vx *= Math.pow(.83, step);
          p.vy *= Math.pow(.83, step);
          p.x += p.vx * step;
          p.y += p.vy * step;
        }
        context.beginPath();
        context.fillStyle = p.accent ? accentColor : particleColor;
        context.arc(p.x, p.y, width < 400 ? 1.7 : 2, 0, Math.PI * 2);
        context.fill();
      }
      if (!still && ripple.age < 650) {
        ripple.age += elapsed;
        context.beginPath();
        context.strokeStyle = particleColor;
        context.globalAlpha = Math.max(0, .6 - ripple.age / 1000);
        context.lineWidth = 1;
        context.arc(ripple.x, ripple.y, 12 + ripple.age * .24, 0, Math.PI * 2);
        context.stroke();
        context.globalAlpha = 1;
      }
      if (!still && visible && !document.hidden) frame = requestAnimationFrame(draw);
    }

    function restart() {
      cancelAnimationFrame(frame);
      lastFrame = 0;
      if (visible && !document.hidden) draw();
    }

    function resize() {
      if (!canvas || !context || !maskContext) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      mask.width = Math.round(width);
      mask.height = Math.round(height);
      const text = words[word];
      let fontSize = width * .53;
      maskContext.font = `900 ${fontSize}px Arial, sans-serif`;
      const sizingMetrics = maskContext.measureText(text);
      const textHeight = sizingMetrics.actualBoundingBoxAscent + sizingMetrics.actualBoundingBoxDescent;
      fontSize *= Math.min(width * .84 / sizingMetrics.width, height * .82 / textHeight);
      maskContext.font = `900 ${fontSize}px Arial, sans-serif`;
      maskContext.textAlign = "center";
      maskContext.textBaseline = "alphabetic";
      const metrics = maskContext.measureText(text);
      const baseline = height / 2 + (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
      maskContext.fillText(text, width / 2, baseline);
      const pixels = maskContext.getImageData(0, 0, mask.width, mask.height).data;
      const spacing = width < 400 ? 5 : 7;
      particles = [];
      for (let y = 0; y < mask.height; y += spacing) {
        for (let x = 0; x < mask.width; x += spacing) {
          if (pixels[(y * mask.width + x) * 4 + 3] < 130) continue;
          const offset = still ? 0 : 30;
          particles.push({ homeX: x, homeY: y, x: x + Math.sin(x * .1 + y) * offset, y: y + Math.cos(y * .1 + x) * offset, vx: 0, vy: 0, accent: x > width * .73 && y < height * .5 });
        }
      }
      restart();
    }

    function move(event: PointerEvent) {
      if (!canvas || still) return;
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }
    function scatter(x = width / 2, y = height / 2) {
      if (still) return;
      ripple = { x, y, age: 0 };
      for (const p of particles) {
        const dx = p.x - x;
        const dy = p.y - y;
        const distance = Math.max(Math.hypot(dx, dy), 1);
        p.vx += dx / distance * (12 + 1100 / (distance + 60));
        p.vy += dy / distance * (12 + 1100 / (distance + 60));
      }
    }
    function press(event: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      scatter(event.clientX - rect.left, event.clientY - rect.top);
    }
    function leave() { pointer = { x: -1000, y: -1000 }; }
    function release(event: PointerEvent) { if (event.pointerType !== "mouse") leave(); }
    scatterRef.current = () => scatter();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
    visibilityObserver.observe(canvas);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerdown", press);
    canvas.addEventListener("pointerleave", leave);
    canvas.addEventListener("pointerup", release);
    canvas.addEventListener("pointercancel", leave);
    document.addEventListener("visibilitychange", restart);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerdown", press);
      canvas.removeEventListener("pointerleave", leave);
      canvas.removeEventListener("pointerup", release);
      canvas.removeEventListener("pointercancel", leave);
      document.removeEventListener("visibilitychange", restart);
      scatterRef.current = () => {};
    };
  }, [word, still]);

  return (
    <div
      className="wit-playground"
      id="canvas"
      data-lettering={words[word]}
      role="group"
      aria-label="Interactive design canvas"
    >
      <div className="canvas-toolbar">
        <div className="canvas-lettering" role="group" aria-label="Canvas lettering">
          {words.map((name, index) => (
            <button type="button" key={name} aria-pressed={word === index} onClick={() => setWord(index)}>
              {name}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label={reducedMotion ? "Reduced motion enabled" : paused ? "Play canvas animation" : "Pause canvas animation"}
          disabled={reducedMotion}
          onClick={() => setPaused((isPaused) => !isPaused)}
        >
          {reducedMotion ? "Motion off" : paused ? "Play" : "Pause"}
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="wit-particle-canvas"
        data-still={still}
        role="img"
        aria-label={`${words[word]} lettering made of interactive particles`}
        aria-describedby="canvas-instructions"
      >
        {words[word]} in a field of dots.
      </canvas>
      <div className="canvas-footer">
        <p id="canvas-instructions">{reducedMotion ? "Choose a word to change the lettering." : paused ? "Animation paused." : "Hover or tap the letters."}</p>
        <button type="button" disabled={still} onClick={() => scatterRef.current()}>
          Scatter letters <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  );
}
