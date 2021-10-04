import { FaChrome, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";

export default function SampleTemplateContact({ register }) {
  return (
    <div className="sampleTemplateGroup">
      <input className="sampleTemplateH3" style={{ marginBottom: "1.5rem" }} defaultValue="Contact" placeholder="Contact" {...register("contact.headline")} />
      <br />
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaPhone /></span>
          <input placeholder="Enter your phone number" {...register("contact.phone")} />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaEnvelope /></span>
          <input placeholder="Enter your email" {...register("contact.email")} />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaChrome /></span>
          <input placeholder="Enter your website url" {...register("contact.website")} />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaLinkedinIn /></span>
          <input placeholder="Enter your linkedin url" {...register("contact.linkedin")} />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaFacebookF /></span>
          <input placeholder="Enter your facebook url" {...register("contact.facebook")} />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaGithub /></span>
          <input placeholder="Enter your github url" {...register("contact.github")} />
        </div>
      </div>
    </div>
  )
}