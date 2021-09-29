import { FaMinus, FaPlus } from "react-icons/fa";

export default function SampleTemplateTag() {
  return (
    <div className="sampleTemplateTag">
      <span className="sampleTemplateTag__menus">
        <button title="Remove"><FaMinus /></button>
        <button title="Add"><FaPlus /></button>
      </span>
      <input onKeyPress={({ target }) => target.style.width = (target.value.length + 1) + 'ch'} placeholder="Enter Skill" />
    </div>
  )
}