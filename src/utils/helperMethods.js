import {icons} from './constants';
const getIcons = (iconType) => {
  let icon = {};
  switch (iconType) {
    case icons.CLEAR_DAY:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_light_color_96dp.png';
      break;
    case icons.CLEAR_NIGHT:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/clear_night_light_color_96dp.png';
      break;
    case icons.CLOUDY:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_light_color_96dp.png';
      break;
    case icons.FOG:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_light_color_96dp.png';
      break;
    case icons.PARTLY_CLOUDLY_DAY:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_light_color_96dp.png';
      break;
    case icons.PARTLY_CLOUDLY_NIGHT:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_night_light_color_96dp.png';
      break;
    case icons.RAIN:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_light_color_96dp.png';
      break;
    case icons.SLEET:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/wintry_mix_rain_snow_light_color_96dp.png';
      break;
    case icons.HAIL:
    case icons.SNOW:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_light_color_96dp.png';
      break;
    case icons.THUNDERSTORM:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_light_color_96dp.png';
      break;
    case icons.TORNADO:
      icon.uri =
        'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_light_color_96dp.png';
      break;
  }
  return icon;
};

export {getIcons};
