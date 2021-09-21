import { FunctionComponent, useEffect, useState } from 'react'
import { useWindowDimensions } from 'contexts/windowDimensionsCtx'
import Technologies from 'configs/techstack'
import getIcon from 'utils/getIcon'
import clsx from 'clsx'

import styles from './techStack.module.scss'

const TechStack: FunctionComponent = () => {
  const { isMobile } = useWindowDimensions()
  const [info1Hidden, setInfo1Hidden] = useState(true)
  const [info2Hidden, setInfo2Hidden] = useState(true)
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('')
  const [postiton1, setPosition1] = useState('')
  const [postiton2, setPosition2] = useState('')
  const [clickedTech, setClickedTech] = useState('')
  const techNames = Object.keys(Technologies)

  const getRandomPosition = (column: number) => {
    const Positions = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft']
    const oldPosition = column === 1 ? postiton1 : postiton2
    let newPosition = oldPosition

    while (newPosition === oldPosition) {
      const seed = Math.random()
      newPosition = Positions[Math.floor(seed * Positions.length)]
    }

    if (column === 1) setPosition1(newPosition)
    else setPosition2(newPosition)
  }

  const logoHover = (techname: string) => {
    if (clickedTech === techname) return
    setClickedTech(techname)

    if (info1Hidden) {
      setInfo1Hidden(false)
      setInfo2Hidden(true)
    } else {
      setInfo1Hidden(true)
      setInfo2Hidden(false)
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    const techDetails = Technologies[clickedTech]?.toLowerCase()

    if (!info1Hidden) {
      getRandomPosition(1)
      setInfo1(techDetails)
    } else {
      getRandomPosition(2)
      setInfo2(techDetails)
    }

    return () => clearTimeout(timer)
  }, [info1Hidden, info2Hidden])

  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.info}>
          <div
            className={clsx(
              styles.infoContent,
              styles.leftCol,
              info1Hidden && styles.hidden,
              postiton1 && styles[postiton1]
            )}
          >
            {info1}
          </div>
        </div>
      )}
      <div className={styles.logos}>
        {techNames.map((techname) =>
          getIcon(techname, isMobile ? '40' : '80', isMobile ? '40' : '80', {
            onMouseEnter: () => logoHover(techname)
          })
        )}
      </div>
      {!isMobile && (
        <div className={styles.info}>
          <div
            className={clsx(
              styles.infoContent,
              styles.RightCol,
              info2Hidden && styles.hidden,
              postiton2 && styles[postiton2]
            )}
          >
            {info2}
          </div>
        </div>
      )}
    </div>
  )
}

export default TechStack
