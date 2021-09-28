import { FunctionComponent, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import { useInViewport } from 'react-in-viewport'
import styles from '../recommendationsBanner.module.scss'

interface Props {
  author: string
  authorInfo: string
  authorLink: string
  blurb: string
}

const Blockquote: FunctionComponent<Props> = ({ author, authorInfo, authorLink, blurb }) => {
  const blockquoteRef = useRef(null)
  const { inViewport } = useInViewport(blockquoteRef, {}, { disconnectOnLeave: false }, {})
  const [initialize, setInitialize] = useState(inViewport)

  useEffect(() => {
    setInitialize(inViewport)
  }, [inViewport])

  return (
    <div ref={blockquoteRef} className={styles.blockquoteWrapper}>
      <div className={clsx(styles.blockquoteBorder, initialize && styles.show)}>
        <h1 className={styles.blockquote}>{blurb}</h1>
        <a
          className={styles.author}
          href={authorLink}
          aria-label={`${author}'s Linked In'`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.name}>{`- ${author}`}</div>
          <div className={styles.info}>{authorInfo}</div>
        </a>
      </div>
    </div>
  )
}

export default Blockquote
