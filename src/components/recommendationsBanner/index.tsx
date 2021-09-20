import React, { FunctionComponent } from 'react'
import Recommmendations from 'configs/recommendations'
import uniqueId from 'uniqid'
import Blockquote from './blockquote'

import styles from './recommendationsBanner.module.scss'

const RecommmendationsBanner: FunctionComponent = () => {
  console.log()

  return (
    <div className={styles.recommendationsWrapper}>
      <div className={styles.recommendationsContent}>
        {Recommmendations.map((recommendation) => (
          <Blockquote key={uniqueId()} {...recommendation} />
        ))}
      </div>
    </div>
  )
}

export default RecommmendationsBanner
