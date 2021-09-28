import mattressmatcher from 'public/images/mattressmatcher.png'
import deliverytracker from 'public/images/deliverytracker.png'
import componentLibrary from 'public/images/componentLibrary.png'
import { IProjects } from 'types/IProjects'

const Projects: IProjects = {
  mattressMatcher: {
    pictureSrc: mattressmatcher,
    pictureAlt: 'mattress matcher',
    description:
      'A quiz and recommendation app that takes the guesswork out of mattress shopping and matches the best products as recommended by an intelligent backend engine.',
    details: [
      'Developed using React & NextJS, leveraging the latest features to improve performance.',
      'Wrote Jest and Cypress tests to expedite development lifecycle',
      'Implemented Optimizely A/B tests to inform future UI/UX updates and features',
      'Integrated with Google Analytics via Tealium to track user experience statistics'
    ]
  },
  deliveryTracker: {
    pictureSrc: deliverytracker,
    pictureAlt: 'delivery tracker',
    description:
      'An app that provides real time shipment tracking for customers with an integrated Google Map. Private, secure and accessible with a variety of integrated features to manage deliveries.',
    details: [
      'Yet another React & NextJS application to deliver the fastest experience for customers',
      'Integrated with Google Maps and Shippo APIs to provide realtime tracking of shipments',
      'Created Jest unit tests to automate component testing and regression',
      'Optimized API calls to reduce network impact'
    ]
  },
  componentLibrary: {
    pictureSrc: componentLibrary,
    pictureAlt: 'component library',
    description:
      'A robust component library used for Mattress Firm’s React applications, and adhere to best practices, web accessibility, and performance',
    details: [
      'Created reusable and performant React functional components',
      'Improved accessibility to meet the latest ADA standards',
      'Updated Jest unit tests to maintain high test coverage',
      'Wrote documentation for component functionality and usage'
    ]
  }
}

export default Projects
