import { Outlet } from "react-router-dom";
import { ViewMenu, ViewFooter } from "../components";

const Layout = () => {
  return (
    <div>
      <ViewMenu>
        <Outlet />
      </ViewMenu>
      <ViewFooter />
    </div>
  );
};
export default Layout;
