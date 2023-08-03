import "../styles/LoginUser.css";
import { SidebarAdmin } from "./SideBarAdmin";
const LoginUser = ({ stlyeLogin, setInLogin }: any) => {
  return (
    <>
      {stlyeLogin === 1 ? (
        <SidebarAdmin type="disrupter" setInLogin={setInLogin} />
      ) : stlyeLogin === 2 ? (
        <SidebarAdmin type="admin" setInLogin={setInLogin} />
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
