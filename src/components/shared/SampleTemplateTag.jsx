import { FaMinus, FaPlus } from "react-icons/fa";
import { templates } from "../../utils/constants";

export default function SampleTemplateTag({ fields, append, remove, ind, register, name }) {
  return (
    <div className="sampleTemplateTag">
      <span className="sampleTemplateTag__menus">
        {fields.length > 1 && <button title="Remove" onClick={() => remove(ind)}><FaMinus /></button>}
        <button title="Add" onClick={() => append(templates[0].data.simple1.items[0])}><FaPlus /></button>
      </span>
      <input onKeyPress={({ target }) => target.style.width = (target.value.length + 1) + 'ch'} placeholder="Enter Skill" {...register(`${name}.items[${ind}].skill`)} />
    </div>
  )
}