import React, { FunctionComponent } from 'react'
import Project from './project'

import styles from './projects.module.scss'

const Projects: FunctionComponent = () => {
  console.log()
  return (
    <div className={styles.slidesWrapper}>
      <div className={styles.projectsBanner}>PROJECTS</div>
      <div className={styles.projectsWrapper}>
        <Project project="mattressMatcher" />
        <Project project="deliveryTracker" />
        <Project project="componentLibrary" />
      </div>
    </div>
  )
}

export default Projects
