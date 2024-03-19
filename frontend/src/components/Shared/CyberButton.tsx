import ButtonSvg from "../../assets/svg/ButtonSvg";

const CyberButton = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  submit,
}: {
  className?: string | undefined;
  href?: string | undefined;
  onClick: () => void;
  children?: React.ReactNode | undefined;
  px?: string | undefined;
  white?: boolean | undefined;
  submit?: boolean | undefined;
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button
      type={submit ? "submit" : "button"}
      className={classes}
      onClick={onClick}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default CyberButton;
