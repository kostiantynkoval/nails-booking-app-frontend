export const getDayOfWeek = (date: string) => {
  const newDay = new Date(date).getDay()
  switch (newDay) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      throw new Error('Invalid Date');
  }
}