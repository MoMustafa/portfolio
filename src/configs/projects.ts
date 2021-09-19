import mattressmatcher from 'public/images/mattressmatcher.png'
import deliverytracker from 'public/images/deliverytracker.png'
import componentLibrary from 'public/images/componentLibrary.png'
import { IProjects } from 'types/projects'

const Projects: IProjects = {
  mattressMatcher: {
    pictureSrc: mattressmatcher,
    pictureAlt: 'mattress matcher',
    description:
      'A quiz and recommendation app that takes the guesswork out of mattress shopping and matches the best products as recommended by Sleep Experts.',
    details: 'Details'
  },
  deliveryTracker: {
    pictureSrc: deliverytracker,
    pictureAlt: 'delivery tracker',
    description:
      'An app that provides real time shipment tracking for customers with an integrated Google Map. Private, secure and accessible with a variety of integrated features to manage deliveries.',
    details: 'Details'
  },
  componentLibrary: {
    pictureSrc: componentLibrary,
    pictureAlt: 'component library',
    description:
      'A robust component library used for Mattress Firm’s React applications, and adhere to best practices, web accessibility, and performance',
    details: 'Details'
  }
}

export default Projects
