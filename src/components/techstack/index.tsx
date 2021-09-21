import { FunctionComponent, useEffect, useState } from 'react'
import CSharpIcon from 'icons/cSharp'
import CypressIcon from 'icons/cypress'
import FigmaIcon from 'icons/figma'
import GitIcon from 'icons/git'
import Html5Icon from 'icons/htmlFive'
import JavascriptIcon from 'icons/javascript'
import JestIcon from 'icons/jest'
import NextIcon from 'icons/next'
import OptimizelyIcon from 'icons/optimizely'
import ReactIcon from 'icons/react'

import SalesforceIcon from 'icons/salesforce'
import SassIcon from 'icons/sass'
import SQLIcon from 'icons/sql'
import TypescriptIcon from 'icons/typescript'
import LeafletIcon from 'icons/leaflet'
import PythonIcon from 'icons/python'
import clsx from 'clsx'
import styles from './techStack.module.scss'

const TechStack: FunctionComponent = () => {
  const [info1Hidden, setInfo1Hidden] = useState(true)
  const [info2Hidden, setInfo2Hidden] = useState(true)
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('')
  const [postiton1, setPosition1] = useState('')
  const [postiton2, setPosition2] = useState('')
  const [clickedTech, setClickedTech] = useState('')

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

  const logoClick = (techname: string) => {
    if (clickedTech === techname) {
      setInfo1Hidden(true)
      setInfo2Hidden(true)
      setClickedTech('')
      return
    }

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

    if (!info1Hidden) {
      getRandomPosition(1)
      setInfo1(clickedTech)
    } else {
      getRandomPosition(2)
      setInfo2(clickedTech)
    }

    return () => clearTimeout(timer)
  }, [info1Hidden, info2Hidden])

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={clsx(styles.infoContent, info1Hidden && styles.hidden, postiton1 && styles[postiton1])}>
          {info1}
        </div>
      </div>
      <div className={styles.logos}>
        <TypescriptIcon onClick={() => logoClick('typescript')} />
        <CSharpIcon onClick={() => logoClick('csharp')} />
        <CypressIcon onClick={() => logoClick('cypress')} />
        <ReactIcon onClick={() => logoClick('react')} />
        <LeafletIcon onClick={() => logoClick('leaflet')} />
        <FigmaIcon onClick={() => logoClick('figma')} />
        <GitIcon onClick={() => logoClick('git')} />
        <SQLIcon onClick={() => logoClick('sql')} />
        <Html5Icon onClick={() => logoClick('html')} />
        <JavascriptIcon onClick={() => logoClick('javascript')} />
        <JestIcon onClick={() => logoClick('jest')} />
        <NextIcon onClick={() => logoClick('next')} />
        <OptimizelyIcon onClick={() => logoClick('optimizely')} />
        <SalesforceIcon onClick={() => logoClick('salesforce')} />
        <SassIcon onClick={() => logoClick('sass')} />
        <PythonIcon onClick={() => logoClick('python')} />
      </div>
      <div className={styles.info}>
        <div className={clsx(styles.infoContent, info2Hidden && styles.hidden, postiton2 && styles[postiton2])}>
          {info2}
        </div>
      </div>
    </div>
  )
}

export default TechStack
