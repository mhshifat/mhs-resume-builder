export default function SampleTemplatePersonalDetails() {
  return (
    <div className="sampleTemplateGroup">
      <input className="sampleTemplateH3" style={{ marginBottom: "1.5rem" }} defaultValue="Personal Details" placeholder="Personal Details" />
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Birth date" placeholder="Birth date" />
        <input className="sampleTemplateH4" placeholder="Enter your birth date" />
      </div>
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Nationality" placeholder="Nationality" />
        <input className="sampleTemplateH4" placeholder="Enter your nationality" />
      </div>
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Address" placeholder="Address" />
        <input className="sampleTemplateH4" placeholder="Enter your address" />
      </div>
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Marital status" placeholder="Marital status" />
        <input className="sampleTemplateH4" placeholder="Enter marital status" />
      </div>
    </div>
  )
}