import dayjs from 'dayjs'

export function formatMonthDay(date, format = "MM月DD日") {
  return dayjs(date).format(format)
}

// 换算出两个日期相差的天数
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}
