import React from "react";
import { useEffect, useState } from "react";
import Style from "./responsiveFontStyles.tsx";

interface FontProps {
  className?: string;
  font?: {
    minfontSize: string;
    maxfontSize: string;
    minScreenSize?: string;
    maxScreenSize?: string;
    fontWeight?: string;
    tag?: string;
    color?: string;
    fontFamily?: string;
  };
  children?: React.ReactNode;
}

function useWindowSize() {
  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const ResponsiveFont = React.memo(
  ({ font, className, children }: FontProps) => {
    const width = useWindowSize();
    return (
      <Style
        className={className}
        screenSize={width}
        minfontSize={font?.minfontSize}
        maxfontSize={font?.maxfontSize}
        minScreenSize={font?.minScreenSize}
        maxScreenSize={font?.maxScreenSize}
        fontWeight={font?.fontWeight}
        tag={font?.tag}
        color={font?.color}
        fontFamily={font?.fontFamily}
      >
        {children}
      </Style>
    );
  }
);

export default ResponsiveFont;
