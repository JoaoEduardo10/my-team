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

export type TPlayers = {
  response: [
    {
      player: {
        age: number
        id: number
        name: string
        nationality: string
      }
    }
  ]
}

export type TSubFixtures = {
  away: number
  home: number
  total: number
}

export type TSubGoals = {
  percentage: string
  total: number
}

export type TSubLineups = {
  formation: string
  played: number
}

export type TTeamStatistic = {
  response: {
      fixtures: {
        draws: TSubFixtures
        loses: TSubFixtures
        played: TSubFixtures
        wins: TSubFixtures
      },
      goals: {
        against: {
          minute: {
            '0-15': TSubGoals
            '16-30': TSubGoals
            '31-45': TSubGoals
            '46-60': TSubGoals
            '61-75': TSubGoals
            '76-90': TSubGoals
            '91-105': TSubGoals
            '106-120': TSubGoals
        }
        }
      },
      lineups: TSubLineups[],
      team: {
        id: number
        logo: string
        name: string
      }
    }

}
