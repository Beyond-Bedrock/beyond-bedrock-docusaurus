import React, { useState } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import { incrementDownload } from "@site/src/lib/counterClient";
import DownloadCounter from "../DownloadCounter";

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

  const handleDownload = (e, link, label) => {
    // Track download via Cloudflare Worker
    const fileName = label.toLowerCase().replace(/\s+/g, '-');
    incrementDownload(fileName).catch(error => console.error('Download tracking error:', error));
    
    // Continue with normal link behavior
  };

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
          <div key={idx} className={styles.buttonWrapper}>
            <a
              href={link}
              onClick={(e) => handleDownload(e, link, label)}
              className={styles.button}
              style={{ backgroundColor: color }}
            >
              {label}
            </a>
            <DownloadCounter file={label.toLowerCase().replace(/\s+/g, '-')} showLabel={false} />
          </div>
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
                <div key={idx} className={styles.buttonWrapper}>
                  <a
                    href={link}
                    onClick={(e) => handleDownload(e, link, label)}
                    className={styles.hiddenButton}
                    style={{ borderColor: color }}
                  >
                    {label}
                  </a>
                  <DownloadCounter file={label.toLowerCase().replace(/\s+/g, '-')} showLabel={false} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
