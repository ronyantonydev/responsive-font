import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

interface FontProps {
  className?: string;
  text?: {
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

const ResponsiveFont = React.memo(
  ({ text, className, children }: FontProps) => {
    // const remValue = window.getComputedStyle(document.documentElement)[
    //   "font-size"
    // ];
    // console.log(remValue);
    return (
      <div>
        <div
          style={{
            fontSize: `clamp(${text.minfontSize},calc(${
              text.minfontSize
            } + ((100vw - ${parseFloat(text.minScreenSize)}px) / (${parseFloat(
              text.maxScreenSize
            )} - ${parseFloat(text.minScreenSize)})) * (${parseFloat(
              text.maxfontSize
            )} - ${parseFloat(text.minfontSize)})*16), ${text.maxfontSize})`
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default ResponsiveFont;
