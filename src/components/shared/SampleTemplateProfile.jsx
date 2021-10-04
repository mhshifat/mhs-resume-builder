import Textarea from "./Textarea";

export default function SampleTemplateProfile({ register }) {
  return (
    <div className="sampleTemplateGroup">
      <input className="sampleTemplateH3" defaultValue="Profile" placeholder="Profile" {...register("profile.headline")} />
      <Textarea className="sampleTemplateTextarea" placeholder="Write here a paragraph about yourself." {...register("profile.details")} />
    </div>
  )
}