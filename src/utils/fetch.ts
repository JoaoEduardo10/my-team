/* eslint-disable @typescript-eslint/no-explicit-any */

import { TCountrys, TLeagues, TTeam } from '../types';

const url = import.meta.env.VITE_URL_API as string;

const authUser = async (key: string) => {
  const response = await fetch(`${url}/status`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': key,
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  });
  const data = await response.json();

  return data;

};

const getCountry = async (key: string) => {
  const response = await fetch(`${url}/countries`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': key,
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  });
  const data: TCountrys = await response.json();

  return data;
};

const getLeague= async (key: string, country: string, season: number) => {
  const response = await fetch(`${url}/leagues?country=${country}&season=${season}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': key,
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  });
  const data: TLeagues = await response.json();

  return data;
};

const getSeason = async (key: string) => {
  const response = await fetch(`${url}/leagues/seasons`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': key,
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  });
  const data: { response: number[] } = await response.json();

  return data;
};

const getTeam = async (key: string, season: number, league: number) => {
  const response = await fetch(`${url}/teams?league=${league}&season=${season}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': key,
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  });
  const data: TTeam = await response.json();

  return data;
};


export { authUser, getCountry, getLeague, getSeason, getTeam };
