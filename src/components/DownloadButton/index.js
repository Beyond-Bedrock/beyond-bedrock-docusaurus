import React, { useState } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./styles.module.css";

export default function DownloadButton({
  title,
  description,
  visibleButtons = [], // [{ label, link, color }]
  hiddenButtons = [],  // [{ label, link, color }]
}) {
  const { colorMode } = useColorMode();
  const [showHidden, setShowHidden] = useState(false);

  // flip icon/text when toggled
  const toggleHidden = () => setShowHidden((prev) => !prev);

  return (
    <div
      className={clsx(
        styles.downloadContainer,
        colorMode === "dark" ? styles.dark : styles.light
      )}
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}

      {/* Visible Buttons */}
      <div className={styles.buttonRow}>
        {visibleButtons.map(({ label, link = "#", color = "#4CAF50" }, idx) => (
          <a
            key={idx}
            href={link}
            className={styles.button}
            style={{ backgroundColor: color }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Hidden Section Toggle */}
      {hiddenButtons.length > 0 && (
        <>
          <button
            className={styles.toggleBtn}
            onClick={toggleHidden}
          >
            {showHidden ? "Hide Others ▲" : "Show Others ▼"}
          </button>

          {/* Hidden Buttons */}
          {showHidden && (
            <div className={styles.hiddenSection}>
              {hiddenButtons.map(({ label, link, color = "#2196F3" }, idx) => (
                <a
                  key={idx}
                  href={link}
                  className={styles.hiddenButton}
                  style={{ borderColor: color }}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
