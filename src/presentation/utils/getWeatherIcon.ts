/* day images */
import sunCloudImage from '../assets/images/sun/cloud.png';
import sunStormImage from '../assets/images/sun/storm.png';
import sunImage from '../assets/images/sun/sun.png';
import sunRainImage from '../assets/images/sun/rain.png';

/* night images */
import moonCloudImage from '../assets/images/moon/cloud.png';
import moonStormImage from '../assets/images/moon/storm.png';
import moonImage from '../assets/images/moon/moon.png';
import moonRainImage from '../assets/images/moon/rain.png';

import snowImage from '../assets/images/others/snow.png';
import defaultImage from '../assets/images/others/default.png';

export const icons: {[id: string]: any} = {
  day: {
    clear: sunImage,
    clouds: sunCloudImage,
    rain: sunRainImage,
    snow: snowImage,
    thunderstorm: sunStormImage,
  },
  night: {
    clear: moonImage,
    clouds: moonCloudImage,
    rain: moonRainImage,
    thunderstorm: moonStormImage,
    snow: snowImage,
  },
};

function getWeatherIcon(period: 'day' | 'night', weather: string) {
  const periodIcons = icons[period];
  const lowerCaseWeather = weather?.toLowerCase();

  if (periodIcons) {
    return periodIcons[lowerCaseWeather] || defaultImage;
  }
}

export {getWeatherIcon};
