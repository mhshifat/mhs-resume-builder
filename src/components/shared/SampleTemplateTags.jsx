import { useFieldArray } from "react-hook-form";
import SampleTemplateTag from "./SampleTemplateTag";

export default function SampleTemplateTags({ control, register, name }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${name}.items`,
    keyName: "_id"
  });

  return (
    <div>
      <input className="sampleTemplateH3" placeholder="Custom Title" {...register(`${name}.headline`)} />
      <div className="sampleTemplateTags">
        {fields.map((_, tagInd) => (
          <SampleTemplateTag fields={fields} append={append} remove={remove} register={register} name={name} ind={tagInd} key={tagInd} />
        ))}
      </div>
    </div>
  )
}