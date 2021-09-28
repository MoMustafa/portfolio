import { FunctionComponent } from 'react'
import Certifications from 'configs/certifications'
import uniqueId from 'uniqid'
import Certificate from './certificate'

import styles from './certificates.module.scss'

const Certificates: FunctionComponent = () => (
  <div className={styles.container}>
    {Certifications.map((certificate) => (
      <Certificate key={uniqueId()} {...certificate} />
    ))}
  </div>
)

export default Certificates
