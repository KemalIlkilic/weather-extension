const OPEN_WEATHER_API_KEY = '10f48255c4dfea5833413547c36c97cf'

export async function fetchOpenWeatherData(city: string): Promise<any> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`
  )

  if (!res.ok) throw new Error('City not found')

  const data = await res.json()
  return data
}
