import { useQuery } from "@tanstack/react-query";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjs from "dayjs";
dayjs.extend(timezone);
dayjs.extend(utc);

import { getWeatherData } from "@/services/weather/get";

import { WeatherTextProps } from "./weather-text.entity";

export default function WeatherText({
  showTemperature,
  ...props
}: WeatherTextProps) {
  const { data: weather, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeatherData,
    refetchOnMount: false
  })

  if (isLoading) {
    return (
      <p>
        Loading time...
      </p>
    )
  }

  return (
    <p {...props}>
      Medellin, Col {dayjs(weather?.current.time).tz(weather?.timezone).format("HH:mm A")}
      {showTemperature && (
        <>
          {" "}
          <span>•</span> {weather?.current.temperature_2m}
          {weather?.current_units.temperature_2m}
        </>
      )}
    </p>
  );
}
