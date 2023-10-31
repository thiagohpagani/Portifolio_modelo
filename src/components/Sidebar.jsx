import SocialNetwork from "./SocialNetwork";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/foto-perfil.png";
import "../styles/components/sidebar.sass";



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Thiago Pagani"/>
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>


    </aside>
  )
}

export default Sidebar