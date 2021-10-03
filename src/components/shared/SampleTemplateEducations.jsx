import { FaMinus, FaPlus } from "react-icons/fa";

export default function SampleTemplateEducations() {
  return (
    <div>
      <input className="sampleTemplateH3" defaultValue="EDUCATION" placeholder="EDUCATION" />
      {new Array(2).fill("").map((_, ind) => (
        <div key={ind} className="sampleTemplateExpEdu edu">
          <span className="sampleTemplateExpEdu__menus">
            <button title="Remove"><FaMinus /></button>
            <button title="Add"><FaPlus /></button>
          </span>
          <input placeholder="Degree" />
          <div>
            <input placeholder="School" />
            <input placeholder="From - Until" />
          </div>
        </div>
      ))}
    </div>
  )
}