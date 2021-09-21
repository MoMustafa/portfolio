import { FunctionComponent } from 'react'

import styles from './footer.module.scss'

const Footer: FunctionComponent = () => {
  console.log()
  return (
    <div className={styles.container}>
      <div className={styles.contents} />
    </div>
  )
}

export default Footer
