import { FaMinus, FaPlus } from "react-icons/fa";
import Textarea from "./Textarea";

export default function SampleTemplateWorkExperience() {
  return (
    <div>
      <input className="sampleTemplateH3" defaultValue="WORK EXPERIENCE" placeholder="WORK EXPERIENCE" />
      {new Array(2).fill("").map((_, ind) => (
        <div key={ind} className="sampleTemplateExpEdu">
          <span className="sampleTemplateExpEdu__menus">
            <button title="Remove"><FaMinus /></button>
            <button title="Add"><FaPlus /></button>
          </span>
          <input placeholder="Position" />
          <div>
            <input placeholder="Employer" />
            <input placeholder="From - Until" />
          </div>
          <Textarea className="sampleTemplateP" placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer." />
        </div>
      ))}
    </div>
  )
}