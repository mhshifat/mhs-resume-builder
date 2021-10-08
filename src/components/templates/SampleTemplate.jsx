import { Fragment, useMemo } from "react";
import { useForm } from "react-hook-form";
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

export default function SampleTemplate({ data }) {
  const { register, control, setValue } = useForm({
    defaultValues: useMemo(() => data, [data])
  });

  return (
    <Fragment>
      <SampleTemplateHeader register={register} />
      <br />
      <br />
      <div className="sampleTemplateRow">
        <div className="sampleTemplateLeft">
          <SampleTemplateProfile register={register} />
          <SampleTemplatePersonalDetails register={register} />
          <br />
          <SampleTemplateContact register={register} />
        </div>
        <div className="sampleTemplateRight">
          <SampleTemplateWorkExperience control={control} register={register} />
          <br />
          <SampleTemplateEducations control={control} register={register} />
          <br />
          <SampleTemplateTags name="simple1" control={control} register={register} />
          <br />
          <SampleTemplateTags name="simple2" control={control} register={register} />
          <br />
          <SampleTemplateCircularSkills setValue={setValue} control={control} register={register} />
          <br />
          <SampleTemplateBarSkills setValue={setValue} control={control} register={register} />
          <br />
          <SampleTemplateLists control={control} register={register} />
        </div>
      </div>
    </Fragment>
  )
}