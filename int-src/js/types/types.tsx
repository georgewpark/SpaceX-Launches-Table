export type Launch = {
  name: string,
  details: string,
  success: boolean | null,
  date_local: string,
  rocket: string,
  launchpad: string,
  links: {
    patch: {
      small: string
    }
  }
}

export type Rocket = {
  id: string,
  name: string
}

export type Site = {
  id: string,
  full_name: string
}