import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import Slides from 'components/slides'
import Header from 'components/header'
// import slideContents from 'configs/slideContents'
import Project from 'components/project'
import styles from './main.module.scss'

const Main: FunctionComponent = () => (
  <div className={clsx(styles.lightTheme, styles.container)}>
    <Header />
    <Slides
      className={styles.slides}
      slideProps={{ containerClassName: styles.slideContainer, contentClassName: styles.slideContents }}
      scroll
    >
      <Project project="mattressMatcher" />
      <Project project="deliveryTracker" />
      <Project project="componentLibrary" />
    </Slides>
  </div>
)

export default Main
