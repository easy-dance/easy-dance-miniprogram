import Taro from '@tarojs/taro';
import { AtCalendar } from 'taro-ui';

// import '@/constants/tarouiCSS/calendar.scss';
import './index.scss';

const Calendar = () => {
  return (
    <AtCalendar isSwiper={false} />
  )
}

export default Calendar;