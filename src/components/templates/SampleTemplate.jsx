import { Fragment } from "react";
import SampleTemplateBarSkills from "../shared/SampleTemplateBarSkills";
import SampleTemplateCircularSkills from "../shared/SampleTemplateCircularSkills";
import SampleTemplateContact from "../shared/SampleTemplateContact";
import SampleTemplateEducations from "../shared/SampleTemplateEducations";
import SampleTemplateHeader from "../shared/SampleTemplateHeader";
import SampleTemplateLists from "../shared/SampleTemplateLists";
import SampleTemplatePersonalDetails from "../shared/SampleTemplatePersonalDetails";
import SampleTemplateProfile from "../shared/SampleTemplateProfile";
import SampleTemplateTags from "../shared/SampleTemplateTags";
import SampleTemplateWorkExperience from "../shared/SampleTemplateWorkExperience";

export default function SampleTemplate({ name }) {
  return (
    <Fragment>
      <SampleTemplateHeader />
      <br />
      <br />
      <div className="sampleTemplateRow">
        <div className="sampleTemplateLeft">
          <SampleTemplateProfile />
          <SampleTemplatePersonalDetails />
          <br />
          <SampleTemplateContact />
        </div>
        <div className="sampleTemplateRight">
          <SampleTemplateWorkExperience />
          <br />
          <SampleTemplateEducations />
          <br />
          <SampleTemplateTags />
          <br />
          <SampleTemplateTags />
          <br />
          <SampleTemplateCircularSkills />
          <br />
          <SampleTemplateBarSkills />
          <br />
          <SampleTemplateLists />
        </div>
      </div>
    </Fragment>
  )
}