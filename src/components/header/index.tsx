import React, { FunctionComponent, KeyboardEvent, MouseEvent, useEffect, useState } from 'react'
import GithubIcon from 'icons/github'
import LinkedInIcon from 'icons/linkedin'
import Roles from 'configs/roles'

import clsx from 'clsx'
import styles from './header.module.scss'

const Header: FunctionComponent = () => {
  const [currentRole, setCurrentRole] = useState(Roles[0])
  const [hiddenRole, setHiddenRole] = useState(false)

  const handleClick = (e?: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
    if (e?.type === 'keydown' && (e as KeyboardEvent).code !== 'Enter') return
    setHiddenRole(true)
  }

  const getNewRole = () => {
    let newRole = currentRole

    while (newRole === currentRole) {
      const seed = Math.random()
      newRole = Roles[Math.floor(seed * Roles.length)]
    }

    setCurrentRole(newRole)
  }

  useEffect(() => {
    const timer = setInterval(handleClick, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (hiddenRole) {
      timer = setTimeout(() => {
        setHiddenRole(false)
        getNewRole()
      }, 1000)
    }

    return () => clearTimeout(timer)
  }, [hiddenRole])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>MO MUSTAFA</div>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/msmustafa" rel="noopener noreferrer" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/MoMustafa" rel="noopener noreferrer" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div
        className={clsx(styles.role, hiddenRole && styles.hidden)}
        role="button"
        tabIndex={0}
        onClick={(e) => handleClick(e)}
        onKeyDown={(e) => handleClick(e)}
      >
        {currentRole}
      </div>
    </div>
  )
}

export default Header
