import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import { useCallback, useState } from "react";
import { FaCog } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

export default function SettingsFab({ generalSettings, templateSettings }) {
  const [showFab, setShowFab] = useState(false);
  const handleGeneralSettings = useCallback((variable, value) => {
    document.querySelector(':root').style.setProperty(`--${variable}`, value);
  }, []);
  const downloadResumeAsPdf = useCallback(() => {
    const docEle = document.querySelector(".buildWrapper__container");
    htmlToImage.toJpeg(docEle).then((imgData) => {
      const pdf = new jsPDF('p', 'pt', 'a4', false);
      pdf.addImage(imgData, 'PNG', 0, 0, 600, 0, undefined, false);
      pdf.save("download.pdf");
    });
  }, []);

  return (
    <div className={`settingsFab ${showFab ? "show" : ""}`}>
      <button onClick={() => setShowFab(value => !value)}><FaCog /></button>
      <div className="settingsFab__content">
        <h3>General Settings</h3>
        <div className="settingsFab__generalSettings">
          <input type="color" defaultValue={generalSettings.color} onChange={({ target }) => handleGeneralSettings("primaryColor", target.value)} />
          <select value={generalSettings.typography} onChange={({ target }) => handleGeneralSettings("primaryFont", target.value)}>
            <option value="Saira Semi Condensed">Saira Semi Condensed</option>
          </select>
          <select value={generalSettings.text_size} onChange={({ target }) => handleGeneralSettings("primaryFontSize", target.value)}>
            <option value="10px">A</option>
            <option value="15px">AA</option>
            <option value="20px">AAA</option>
          </select>
        </div>
        <br />
        <h3>Template Settings</h3>
        <div className="settingsFab__templateSettings">
          <div className="settingsFab__left">
            {templateSettings?.profile && <span>
              <ToggleSwitch id="toggleSwitch" /> Profile
            </span>}
            <h5>Personal Information</h5>
            {templateSettings?.personal_info?.address && <span>
              <ToggleSwitch id="toggleSwitch1" /> Address
            </span>}
            {templateSettings?.personal_info?.dob && <span>
              <ToggleSwitch id="toggleSwitch2" /> Date Of Birth
            </span>}
            {templateSettings?.personal_info?.nationality && <span>
              <ToggleSwitch id="toggleSwitch3" /> Nationality
            </span>}
            {templateSettings?.personal_info?.martial_status && <span>
              <ToggleSwitch id="toggleSwitch4" /> Martial Status
            </span>}
            <h5>Contact</h5>
            {templateSettings?.contact?.email && <span>
              <ToggleSwitch id="toggleSwitch5" /> Email
            </span>}
            {templateSettings?.contact?.phone && <span>
              <ToggleSwitch id="toggleSwitch6" /> Phone
            </span>}
            {templateSettings?.contact?.website && <span>
              <ToggleSwitch id="toggleSwitch7" /> Website
            </span>}
            {templateSettings?.contact?.linkedin && <span>
              <ToggleSwitch id="toggleSwitch8" /> Linkedin
            </span>}
            {templateSettings?.contact?.facebook && <span>
              <ToggleSwitch id="toggleSwitch9" /> Facebook
            </span>}
            {templateSettings?.contact?.github && <span>
              <ToggleSwitch id="toggleSwitch10" /> Github
            </span>}
          </div>
          <div className="settingsFab__right">
            {templateSettings?.educations && <span>
              <ToggleSwitch id="toggleSwitch11" /> Educations
            </span>}
            {templateSettings?.work_experiences && <span>
              <ToggleSwitch id="toggleSwitch12" /> Work Experiences
            </span>}
            <h5>Skills</h5>
            {templateSettings?.skills?.simple1 && <span>
              <ToggleSwitch id="toggleSwitch13" /> Simple 1
            </span>}
            {templateSettings?.skills?.simple2 && <span>
              <ToggleSwitch id="toggleSwitch14" /> Simple 2
            </span>}
            {templateSettings?.skills?.circles && <span>
              <ToggleSwitch id="toggleSwitch15" /> Circle
            </span>}
            {templateSettings?.skills?.bars && <span>
              <ToggleSwitch id="toggleSwitch16" /> Bar
            </span>}
            <h5>Additional Info</h5>
            {templateSettings?.additional_info?.list1 && <span>
              <ToggleSwitch id="toggleSwitch17" /> List 1
            </span>}
            {templateSettings?.additional_info?.list2 && <span>
              <ToggleSwitch id="toggleSwitch18" /> List 2
            </span>}
          </div>
        </div>
        <br />
        <h3>Action Buttons</h3>
        <div className="settingsFab__actionButtons">
          <button onClick={downloadResumeAsPdf}>Download</button>
        </div>
      </div>
    </div>
  );
}