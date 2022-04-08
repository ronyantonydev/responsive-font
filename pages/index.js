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
      <ResponsiveFont font={CursiveLarge}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
      <ResponsiveFont font={HeadingFont}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
      <ResponsiveFont font={HeadingSmall}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
      <ResponsiveFont font={NormalFont}>
        Responsive text please resize the screen{" "}
      </ResponsiveFont>
    </div>
  );
}
