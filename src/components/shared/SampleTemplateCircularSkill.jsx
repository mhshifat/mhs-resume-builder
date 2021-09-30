import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function SampleTemplateCircularSkill() {
  const [percent, setPercent] = useState(25);

  return (
    <div className="sampleTemplateCircleSkill">
      <span className="sampleTemplateCircleSkill__menus">
        <button title="Remove"><FaMinus /></button>
        <button title="Add"><FaPlus /></button>
      </span>
      <div onClick={() => setPercent(value => value < 100  ? value + 25 : value = 100 ? 25 : value)} className="sampleTemplateCircleSkill__circle">
        <svg>
          <circle cx="30" cy="30" r="25"></circle>
          <circle cx="30" cy="30" r="25" style={{
            strokeDashoffset: `calc(160 - (160 * ${percent}) / 100)`
          }}></circle>
        </svg>
        <span>{percent}%</span>
      </div>
      <div className="sampleTemplateCircleSkill__input">
        <input className="sampleTemplateH4" placeholder="Enter Skill" />
      </div>
    </div>
  )
}