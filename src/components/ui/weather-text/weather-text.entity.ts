export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Currentunits;
  current: Current;
}
interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  is_day: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
}
interface Currentunits {
  time: string;
  interval: string;
  temperature_2m: string;
  is_day: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
}

export interface WeatherTextProps extends React.HTMLProps<HTMLParagraphElement> {
  showTemperature?: boolean;
}
