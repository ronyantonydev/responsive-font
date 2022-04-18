import ResponsiveFont from "../src/components/responsiveFont/responsiveFont.tsx";
import Text from "../src/components/responsiveFont/responsiveFont.tsx";

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
        Responsive font please resize the screen
      </ResponsiveFont>
      <Text fontSize="5rem">Responsive font please resize the screen </Text>
      <ResponsiveFont font={HeadingFont}>
        Responsive font please resize the screen
      </ResponsiveFont>
      <ResponsiveFont font={HeadingSmall}>
        Responsive font please resize the screen
      </ResponsiveFont>
      <ResponsiveFont font={NormalFont}>
        Responsive font please resize the screen
      </ResponsiveFont>
    </div>
  );
}
