import React, { FunctionComponent } from 'react'
import Project from 'components/project'

import Recommendation from 'components/recommendation'
import Recommmendations from 'configs/recommendations'
import uniqueId from 'uniqid'
import styles from './main.module.scss'

const Main: FunctionComponent = () => (
  <div className={styles.container}>
    <div className={styles.projectsWrapper}>
      <Project project="mattressMatcher" />
      <Project project="deliveryTracker" />
      <Project project="componentLibrary" />
    </div>
    <div className={styles.recommendationsWrapper}>
      <div className={styles.recommendationsContent}>
        {Recommmendations.map((recommendation) => (
          <Recommendation key={uniqueId()} {...recommendation} />
        ))}
      </div>
    </div>
  </div>
)

export default Main
