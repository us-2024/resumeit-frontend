function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

function TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}

function TypographyH3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}

function TypographyH4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h4>
  );
}

function TypographyP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
}

function TypographyBlockquote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </blockquote>
  );
}

export const Typography = ({
  variant = "p",
  className,
  children,
}: {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote";
  className?: string;
  children: React.ReactNode;
}) => {
  switch (variant) {
    case "h1":
      return <TypographyH1 className={className}>{children}</TypographyH1>;
    case "h2":
      return <TypographyH2 className={className}>{children}</TypographyH2>;
    case "h3":
      return <TypographyH3 className={className}>{children}</TypographyH3>;
    case "h4":
      return <TypographyH4 className={className}>{children}</TypographyH4>;
    case "p":
      return <TypographyP className={className}>{children}</TypographyP>;
    case "blockquote":
      return (
        <TypographyBlockquote className={className}>
          {children}
        </TypographyBlockquote>
      );
    default:
      return <TypographyP className={className}>{children}</TypographyP>;
  }
};
