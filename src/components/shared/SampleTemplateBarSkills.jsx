import { useFieldArray } from "react-hook-form";
import SampleTemplateBarSkill from "./SampleTemplateBarSkill";

export default function SampleTemplateBarSkills({ setValue, control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "bar_skills.items",
    keyName: "_id"
  });

  return (
    <div>
      <input className="sampleTemplateH3" placeholder="Custom Title" {...register("bar_skills.headline")} />
      <div className="sampleTemplateBarSkills">
        {fields.map((_, tagInd) => (
          <SampleTemplateBarSkill key={tagInd} setValue={setValue} fields={fields} append={append} remove={remove} register={register} ind={tagInd} />
        ))}
      </div>
    </div>
  )
}