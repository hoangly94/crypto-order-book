import { Outlet } from "react-router-dom";
import { AuthenticatedContainer as S } from "./styled";

export const PublicContainer = () => {
  return (
    <S.Layout>
      <S.LayoutContent>
        <Outlet />
      </S.LayoutContent>
    </S.Layout>
  );
};
