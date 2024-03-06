export const Stack = ({
  children,
  className,
  direction = "col",
  align = "start",
  justify = "start",
  gap = 4,
  wrap = "nowrap",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "col";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
  gap?: number;
  wrap?: "nowrap" | "wrap";
}) => {
  return (
    <div
      className={`flex flex-${direction} flex-wrap-${wrap} items-${align} justify-${justify} gap-${gap} ${className}`}
    >
      {children}
    </div>
  );
};
