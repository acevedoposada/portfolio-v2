import { WeatherData } from "@/components/ui/weather-text/weather-text.entity";
import { weatherApiInstance } from "@/helpers/instances";

export async function getWeatherData(): Promise<WeatherData> {
  const endpoint =
    "/forecast?latitude=6.2518&longitude=-75.5636" +
    "&current=temperature_2m,is_day,precipitation,rain,showers,snowfall" +
    "&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1";

  try {
    const { status, data } = await weatherApiInstance.get<WeatherData>(endpoint);
    if (status !== 200) {
      throw new Error("Failed to fetch weather data");
    }
    return data;
  } catch {
    throw new Error("Failed to fetch weather data");
  }
}