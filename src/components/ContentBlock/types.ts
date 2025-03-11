import type { TFunction } from "i18next";

export interface ContentBlockProps {
  images: string[]; // <-- now supports single or multiple icons
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string; // optional: support same for sections
  }[];
  github_url?: string;
  modules?: {
    title: string;
    github_url: string;
  }[];
  button?: (
    | {
      title: string;
      color?: undefined;
    }
    | {
      title: string;
      color: string;
    }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
