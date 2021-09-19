import React, { FunctionComponent } from 'react'
import GithubIcon from 'icons/github'
import LinkedInIcon from 'icons/linkedin'
import styles from './header.module.scss'

const Header: FunctionComponent = () => {
  console.log()
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
      {/* <Slides
        contents={Roles}
        className={styles.rolesContainer}
        widthFactor={100 / 3}
        slideProps={{ containerClassName: styles.slideContainer, contentClassName: styles.slideContents }}
      /> */}
    </div>
  )
}

export default Header
