import React, { FunctionComponent } from 'react'
import Projects from 'components/projects'
import RecommmendationsBanner from 'components/recommendationsBanner'

import styles from './main.module.scss'

const Main: FunctionComponent = () => (
  <div className={styles.container}>
    <Projects />
    <RecommmendationsBanner />
  </div>
)

export default Main
