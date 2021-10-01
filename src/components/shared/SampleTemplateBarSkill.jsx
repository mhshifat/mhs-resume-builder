import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function SampleTemplateBarSkill() {
  const [percent, setPercent] = useState(75);

  return (
    <div className="sampleTemplateBarSkill">
      <span className="sampleTemplateBarSkill__menus">
        <button title="Remove"><FaMinus /></button>
        <button title="Add"><FaPlus /></button>
      </span>
      <div className="sampleTemplateBarSkill__bars">
        <span style={{ opacity: (percent >= 25) ? '1' : '.5' }} onClick={() => setPercent(25)}></span>
        <span style={{ opacity: (percent >= 50) ? '1' : '.5' }} onClick={() => setPercent(50)}></span>
        <span style={{ opacity: (percent >= 75) ? '1' : '.5' }} onClick={() => setPercent(75)}></span>
        <span style={{ opacity: (percent >= 100) ? '1' : '.5' }} onClick={() => setPercent(100)}></span>
      </div>
      <div className="sampleTemplateBarSkill__input">
        <input className="sampleTemplateH4" placeholder="Enter Skill" />
      </div>
    </div>
  )
}