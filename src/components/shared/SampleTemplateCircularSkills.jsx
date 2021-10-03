import SampleTemplateCircularSkill from "./SampleTemplateCircularSkill";

export default function SampleTemplateCircularSkills() {
  return (
    <div>
      <input className="sampleTemplateH3" placeholder="Custom Title" />
      <div className="sampleTemplateCircleSkills">
        {new Array(2).fill("").map((_, tagInd) => (
          <SampleTemplateCircularSkill key={tagInd} />
        ))}
      </div>
    </div>
  )
}