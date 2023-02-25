import React from "react";

function LanguageSwitch({ currentLanguage, onLanguageChange, name }) {
  return (
    <div className="language-switch">
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={currentLanguage === "en"}
          onChange={() =>
            onLanguageChange(currentLanguage === "en" ? "sk" : "en")
          }
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">
          <span className="text">SK</span>
        </span>
        <span className="off">
          <span className="text">EN</span>
        </span>
      </div>
    </div>
  );
}

export default LanguageSwitch;
