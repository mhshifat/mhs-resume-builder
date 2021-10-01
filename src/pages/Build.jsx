/* eslint-disable jsx-a11y/heading-has-content */

import { useState } from "react";
import { FaChrome, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaMinus, FaPhone, FaPlus } from "react-icons/fa";
import SampleTemplateBarSkill from "../components/shared/SampleTemplateBarSkill";
import SampleTemplateCircularSkill from "../components/shared/SampleTemplateCircularSkill";
import SampleTemplateTag from "../components/shared/SampleTemplateTag";

export default function Build() {
  const [profile, setProfile] = useState("");

  return (
    <div className="buildWrapper">
      <div className="buildWrapper__container">
        <input className="sampleTemplateH1" placeholder="Your name" />
        <input className="sampleTemplateH3" placeholder="Your profession or specialty" />
        <br />
        <br />
        <div className="sampleTemplateRow">
          <div className="sampleTemplateLeft">
            <div className="sampleTemplateGroup">
              <input className="sampleTemplateH3" defaultValue="Profile" placeholder="Profile" />
              <textarea style={{ height: profile.length ? profile.length + "ch" : "3rem" }} onChange={({ target }) => setProfile(target.value)} className="sampleTemplateP" placeholder="Write here a paragraph about yourself." />
            </div>
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
            <br />
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
          </div>
          <div className="sampleTemplateRight">
            <div>
              <input className="sampleTemplateH3" defaultValue="WORK EXPERIENCE" placeholder="WORK EXPERIENCE" />
              <div className="sampleTemplateExpEdu">
                <span className="sampleTemplateExpEdu__menus">
                  <button title="Remove"><FaMinus /></button>
                  <button title="Add"><FaPlus /></button>
                </span>
                <input placeholder="Position" />
                <div>
                  <input placeholder="Employer" />
                  <input placeholder="From - Until" />
                </div>
                <textarea style={{ height: profile.length ? profile.length + "ch" : "3rem" }} onChange={({ target }) => setProfile(target.value)} className="sampleTemplateP" placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer." />
              </div>
              <div className="sampleTemplateExpEdu">
                <span className="sampleTemplateExpEdu__menus">
                  <button title="Remove"><FaMinus /></button>
                  <button title="Add"><FaPlus /></button>
                </span>
                <input placeholder="Position" />
                <div>
                  <input placeholder="Employer" />
                  <input placeholder="From - Until" />
                </div>
                <textarea style={{ height: profile.length ? profile.length + "ch" : "3rem" }} onChange={({ target }) => setProfile(target.value)} className="sampleTemplateP" placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer." />
              </div>
            </div>
            <br />
            <div>
              <input className="sampleTemplateH3" defaultValue="EDUCATION" placeholder="EDUCATION" />
              <div className="sampleTemplateExpEdu edu">
                <span className="sampleTemplateExpEdu__menus">
                  <button title="Remove"><FaMinus /></button>
                  <button title="Add"><FaPlus /></button>
                </span>
                <input placeholder="Degree" />
                <div>
                  <input placeholder="School" />
                  <input placeholder="From - Until" />
                </div>
              </div>
              <div className="sampleTemplateExpEdu">
                <span className="sampleTemplateExpEdu__menus">
                  <button title="Remove"><FaMinus /></button>
                  <button title="Add"><FaPlus /></button>
                </span>
                <input placeholder="Degree" />
                <div>
                  <input placeholder="School" />
                  <input placeholder="From - Until" />
                </div>
              </div>
            </div>
            <br />
            <div>
              <input className="sampleTemplateH3" placeholder="Custom Title" />
              <div className="sampleTemplateTags">
                {new Array(1).fill("").map((_, tagInd) => (
                  <SampleTemplateTag key={tagInd} />
                ))}
              </div>
            </div>
            <br />
            <div>
              <input className="sampleTemplateH3" placeholder="Custom Title" />
              <div className="sampleTemplateTags">
                {new Array(1).fill("").map((_, tagInd) => (
                  <SampleTemplateTag key={tagInd} />
                ))}
              </div>
            </div>
            <br />
            <div>
              <input className="sampleTemplateH3" placeholder="Custom Title" />
              <div className="sampleTemplateCircleSkills">
                {new Array(2).fill("").map((_, tagInd) => (
                  <SampleTemplateCircularSkill key={tagInd} />
                ))}
              </div>
            </div>
            <br />
            <div>
              <input className="sampleTemplateH3" placeholder="Custom Title" />
              <div className="sampleTemplateBarSkills">
                {new Array(2).fill("").map((_, tagInd) => (
                  <SampleTemplateBarSkill key={tagInd} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}