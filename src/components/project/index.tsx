import clsx from 'clsx'
import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import Projects from 'configs/projects'

import styles from './project.module.scss'

interface Props {
  project: string
}

const Project: FunctionComponent<Props> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const projectInfo = Projects[project]

  return (
    <div className={styles.container}>
      <div
        role="button"
        tabIndex={0}
        className={clsx(styles.pictureAndDetails, isExpanded && styles.expanded)}
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={() => setIsExpanded(!isExpanded)}
      >
        <Image
          placeholder="blur"
          className={styles.picture}
          src={projectInfo.pictureSrc}
          alt={projectInfo.pictureAlt}
          layout="intrinsic"
        />
        <div className={clsx(styles.details, isExpanded && styles.showDetails)}>
          <div className={styles.description}>{projectInfo.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Project
