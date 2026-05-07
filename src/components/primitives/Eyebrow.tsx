type EyebrowProps = {
  children: React.ReactNode;
  as?: "span" | "p" | "div";
  className?: string;
};

export default function Eyebrow({
  children,
  as: Tag = "p",
  className = "",
}: EyebrowProps) {
  return <Tag className={`t-eyebrow ${className}`.trim()}>{children}</Tag>;
}
