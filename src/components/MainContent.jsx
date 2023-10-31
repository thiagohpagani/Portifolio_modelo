import '../styles/components/maincontent.sass'
import AbountContainer from './AbountContainer'
import ProjectConteiner from './ProjectConteiner'
import TecnologyConteiner from './TecnologyConteiner'

function MainContent() {
  return (
    <main id="main-content">
      <AbountContainer />
      <TecnologyConteiner />
      <ProjectConteiner />
    </main>
    
  )
}

export default MainContent