import { FaChrome, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";

export default function SampleTemplateContact() {
  return (
    <div className="sampleTemplateGroup">
      <input className="sampleTemplateH3" style={{ marginBottom: "1.5rem" }} defaultValue="Contact" placeholder="Contact" />
      <br />
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaPhone /></span>
          <input placeholder="Enter your phone number" />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaEnvelope /></span>
          <input placeholder="Enter your email" />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaChrome /></span>
          <input placeholder="Enter your website url" />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaLinkedinIn /></span>
          <input placeholder="Enter your linkedin url" />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaFacebookF /></span>
          <input placeholder="Enter your facebook url" />
        </div>
      </div>
      <div className="sampleTemplateGroup">
        <div className="sampleTemplateIconInput">
          <span><FaGithub /></span>
          <input placeholder="Enter your github url" />
        </div>
      </div>
    </div>
  )
}