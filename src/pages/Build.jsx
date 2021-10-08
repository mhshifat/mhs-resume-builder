import { useMemo } from "react";
import { useLocation } from "react-router";
import SettingsFab from "../components/shared/SettingsFav";
import { templates } from "../utils/constants";


export default function Build() {
  const { search } = useLocation();
  const templateName = useMemo(() => new URLSearchParams(search).get("template"), [search]);
  const { component: Component, ...rest } = useMemo(() => templates.find(t => t.unique_id === templateName), [templateName]);

  return (
    <div className="buildWrapper">
      <div className="buildWrapper__container">
        <Component {...rest} />
      </div>
      <SettingsFab generalSettings={rest.settings.general} />
    </div>
  )
}
