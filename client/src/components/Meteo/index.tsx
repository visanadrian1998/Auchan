import { useEffect, useState } from "react";
import { useCurrentUser } from "../../CurrentUserContext"
import Axios from "axios";
const Meteo = () => {
  const userContext:any = useCurrentUser();
  const [meteoInfo, setMeteoInfo] = useState<any>(null)
  useEffect(()=>{
    async function fetchMeteo(){
        let infoMeteo;
        if(userContext.isLoggedIn) infoMeteo = await Axios.get("https://api.open-meteo.com/v1/forecast?latitude=44.4323&longitude=26.1063&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset")
        if(infoMeteo?.data?.daily) setMeteoInfo(infoMeteo.data.daily);
    }
    fetchMeteo();
  },[userContext.isLoggedIn])

  return (
    <>
      {userContext.isLoggedIn && meteoInfo ? 
      <>
      <h1>Informatii meteo Bucuresti azi:</h1>
      <h4>Rasarit: {meteoInfo.sunrise[0]}</h4>
      <h4>Apus: {meteoInfo.sunset[0]}</h4>
      <h4>Temperatura maxima: {meteoInfo.temperature_2m_max[0]}</h4>
      <h4>Temperatura minima: {meteoInfo.temperature_2m_min[0]}</h4>
      </> 
      :
        <>
        <p>Din pacate, nu va putem afisa informatiile.</p>
        </>}
    </>
  );
};
export default Meteo;