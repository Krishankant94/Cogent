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
  }
  return icon;
};

export {getIcons};
