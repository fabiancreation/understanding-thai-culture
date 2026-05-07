type RuleProps = {
  variant?: "hard" | "soft";
  className?: string;
};

export default function Rule({ variant = "soft", className = "" }: RuleProps) {
  return (
    <hr
      role="presentation"
      className={`${variant === "hard" ? "rule" : "rule-soft"} ${className}`.trim()}
    />
  );
}
