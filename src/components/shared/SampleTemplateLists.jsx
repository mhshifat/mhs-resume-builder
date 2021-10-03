import SampleTemplateList from "./SampleTemplateList";

export default function SampleTemplateLists() {
  return (
    <div className="sampleTemplateLists">
      <div className="sampleTemplateListOne">
        <input className="sampleTemplateH3" placeholder="Custom Title" />
        {new Array(2).fill("").map((_, tagInd) => (
          <SampleTemplateList key={tagInd} />
        ))}
      </div>
      <div className="sampleTemplateListOne">
        <input className="sampleTemplateH3" placeholder="Custom Title" />
        {new Array(2).fill("").map((_, tagInd) => (
          <SampleTemplateList key={tagInd} />
        ))}
      </div>
    </div>
  )
}