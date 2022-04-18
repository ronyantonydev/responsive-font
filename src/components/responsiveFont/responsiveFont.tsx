import React from "react";

interface FontProps {
  fontSize?: any;
  children?: React.ReactNode;
}

const ResponsiveText = React.memo(({ fontSize, children }: FontProps) => {
  const fontHandler = () => {
    return ` clamp(calc(${fontSize} * 0.66),
          calc(
            (${fontSize} * 0.66) + 
          ((100vw - 768px) / (1560 - 768)) * 
          ${parseFloat(fontSize)} * 16 * 0.34),
      ${fontSize})`;
  };

  return (
    <div
      style={{
        fontSize: fontHandler()
      }}
    >
      {children}
    </div>
  );
});

export default ResponsiveText;
