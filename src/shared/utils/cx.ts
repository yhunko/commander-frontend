import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const cx = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
}
