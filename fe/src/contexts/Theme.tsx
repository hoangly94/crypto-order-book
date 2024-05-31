import { PropsWithChildren, ReactNode } from "react";
import { ConfigProvider, theme } from "antd";

export type ProviderProps = PropsWithChildren<{
  children: ReactNode;
}>;

export function ThemeProvider({ children }: ProviderProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Layout: {
            colorBgLayout: "transparent",
          },
          Card: {
            colorBgContainer: "#00000088",
          },
          Select: {
            colorBgContainer: "#00000044",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

const text = {
  colorText: "#191919",
  fontSize: 14,
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
};
const heading = {
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  lineHeightHeading1: 3,
  lineHeightHeading2: 2.5,
  lineHeightHeading3: 2.25,
  lineHeightHeading4: 2,
  lineHeightHeading5: 1.75,
};

const green = {
  green1: "#F6FFED",
  green2: "#D9F7BE",
  green3: "#B7EB8F",
  green4: "#95DE64",
  green5: "#73D13D",
  green6: "#52C41A",
  green7: "#389E0D",
};

const gold = {
  gold1: "#FFFBE6",
  gold2: "#FFF1B8",
  gold3: "#FFE58F",
  gold4: "#FFD666",
  gold5: "#FFC53D",
  gold6: "#FAAD14",
  gold7: "#D48806",
};

const blue = {
  blue1: "#E6F4FF",
  blue2: "#BAE0FF",
  blue3: "#91CAFF",
  blue4: "#69B1FF",
  blue5: "#4096FF",
  blue6: "#1677FF",
  blue7: "#",
};

const red = {
  red1: "#FFF2F0",
  red2: "#FFF1F0",
  red3: "#FFCCC7",
  red4: "#FFA39E",
  red5: "#FF7875",
  red6: "#FF4D4F",
  red7: "#D9363E",
};
const colors = {
  ...green,
  ...gold,
  ...blue,
  ...red,
};

const colorPrimary = {
  colorPrimary: "#2A2974",
  colorPrimaryBg: "#7574DA",
  colorPrimaryBorderHover: "#4096FF",
  colorPrimaryActive: "#0958D9",
};

const colorSuccess = {
  colorSuccessBg: colors.green1,
  colorSuccessBgHover: colors.green2,
  colorSuccessBorder: colors.green3,
  colorSuccessBorderHover: colors.green4,
  colorSuccessHover: colors.green4,
  colorSuccess: colors.green6,
  colorSuccessActive: colors.green7,
  colorSuccessTextHover: colors.green5,
  colorSuccessText: colors.green6,
  colorSuccessTextActive: colors.green7,
};

const colorWarning = {
  colorWarningBg: colors.gold1,
  colorWarningBgHover: colors.gold2,
  colorWarningBorder: colors.gold3,
  colorWarningBorderHover: colors.gold4,
  colorWarningHover: colors.gold4,
  colorWarning: colors.gold6,
  colorWarningActive: colors.gold7,
  colorWarningTextHover: colors.gold5,
  colorWarningText: colors.gold6,
  colorWarningTextActive: colors.gold7,
};

const colorInfo = {
  colorInfoBg: colors.blue1,
  colorInfoBgHover: colors.blue2,
  colorInfoBorder: colors.blue3,
  colorInfoBorderHover: colors.blue4,
  colorInfoHover: colors.blue4,
  colorInfo: colors.blue6,
  colorInfoActive: colors.blue7,
  colorInfoTextHover: colors.blue5,
  colorInfoText: colors.blue6,
  colorInfoTextActive: colors.blue7,
};

const colorError = {
  colorErrorBg: colors.red1,
  colorErrorBgHover: colors.red2,
  colorErrorBorder: colors.red3,
  colorErrorBorderHover: colors.red4,
  colorErrorHover: colors.red4,
  colorError: colors.red6,
  colorErrorActive: colors.red7,
  colorErrorTextHover: colors.red5,
  colorErrorText: colors.red6,
  colorErrorTextActive: colors.red7,
};

const size = {
  sizeXXS: 4,
  sizeXS: 8,
  sizeSM: 12,
  size: 16,
  sizeMS: 16,
  sizeMD: 20,
  sizeLG: 24,
  sizeXL: 32,
  sizeXXL: 48,
};

const link = {
  colorLink: colorPrimary.colorPrimary,
  colorLinkHover: colorPrimary.colorPrimaryBorderHover,
  colorLinkActive: colorPrimary.colorPrimaryActive,
};

const height = {
  controlHeightXS: 16,
  controlHeightSM: 24,
  controlHeight: 32,
  controlHeightLG: 40,
};

const screen = {
  screenXS: 480,
  screenSM: 576,
  screenMD: 768,
  screenLG: 992,
  screenXL: 1200,
};

const margin = {
  marginXXS: size.sizeXXS,
  marginXS: size.sizeXS,
  marginSM: size.sizeSM,
  margin: size.size,
  marginMS: size.sizeMS,
  marginMD: size.sizeMD,
  marginLG: size.sizeLG,
  marginXL: size.sizeXL,
  marginXXL: size.sizeXXL,
};

const padding = {
  paddingXXS: size.sizeXXS,
  paddingXS: size.sizeXS,
  paddingSM: size.sizeSM,
  padding: size.size,
  paddingMS: size.sizeMS,
  paddingMD: size.sizeMD,
  paddingLG: size.sizeLG,
  paddingXL: size.sizeXL,
  paddingXXL: size.sizeXXL,
  paddingContentHorizontalSM: size.size,
  paddingContentVerticalSM: size.sizeXS,
  paddingContentHorizontal: size.sizeMS,
  paddingContentVertical: size.sizeSM,
  paddingContentHorizontalLG: size.sizeLG,
  paddingContentVerticalLG: size.sizeMS,
};

const borderRadius = {
  borderRadius: 6,
  borderRadiusLG: 8,
  borderRadiusSM: 4,
  borderRadiusXS: 2,
};

const boxShadow = {
  boxShadow:
    "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowSecondary:
    "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowTertiary:
    "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
};

const Layout = {
  headerBg: "#fff",
  siderBg: "#2A2974",
  headerPadding: 32,
};

const Button = {
  colorPrimary: colorPrimary.colorPrimaryBg,
  primaryShadow: "none",
};

const Checkbox = {
  colorPrimary: colorPrimary.colorPrimaryBg,
};

const Menu = {
  colorBgContainer: "transparent",
  itemActiveBg: "#191852",
  itemSelectedColor: "#fff",
  itemSelectedBg: "#191852",
  colorText: "#F1F7FE99",
  iconSize: 24,
  itemBorderRadius: 15,
  iconMarginInlineEnd: 20,
  padding: 20,
};

const Table = {
  headerBg: "#F1F7FE",
  rowSelectedBg: "#E1F5FF",
  rowSelectedHoverBg: "#E1F5FF",
};

export const themeTokens = {
  ...colorPrimary,
  ...colorSuccess,
  ...colorWarning,
  ...colorInfo,
  ...colorError,
  ...size,
  ...link,
  ...height,
  ...screen,
  ...margin,
  ...padding,
  ...borderRadius,
  ...boxShadow,
  ...text,
  ...heading,
};

export const themeComponents = {
  Button,
  Checkbox,
  Layout,
  Menu,
  Table,
};
