export const Grid = ({
  children,
  className,
  columns,
  gap,
  colSpan,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  columns?: number;
  gap?: number;
  colSpan?: number;
}) => {
  return (
    <div
      className={`grid grid-cols-${columns} gap-${gap} col-span-${colSpan} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
