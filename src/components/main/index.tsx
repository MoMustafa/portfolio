import { FunctionComponent } from 'react'
import Projects from 'components/projects'
import RecommmendationsBanner from 'components/recommendationsBanner'
import TechStack from 'components/techstack'
import Footer from 'components/footer'

import styles from './main.module.scss'

const Main: FunctionComponent = () => (
  <div className={styles.container}>
    <Projects />
    <RecommmendationsBanner />
    <TechStack />
    <Footer />
  </div>
)

export default Main
