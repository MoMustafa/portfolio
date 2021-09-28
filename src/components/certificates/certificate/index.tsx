import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useInViewport } from 'react-in-viewport'
import getIcon from 'utils/getIcon'
import clsx from 'clsx'

import styles from '../certificates.module.scss'

interface Props {
  name: string
  organization: string
  date: string
  link: string
  logo: string
}

const Certificate: FunctionComponent<Props> = ({ name, organization, date, link, logo }) => {
  const certRef = useRef(null)
  const { inViewport } = useInViewport(certRef, {}, { disconnectOnLeave: false }, {})
  const [initialize, setInitialize] = useState(inViewport)

  useEffect(() => {
    setInitialize(inViewport)
  }, [inViewport])

  return (
    <a
      ref={certRef}
      className={clsx(styles.certificate, initialize && styles.show)}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={name}
    >
      <div className={styles.logo}>{getIcon(logo, '80', '80')}</div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.organization}>{organization}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </a>
  )
}

export default Certificate
