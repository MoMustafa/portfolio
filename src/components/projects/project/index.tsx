import { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import Projects from 'configs/projects'
import clsx from 'clsx'
import uniqueId from 'uniqid'

import styles from '../projects.module.scss'

interface Props {
  project: string
}

const Project: FunctionComponent<Props> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { pictureSrc, pictureAlt, description, details } = Projects[project]

  return (
    <div className={styles.container}>
      <div
        role="button"
        tabIndex={0}
        className={clsx(styles.pictureAndDetails, isExpanded && styles.expanded)}
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={() => setIsExpanded(!isExpanded)}
      >
        <Image placeholder="blur" className={styles.picture} src={pictureSrc} alt={pictureAlt} layout="intrinsic" />
        <div className={clsx(styles.details, isExpanded && styles.showDetails)}>
          <div className={styles.description}>{description}</div>
          <ul className={styles.detailsList}>
            {details.map((detail) => (
              <li key={uniqueId()}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
