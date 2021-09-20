import React, { FunctionComponent, useEffect, useRef } from 'react'
import clsx from 'clsx'
import Project from 'components/project'

import Recommendation from 'components/recommendation'
import Recommmendations from 'configs/recommendations'
import uniqueId from 'uniqid'
import styles from './main.module.scss'

const Main: FunctionComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (contentRef?.current?.childElementCount) {
  //     contentRef.current.style.width = `${contentRef.current.childElementCount * 100}vw`
  //   }
  // }, [contentRef])

  return (
    <div className={styles.container}>
      <div className={styles.projectsWrapper}>
        <Project project="mattressMatcher" />
        <Project project="deliveryTracker" />
        <Project project="componentLibrary" />
      </div>
      <div className={styles.recommendationsWrapper}>
        {Recommmendations.map((recommendation) => (
          <Recommendation key={uniqueId()} {...recommendation} />
        ))}
      </div>
    </div>
  )
}

export default Main
