import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact 
} from 'react-icons/di'

import '../styles/components/tecnologiesconteiner.sass'

const technologies = [
    { id: "html", name: "Html5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "NodeJS", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "ReactJS", icon: <DiReact /> }

];

const TecnologyConteiner = () => {
  return (
   <section className="tecnologies-conteiner">
    <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map(tech => (
               <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="tecnology-info">
                    <h3>{tech.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
               </div>
            ))}
        </div>
   </section>
  )
}

export default TecnologyConteiner