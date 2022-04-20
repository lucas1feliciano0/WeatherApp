function getDayPeriod() {
  const today = new Date();
  const currentHour = today.getHours();

  if (currentHour < 18 && currentHour > 5) {
    return 'day';
  } else {
    return 'night';
  }
}

export {getDayPeriod};
