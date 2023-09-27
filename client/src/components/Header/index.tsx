import { useCurrentUser } from "../../CurrentUserContext"
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { HeaderWrapperCss } from "./index.css";
const Header = () => {
  const userContext:any = useCurrentUser();
  const logOut = async () =>{
    const response = await Axios.post("/api/logout");
    if (response.data?.success) {
      userContext.fetchCurrentUser();
    }
  }
  return (
    <HeaderWrapperCss id="HeaderWrapper">
      {userContext.isLoggedIn ?
        <>
        <Link to="/">HOMEPAGE</Link>
        <span onClick={()=>logOut()}>LOGOUT</span>
        </> :
        <>
        <Link to="/login">LOGIN</Link>
        </>}
    </HeaderWrapperCss>
  );
};
export default Header;