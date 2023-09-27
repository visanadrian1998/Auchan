import { useCurrentUser } from "../../CurrentUserContext"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const userContext:any = useCurrentUser();
  const navigate = useNavigate()

  return (
    <>
      {userContext.isLoggedIn ? 
      <>
      <h4>Salut {userContext.userInfo.Name},</h4>
      <h4>Username-ul tau este {userContext.userInfo.Username},</h4>
      <h4>iar adresa ta este {userContext.userInfo.Address}</h4>
      <h4>Vrei sa afli informatii meteo despre ziua de astazi in Bucuresti? <span onClick={()=>navigate("/meteo")}>APASA AICI</span></h4>
      </> 
      :
        <>
        <p>Nu sunteti logat.</p>
        </>}
    </>
  );
};
export default Home;