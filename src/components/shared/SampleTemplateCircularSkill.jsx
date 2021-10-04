import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { templates } from "../../utils/constants";

export default function SampleTemplateCircularSkill({ fields, setValue, append, remove, ind, register }) {
  const [percent, setPercent] = useState(25);

  useEffect(() => {
    setValue(`circular_skills.items[${ind}].percent`, percent)
  }, [ind, percent, setValue]);

  return (
    <div className="sampleTemplateCircleSkill">
      <span className="sampleTemplateCircleSkill__menus">
        {fields.length > 1 && <button title="Remove" onClick={() => remove(ind)}><FaMinus /></button>}
        <button title="Add" onClick={() => append(templates[0].data.circular_skills.items[0])}><FaPlus /></button>
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
        <input className="sampleTemplateH4" placeholder="Enter Skill" {...register(`circular_skills.items[${ind}].skill`)} />
      </div>
    </div>
  )
}