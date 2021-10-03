import SampleTemplateTag from "./SampleTemplateTag";

export default function SampleTemplateTags() {
  return (
    <div>
      <input className="sampleTemplateH3" placeholder="Custom Title" />
      <div className="sampleTemplateTags">
        {new Array(1).fill("").map((_, tagInd) => (
          <SampleTemplateTag key={tagInd} />
        ))}
      </div>
    </div>
  )
}