import Textarea from "./Textarea";

export default function SampleTemplateProfile() {
  return (
    <div className="sampleTemplateGroup">
      <input className="sampleTemplateH3" defaultValue="Profile" placeholder="Profile" />
      <Textarea className="sampleTemplateTextarea" placeholder="Write here a paragraph about yourself." />
    </div>
  )
}