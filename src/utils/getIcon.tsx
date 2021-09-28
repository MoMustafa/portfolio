import { ReactElement } from 'react'
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
import AwsIcon from 'icons/aws'
import IbmIcon from 'icons/ibm'
import AgileIcon from 'icons/agile'
import PythonIcon from 'icons/python'
import uniqueId from 'uniqid'

const getIcon = (iconName: string, width: string, height: string, rest?: { [x: string]: unknown }): ReactElement => {
  const props = { width, height, ...rest }

  switch (iconName.toLowerCase()) {
    case 'csharp':
      return <CSharpIcon key={uniqueId()} {...props} />
    case 'cypress':
      return <CypressIcon key={uniqueId()} {...props} />
    case 'figma':
      return <FigmaIcon key={uniqueId()} {...props} />
    case 'git':
      return <GitIcon key={uniqueId()} {...props} />
    case 'html':
      return <Html5Icon key={uniqueId()} {...props} />
    case 'javascript':
      return <JavascriptIcon key={uniqueId()} {...props} />
    case 'jest':
      return <JestIcon key={uniqueId()} {...props} />
    case 'next':
      return <NextIcon key={uniqueId()} {...props} />
    case 'optimizely':
      return <OptimizelyIcon key={uniqueId()} {...props} />
    case 'react':
      return <ReactIcon key={uniqueId()} {...props} />
    case 'salesforce':
      return <SalesforceIcon key={uniqueId()} {...props} />
    case 'sass':
      return <SassIcon key={uniqueId()} {...props} />
    case 'sql':
      return <SQLIcon key={uniqueId()} {...props} />
    case 'typescript':
      return <TypescriptIcon key={uniqueId()} {...props} />
    case 'leaflet':
      return <LeafletIcon key={uniqueId()} {...props} />
    case 'python':
      return <PythonIcon key={uniqueId()} {...props} />
    case 'aws':
      return <AwsIcon key={uniqueId()} {...props} />
    case 'ibm':
      return <IbmIcon key={uniqueId()} {...props} />
    case 'agile':
      return <AgileIcon key={uniqueId()} {...props} />
    default:
      return <></>
  }
}

export default getIcon
