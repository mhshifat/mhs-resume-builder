import { useState } from "react";
import { FaCog } from "react-icons/fa";

export default function SettingsFab() {
  const [showFab, setShowFab] = useState(false);

  return (
    <div className={`settingsFab ${showFab ? "show" : ""}`}>
      <button onClick={() => setShowFab(value => !value)}><FaCog /></button>
      <div className="settingsFab__content">
        <p>Welcome</p>
      </div>
    </div>
  );
}