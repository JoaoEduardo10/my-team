type TCountry = {
  code: string
  flag: string
  name: string
}

export type TSeason = {
  current: string
  end: string
  start: string
  year: number
}

export type TCountrys = {
  response: TCountry[]
}

export type TTeam = {
  response: [
    {
      team: {
        code: string
        country:string
        id: number
        name:string
        logo: string
      }
    }
  ]
}

export type TLeagues = {
  response: [
    {
      country: TCountry
      league: {
        id: number
        logo: string
        name: string
        type: string
      }
      seasons: TSeason[]
    }
  ]
}
