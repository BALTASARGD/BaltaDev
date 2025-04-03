import React from "react";

interface SectionTitleProps {
  mainText: string;
  highlightText: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ mainText, highlightText, className }) => {
  return (
    <h1 className={`section-title ${className || ""}`}>
      <span className="section-title-main">{mainText}</span>{" "}
      <span className="section-title-highlight">{highlightText}</span>
    </h1>
  );
};

export default SectionTitle;
