import { FunctionComponent } from 'react'
import GithubIcon from 'icons/github'
import LinkedInIcon from 'icons/linkedin'

import styles from './footer.module.scss'

const Footer: FunctionComponent = () => (
  <div className={styles.container}>
    <div className={styles.contents}>
      <a href="https://www.linkedin.com/in/msmustafa" aria-label="linked in" rel="noopener noreferrer" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/MoMustafa" aria-label="github" rel="noopener noreferrer" target="_blank">
        <GithubIcon />
      </a>
    </div>
  </div>
)

export default Footer
