import React from "react";

interface FontProps {
  fontSize?: any;
  font?: {
    minfontSize: string;
    maxfontSize: string;
    minScreenSize: string;
    maxScreenSize: string;
  };
  children?: React.ReactNode;
}

const ResponsiveText = React.memo(({ font, fontSize, children }: FontProps) => {
  const fontHandler = () => {
    return ` clamp(calc(${fontSize} * 0.66),
          calc(
            (${fontSize} * 0.66) + 
          ((100vw - 768px) / (1560 - 768)) * 
          ${parseFloat(fontSize)} * 16 * 0.34),
      ${fontSize})`;
  };

  const customFontHandler = () => {
    return ` clamp(${font && font.minfontSize},
          calc(
            (${font && font.minfontSize}) + 
          ((100vw - ${parseFloat(
            font && font.minScreenSize
          )}px) / (${parseFloat(font && font.maxScreenSize)} - ${parseFloat(
      font && font.minScreenSize
    )})) * 
          ((${parseFloat(font && font.maxfontSize)} - ${parseFloat(
      font && font.minfontSize
    )}) * 16)),
      ${font && font.maxfontSize})`;
  };

  return font ? (
    <div
      style={{
        fontSize: customFontHandler()
      }}
    >
      {children}
    </div>
  ) : (
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
