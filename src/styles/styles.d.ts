import 'styled-components';

declare module 'styled-components' {
  interface ColorPalette {
    Color50?: string;
    Color100?: string;
    Color200?: string;
    Color300?: string;
    Color400?: string;
    Color500?: string;
    Color600?: string;
    Color700?: string;
    Color800?: string;
    Color900?: string;
    [id]: string;
  }
  interface DefaultTheme {
    PrimaryColor: ColorPalette;
    SecondaryColor: ColorPalette;
    ThirdaryColor: ColorPalette;
    GrayColor: ColorPalette;
  }
}
