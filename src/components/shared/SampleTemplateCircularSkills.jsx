import { useFieldArray } from "react-hook-form";
import SampleTemplateCircularSkill from "./SampleTemplateCircularSkill";

export default function SampleTemplateCircularSkills({ control, register, setValue }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "circular_skills.items",
    keyName: "_id"
  });

  return (
    <div>
      <input className="sampleTemplateH3" placeholder="Custom Title" {...register("circular_skills.headline")} />
      <div className="sampleTemplateCircleSkills">
        {fields.map((_, tagInd) => (
          <SampleTemplateCircularSkill key={tagInd} setValue={setValue} fields={fields} append={append} remove={remove} register={register} ind={tagInd} />
        ))}
      </div>
    </div>
  )
}