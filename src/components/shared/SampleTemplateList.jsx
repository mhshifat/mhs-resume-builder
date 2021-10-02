import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";

export default function SampleTemplateList() {
  return (
    <div className="sampleTemplateList">
      <span className="sampleTemplateList__menus">
        <button title="Remove"><FaMinus /></button>
        <button title="Add"><FaPlus /></button>
      </span>
      <div><FaCheck /></div>
      <div><input className="sampleTemplateH4" placeholder="Enter Text" /></div>
    </div>
  )
}