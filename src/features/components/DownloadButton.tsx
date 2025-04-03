import React from "react";
import { FiDownload } from "react-icons/fi";

interface DownloadButtonProps {
  href: string;
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href, text }) => {
  return (
    <a href={href} download className="cv-download">
      <FiDownload /> {text}
    </a>
  );
};

export default DownloadButton;
