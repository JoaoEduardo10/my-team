/* eslint-disable @typescript-eslint/no-explicit-any */
const authUser = async (key: string) => {
  try {
    const response = await fetch('https://v3.football.api-sports.io/status', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': key,
        'X-RapidAPI-Host': 'v3.football.api-sports.io'
      },
      redirect: 'follow'
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.log('error', error);
  }
};

export { authUser };
