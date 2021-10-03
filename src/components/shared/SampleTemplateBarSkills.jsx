import SampleTemplateBarSkill from "./SampleTemplateBarSkill";

export default function SampleTemplateBarSkills() {
  return (
    <div>
      <input className="sampleTemplateH3" placeholder="Custom Title" />
      <div className="sampleTemplateBarSkills">
        {new Array(2).fill("").map((_, tagInd) => (
          <SampleTemplateBarSkill key={tagInd} />
        ))}
      </div>
    </div>
  )
}