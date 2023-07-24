import "../styles/LoginUser.css";
import { SidebarAdmin } from "./SideBarAdmin";
const LoginUser = ({ stlyeLogin }: any) => {
  return (
    <>
      {stlyeLogin === 1 ? (
        <SidebarAdmin type="disrupter" />
      ) : stlyeLogin === 2 ? (
        <SidebarAdmin type="admin" />
      ) : (
        ""
      )}

      <div
     className="container-modal-login"
      >
    
      </div>
    </>
  );
};

export default LoginUser;
