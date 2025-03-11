import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const isUrl = src.startsWith("http://") || src.startsWith("https://");

  return (
    <img
      src={isUrl ? src : `/img/svg/${src}`}
      alt={src}
      style={{
        width: width || "100%",
        height: height || "auto",
        objectFit: "contain",
        display: "block", // Prevent inline-block weirdness
        margin: "0 auto", // Center horizontally if needed
      }}
    />
  );
};
