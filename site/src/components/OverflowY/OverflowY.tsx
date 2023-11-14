/**
 * @file Provides reusable vertical overflow behavior.
 */
import { type ReactNode } from "react";

type OverflowYProps = {
  children?: ReactNode;
  className?: string;
  height?: number;
  maxHeight?: number;
};

export function OverflowY({
  children,
  height,
  maxHeight,
  ...attrs
}: OverflowYProps) {
  const computedHeight = height === undefined ? "100%" : `${height}px`;

  // Doing Math.max check to catch cases where height is accidentally larger
  // than maxHeight
  const computedMaxHeight =
    maxHeight === undefined
      ? computedHeight
      : `${Math.max(height ?? 0, maxHeight)}px`;

  return (
    <div
      css={{
        width: "100%",
        height: computedHeight,
        maxHeight: computedMaxHeight,
        overflowY: "auto",
        flexShrink: 1,
      }}
      {...attrs}
    >
      {children}
    </div>
  );
}
