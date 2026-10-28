"use client";
import { useState } from "react";
const directions = [
  { id: "trades", label: "Local service", name: "FIELDWORK", kicker: "GARDENS WITH A LITTLE WILD IN THEM.", title: <>A little outside.<br /><em>A lot more alive.</em></>, detail: "Thoughtful outdoor spaces. Room to put down roots.", action: "Let’s grow something", category: "A landscape studio" },
  { id: "studio", label: "Creative studio", name: "SUNDAY / STUDIO", kicker: "GOOD THINGS TAKE SHAPE HERE.", title: <>Made slowly.<br /><em>Loved daily.</em></>, detail: "Small-batch ceramics for everyday rituals.", action: "Explore the collection", category: "A ceramics studio" },
  { id: "maker", label: "Custom work", name: "ONE / OF / ONE", kicker: "YOUR IDEA. A DIFFERENT KIND OF ORIGINAL.", title: <>Wear your story.<br /><em>Make your mark.</em></>, detail: "Custom pieces with a personality all their own.", action: "Start something original", category: "An independent maker" },
];
export function WebsitePreview() {
  const [selected, setSelected] = useState(0);
  const direction = directions[selected];
  return <div className="preview-workspace">
    <div className="preview-label"><span>ONE IDEA. A FEW POSSIBILITIES.</span><span aria-hidden="true">↘</span></div>
    <div className={`website-preview preview-${direction.id}`}>
      <div className="preview-browser"><span aria-hidden="true">● ● ●</span><span>your-business.com</span><span aria-hidden="true">↗</span></div>
      <div className="preview-site" aria-live="polite" aria-atomic="true"><div className="preview-nav"><strong>{direction.name}</strong><span>About &nbsp; Work &nbsp; ↗</span></div><div className="preview-art" aria-hidden="true"><div className="art-orb orb-one" /><div className="art-orb orb-two" /><div className="art-orb orb-three" /><span className="art-spark">✳</span><span className="art-caption">{direction.category}</span></div><div className="preview-site-copy"><p>{direction.kicker}</p><h2>{direction.title}</h2><span>{direction.detail}</span><div className="preview-faux-button" aria-hidden="true">{direction.action}<span>↗</span></div></div><div className="preview-site-bottom"><span>INDEPENDENT BY NATURE.</span><span>BUILT WITH WiT ↗</span></div></div>
    </div>
    <div className="preview-controls" role="group" aria-label="Example website direction">{directions.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><span aria-hidden="true">0{index + 1}</span> {item.label}</button>)}</div>
    <p className="preview-disclaimer">Try a direction. Fictional businesses, real possibilities.</p>
  </div>;
}
