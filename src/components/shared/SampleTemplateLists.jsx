import { useFieldArray } from "react-hook-form";
import SampleTemplateList from "./SampleTemplateList";

export default function SampleTemplateLists({ control, register }) {
  const { fields: fields1, append: append1, remove: remove1 } = useFieldArray({
    control,
    name: "list1.items",
    keyName: "_id"
  });
  const { fields: fields2, append: append2, remove: remove2 } = useFieldArray({
    control,
    name: "list2.items",
    keyName: "_id"
  });

  return (
    <div className="sampleTemplateLists">
      <div className="sampleTemplateListOne">
        <input className="sampleTemplateH3" placeholder="Custom Title" {...register("list1.headline")} />
        {fields1.map((_, tagInd) => (
          <SampleTemplateList key={tagInd} name="list1" fields={fields1} ind={tagInd} append={append1} remove={remove1} register={register} />
        ))}
      </div>
      <div className="sampleTemplateListOne">
        <input className="sampleTemplateH3" placeholder="Custom Title" {...register("list2.headline")} />
        {fields2.map((_, tagInd) => (
          <SampleTemplateList key={tagInd} name="list2" fields={fields2} ind={tagInd} append={append2} remove={remove2} register={register} />
        ))}
      </div>
    </div>
  )
}