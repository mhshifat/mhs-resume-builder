import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { templates } from "../../utils/constants";

export default function SampleTemplateList({ fields, remove, append, ind, name, register }) {
  return (
    <div className="sampleTemplateList">
      <span className="sampleTemplateList__menus">
        {fields.length > 1 && <button title="Remove" onClick={() => remove(ind)}><FaMinus /></button>}
        <button title="Add" onClick={() => append(templates[0].data[name].items[0])}><FaPlus /></button>
      </span>
      <div><FaCheck /></div>
      <div><input className="sampleTemplateH4" placeholder="Enter Text" {...register(`${name}.items[${ind}].text`)} /></div>
    </div>
  )
}