import { useFieldArray } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";
import { templates } from "../../utils/constants";

export default function SampleTemplateEducations({ control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations.items",
    keyName: "_id"
  });

  return (
    <div>
      <input className="sampleTemplateH3" defaultValue="EDUCATION" placeholder="EDUCATION" {...register("educations.headline")} />
      {fields.map((_, ind) => (
        <div key={ind} className="sampleTemplateExpEdu edu">
          <span className="sampleTemplateExpEdu__menus">
            {fields.length > 1 && <button onClick={() => remove(ind)} title="Remove"><FaMinus /></button>}
            <button title="Add" onClick={() => append(templates[0].data.educations.items[0])}><FaPlus /></button>
          </span>
          <input placeholder="Degree" {...register(`educations.items[${ind}].degree`)} />
          <div>
            <input placeholder="School" {...register(`educations.items[${ind}].school`)} />
            <input placeholder="From - Until" {...register(`educations.items[${ind}].from_until`)} />
          </div>
        </div>
      ))}
    </div>
  )
}