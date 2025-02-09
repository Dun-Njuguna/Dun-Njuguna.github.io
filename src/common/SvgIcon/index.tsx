import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  // Check if src is a URL (starts with "http://" or "https://")
  const isUrl = src.startsWith("http://") || src.startsWith("https://");

  return (
    <img 
      src={isUrl ? src : `/img/svg/${src}`} 
      alt={src} 
      width={width} 
      height={height} 
    />
  );
};
