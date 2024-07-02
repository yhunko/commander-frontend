import { FC, ReactNode } from "react";

export type DropCapLetterProps = {
  value: string;
  children?: (dropCappedValue: ReactNode) => ReactNode;
};

// Name comes from: https://fonts.google.com/knowledge/glossary/drop_cap
export const DropCapLetter: FC<DropCapLetterProps> = ({ value, children }) => {
  const [firstLetter, ...rest] = value;

  const dropCappedString = (
    <span>
      <span className="text-yellow-400">{firstLetter.toUpperCase()}</span>
      <span>{rest.join("")}</span>
    </span>
  );

  return children?.(dropCappedString) ?? dropCappedString;
};
