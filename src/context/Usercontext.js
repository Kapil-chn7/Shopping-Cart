import maincontext from "./Maincontext";
import userInfo from "../Data/UserInfo";

const UserContext = (props) => {
  return (
    <maincontext.Provider value={userInfo}>
      {props.children}
    </maincontext.Provider>
  );
};

export default UserContext;
