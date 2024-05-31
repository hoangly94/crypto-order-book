import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

const Layout = styled(AntdLayout)`
  height: 100%;
`;

const LayoutContent = styled(AntdLayout.Content)`
  padding: 0 32px 32px;
  overflow: auto;
`;

export const AuthenticatedContainer = {
  Layout,
  LayoutContent,
};
