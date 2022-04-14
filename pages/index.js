import ResponsiveFont from "../src/components/responsiveFont/responsiveFont.tsx";
import {
  CursiveLarge,
  HeadingFont,
  HeadingSmall,
  NormalFont
} from "../src/theme/theme.ts";
export default function IndexPage() {
  return (
    <div>
      <ResponsiveFont text={CursiveLarge}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
      <ResponsiveFont text={HeadingFont}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
      <ResponsiveFont text={HeadingSmall}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
      <ResponsiveFont text={NormalFont}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
    </div>
  );
}
