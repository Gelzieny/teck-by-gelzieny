import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
  url: string
  iconSvg: string
}

export type Image = {
  url: string
}

export type KnownTech = {
  name: string
  startDate: string
  imageSvg: Image[]
}

export type Technology = {
  name: string
}

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: Technology[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
    text: string
  }
  liveProjectUrl?: string
  githubUrl?: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  sociais: Social[]
  knownTechs: KnownTech[]
  highlightProjects: Project[]
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type WorkExperiences = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: Technology[]
  description: {
    raw: RichTextContent
  }
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperiences[]
}
