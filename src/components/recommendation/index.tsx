import React, { FunctionComponent } from 'react'

import styles from './recommendation.module.scss'

interface Props {
  author: string
  blurb: string
}

const Recommendation: FunctionComponent<Props> = ({ author, blurb }) => {
  console.log()

  return (
    <div className={styles.blockquoteWrapper}>
      <h1 className={styles.blockquote}>{blurb}</h1>
      <p className={styles.author}>{`- ${author}`}</p>
    </div>
  )
}

export default Recommendation
