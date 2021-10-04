import { Fragment } from "react";

export default function SampleTemplateHeader({ register }) {
  return (
    <Fragment>
      <input className="sampleTemplateH1" placeholder="Your name" {...register("name")} />
      <input className="sampleTemplateH3" placeholder="Your profession or specialty" {...register("profession")} />
    </Fragment>
  )
}