"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { weatherApiInstance } from "@/helpers/instances";

import { WeatherData, WeatherTextProps } from "./weather-text.entity";

async function getData() {
  try {
    const response = await weatherApiInstance.get<WeatherData>(
      "/forecast?latitude=6.2518&longitude=-75.5636&current=temperature_2m,is_day,precipitation,rain,showers,snowfall&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1",
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default function WeatherText({
  showTemperature,
  ...props
}: WeatherTextProps) {
  const [weather, setWeather] = useState<WeatherData>();

  useEffect(() => {
    (async function () {
      setWeather(await getData());
    })();
  }, []);

  return (
    <p {...props}>
      Medellin, Col {dayjs(weather?.current.time).format("HH:MM A")}
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
