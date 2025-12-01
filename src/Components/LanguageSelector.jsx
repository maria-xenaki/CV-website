import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ mobile = false, onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();  // Prevent offcanvas from closing
    setOpen(!open);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    // Close dropdown
    setOpen(false);

    // In mobile, also close offcanvas (if callback exists)
    if (onLanguageChange) onLanguageChange();
  };

  const current = i18n.language.toUpperCase();
  const other = current === "EN" ? "GR" : "EN";
  const otherLng = current === "EN" ? "gr" : "en";

  return (
    <div className={`lang-selector ${mobile ? "mobile" : ""}`}>
      <div className="lang-current" onClick={toggleDropdown}>
        {current} ▾
      </div>

      {open && (
        <div className="lang-menu">
          <div onClick={() => changeLanguage(otherLng)}>
            {other}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;