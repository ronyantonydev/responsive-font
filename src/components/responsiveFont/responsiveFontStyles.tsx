import styled from "styled-components";

type TextProps = {
  minfontSize?: any;
  maxfontSize?: any;
  minScreenSize?: any;
  maxScreenSize?: any;
  screenSize?: any;
  fontWeight?: any;
  tag?: any;
  color?: any;
  fontFamily?: any;
};
const Style = styled.div<TextProps>`
  font-weight: ${(props: TextProps) => props.fontWeight && props.fontWeight};
  font-style: ${(props: TextProps) => props.tag && props.tag};
  color: ${(props: TextProps) => props.color && props.color};
  font-family: ${(props: TextProps) => props.fontFamily && props.fontFamily};
  font-size: clamp(
    ${(props: TextProps) => props.minfontSize},
    calc(
      ${(props: TextProps) => props.minfontSize} +
        (
          ${(props: TextProps) => props.maxfontSize} -
            ${(props: TextProps) => props.minfontSize}
        ) *
        (
          (
              ${(props: TextProps) => props.screenSize} -
                ${(props: TextProps) =>
                  props.minScreenSize ? parseFloat(props.minScreenSize) : 320}
            ) /
            (
              ${(props: TextProps) =>
                  props.maxScreenSize
                    ? parseFloat(props.maxScreenSize)
                    : 1560} -
                ${(props: TextProps) =>
                  props.minScreenSize ? parseFloat(props.minScreenSize) : 320}
            )
        )
    ),
    ${(props: TextProps) => props.maxfontSize}
  );
  @media (max-width: ${(props: TextProps) =>
      props.minScreenSize ? props.minScreenSize : "320px"}) {
    font-size: ${(props: TextProps) => props.minfontSize};
  }

  @media (min-width: ${(props: TextProps) =>
      props.maxScreenSize ? props.maxScreenSize : "1560px"}) {
    font-size: ${(props: TextProps) => props.maxfontSize};
  }
`;
export default Style;
