import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { templates } from "../../utils/constants";

export default function SampleTemplateBarSkill({ fields, setValue, append, remove, ind, register }) {
  const [percent, setPercent] = useState(75);

  useEffect(() => {
    setValue(`bar_skills.items[${ind}].percent`, percent)
  }, [ind, percent, setValue]);

  return (
    <div className="sampleTemplateBarSkill">
      <span className="sampleTemplateBarSkill__menus">
        {fields.length > 1 && <button title="Remove" onClick={() => remove(ind)}><FaMinus /></button>}
        <button title="Add" onClick={() => append(templates[0].data.bar_skills.items[0])}><FaPlus /></button>
      </span>
      <div className="sampleTemplateBarSkill__bars">
        <span style={{ opacity: (percent >= 25) ? '1' : '.5' }} onClick={() => setPercent(25)}></span>
        <span style={{ opacity: (percent >= 50) ? '1' : '.5' }} onClick={() => setPercent(50)}></span>
        <span style={{ opacity: (percent >= 75) ? '1' : '.5' }} onClick={() => setPercent(75)}></span>
        <span style={{ opacity: (percent >= 100) ? '1' : '.5' }} onClick={() => setPercent(100)}></span>
      </div>
      <div className="sampleTemplateBarSkill__input">
        <input className="sampleTemplateH4" placeholder="Enter Skill" {...register(`bar_skills.items[${ind}].skill`)} />
      </div>
    </div>
  )
}