import React, { FunctionComponent } from 'react'

import styles from '../recommendationsBanner.module.scss'

interface Props {
  author: string
  authorInfo: string
  authorLink: string
  blurb: string
}

const Blockquote: FunctionComponent<Props> = ({ author, authorInfo, authorLink, blurb }) => (
  <div className={styles.blockquoteWrapper}>
    <div className={styles.blockquoteBorder}>
      <h1 className={styles.blockquote}>{blurb}</h1>
      <a className={styles.author} href={authorLink} rel="noopener noreferrer" target="_blank">
        <h3>{`- ${author}`}</h3>
        <h6>{authorInfo}</h6>
      </a>
    </div>
  </div>
)

export default Blockquote
