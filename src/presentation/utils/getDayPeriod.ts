function getDayPeriod() {
  const today = new Date();
  const currentHour = today.getHours();

  if (currentHour < 18) {
    return 'day';
  } else {
    return 'night';
  }
}

export {getDayPeriod};
