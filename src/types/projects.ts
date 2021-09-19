export interface IProjectInfo {
  pictureSrc: StaticImageData
  pictureAlt: string
  description: string
  details: string
}

export interface IProjects {
  [project: string]: IProjectInfo
}
