export default function SampleTemplatePersonalDetails({ register }) {
  return (
    <div className="sampleTemplateGroup">
      <input className="sampleTemplateH3" style={{ marginBottom: "1.5rem" }} defaultValue="Personal Details" placeholder="Personal Details" {...register("personal_details.headline")} />
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Birth date" placeholder="Birth date" {...register("personal_details.dob.headline")} />
        <input className="sampleTemplateH4" placeholder="Enter your birth date" {...register("personal_details.dob.value")} />
      </div>
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Nationality" placeholder="Nationality" {...register("personal_details.nationality.headline")} />
        <input className="sampleTemplateH4" placeholder="Enter your nationality" {...register("personal_details.nationality.value")} />
      </div>
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Address" placeholder="Address" {...register("personal_details.address.headline")} />
        <input className="sampleTemplateH4" placeholder="Enter your address" {...register("personal_details.address.value")} />
      </div>
      <div className="sampleTemplateGroup">
        <input className="sampleTemplateH5" defaultValue="Marital status" placeholder="Marital status" {...register("personal_details.martial_status.headline")} />
        <input className="sampleTemplateH4" placeholder="Enter marital status" {...register("personal_details.martial_status.value")} />
      </div>
    </div>
  )
}