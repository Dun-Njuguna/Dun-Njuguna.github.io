import type { TFunction } from "i18next";
export interface ContactProps {
  title: string;
  email: string;
  mobile: string;
  id: string;
  icon: string;
  t: TFunction;
}

export interface ValidationTypeProps {
  type: string;
}
