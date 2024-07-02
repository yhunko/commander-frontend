import { FC, ReactNode } from "react";

export type DropCapLetterProps = {
  value: string;
  children?: (dropCappedValue: ReactNode) => ReactNode;
};

export const DropCapLetter: FC<DropCapLetterProps> = ({ value, children }) => {
  const [firstLetter, ...rest] = value;

  const dropCappedString = (
    <span>
      <span className="text-yellow-400">{firstLetter.toUpperCase()}</span>
      <span>{rest.join("")}</span>
    </span>
  );

  if (children) return children(dropCappedString);

  return dropCappedString;
};
