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
import PythonIcon from 'icons/python'

const getIcon = (iconName: string, width: string, height: string, rest?: { [x: string]: unknown }): ReactElement => {
  const props = { width, height, ...rest }

  switch (iconName.toLowerCase()) {
    case 'csharp':
      return <CSharpIcon {...props} />
    case 'cypress':
      return <CypressIcon {...props} />
    case 'figma':
      return <FigmaIcon {...props} />
    case 'git':
      return <GitIcon {...props} />
    case 'html':
      return <Html5Icon {...props} />
    case 'javascript':
      return <JavascriptIcon {...props} />
    case 'jest':
      return <JestIcon {...props} />
    case 'next':
      return <NextIcon {...props} />
    case 'optimizely':
      return <OptimizelyIcon {...props} />
    case 'react':
      return <ReactIcon {...props} />
    case 'salesforce':
      return <SalesforceIcon {...props} />
    case 'sass':
      return <SassIcon {...props} />
    case 'sql':
      return <SQLIcon {...props} />
    case 'typescript':
      return <TypescriptIcon {...props} />
    case 'leaflet':
      return <LeafletIcon {...props} />
    case 'python':
      return <PythonIcon {...props} />

    default:
      return <></>
  }
}

export default getIcon
