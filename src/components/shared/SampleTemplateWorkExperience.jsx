import { useFieldArray } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";
import { templates } from "../../utils/constants";
import Textarea from "./Textarea";

export default function SampleTemplateWorkExperience({ control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "work_experiences.items",
    keyName: "_id"
  });

  return (
    <div>
      <input className="sampleTemplateH3" defaultValue="WORK EXPERIENCE" placeholder="WORK EXPERIENCE" {...register("work_experiences.headline")} />
      {fields.map((_, ind) => (
        <div key={ind} className="sampleTemplateExpEdu">
          <span className="sampleTemplateExpEdu__menus">
            {fields.length > 1 && <button onClick={() => remove(ind)} title="Remove"><FaMinus /></button>}
            <button onClick={() => append(templates[0].data.work_experiences.items[0])} title="Add"><FaPlus /></button>
          </span>
          <input placeholder="Position" {...register(`work_experiences.items[${ind}].position`)} />
          <div>
            <input placeholder="Employer" {...register(`work_experiences.items[${ind}].employer`)} />
            <input placeholder="From - Until" {...register(`work_experiences.items[${ind}].from_until`)} />
          </div>
          <Textarea className="sampleTemplateP" {...register(`work_experiences.items[${ind}].details`)} placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer." />
        </div>
      ))}
    </div>
  )
}