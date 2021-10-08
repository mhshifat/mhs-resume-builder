import { useCallback, useState } from "react";
import { FaCog } from "react-icons/fa";

export default function SettingsFab({ generalSettings }) {
  const [showFab, setShowFab] = useState(false);
  const handleGeneralSettings = useCallback((variable, value) => {
    document.querySelector(':root').style.setProperty(`--${variable}`, value);
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
      </div>
    </div>
  );
}