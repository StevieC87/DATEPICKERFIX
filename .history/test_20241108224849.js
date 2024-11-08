function getdatesofFirstWeekISO(year) {
  let fourthjan = new Date(year, 0, 4);
  let fourthjanWEEKDAY = fourthjan.getDay();

  let week1datesarray = [];
  let firstMonday;
  let firstTuesday;
  let firstWednesday;
  let firstThursday;
  let firstFriday;
  let firstSaturday;
  let firstSunday;

  //let firstMonday = new Date(year -1 , 11, 29);

  if (fourthjanWEEKDAY == 0) {
    firstMonday = `${year - 1}-11-29`;
    firstTuesday = `${year - 1}-11-30`;
    firstWednesday = `${year - 1}-11-31`;
    firstThursday = `${year}-01-01`;
    firstFriday = `${year}-01-02`;
    firstSaturday = `${year}-01-03`;
    firstSunday = `${year}-01-04`;
  }
  if (fourthjanWEEKDAY == 1) {
    firstMonday = `${year}-01-04`;
    firstTuesday = `${year}-01-05`;
    firstWednesday = `${year}-01-06`;
    firstThursday = `${year}-01-07`;
    firstFriday = `${year}-01-08`;
    firstSaturday = `${year}-01-09`;
    firstSunday = `${year}-01-10`;
  }
  if (fourthjanWEEKDAY == 2) {
    firstMonday = `${year}-01-03`;
    firstTuesday = `${year}-01-04`;
    firstWednesday = `${year}-01-05`;
    firstThursday = `${year}-01-06`;
    firstFriday = `${year}-01-07`;
    firstSaturday = `${year}-01-08`;
    firstSunday = `${year}-01-09`;
  }
  if (fourthjanWEEKDAY == 3) {
    firstMonday = `${year}-01-02`;
    firstTuesday = `${year}-01-03`;
    firstWednesday = `${year}-01-04`;
    firstThursday = `${year}-01-05`;
    firstFriday = `${year}-01-06`;
    firstSaturday = `${year}-01-07`;
    firstSunday = `${year}-01-08`;
  }
  if (fourthjanWEEKDAY == 4) {
    firstMonday = `${year}-01-01`;
    firstTuesday = `${year}-01-02`;
    firstWednesday = `${year}-01-03`;
    firstThursday = `${year}-01-04`;
    firstFriday = `${year}-01-05`;
    firstSaturday = `${year}-01-06`;
    firstSunday = `${year}-01-07`;
  }
  if (fourthjanWEEKDAY == 5) {
    firstMonday = `${year - 1}-12-31`;
    firstTuesday = `${year}-01-01`;
    firstWednesday = `${year}-01-02`;
    firstThursday = `${year}-01-03`;
    firstFriday = `${year}-01-04`;
    firstSaturday = `${year}-01-05`;
    firstSunday = `${year}-01-06`;
  }
  if (fourthjanWEEKDAY == 6) {
    firstMonday = `${year - 1}-12-30`;
    firstTuesday = `${year - 1}-12-31`;
    firstWednesday = `${year}-01-01`;
    firstThursday = `${year}-01-02`;
    firstFriday = `${year}-01-03`;
    firstSaturday = `${year}-01-04`;
    firstSunday = `${year}-01-05`;


  }
  week1datesarray.push(firstMonday, firstTuesday, firstWednesday, firstThursday, firstFriday, firstSaturday, firstSunday);
  console.log(week1datesarray, 'week1datesarray in getdatesofFirstWeekISO')
}
console.log('2024');
getdatesofFirstWeekISO(2024);
console.log('2025');
getdatesofFirstWeekISO(2025);
console.log('2026');
getdatesofFirstWeekISO(2026);
getdatesofFirstWeekISO(2027);
getdatesofFirstWeekISO(2028);
getdatesofFirstWeekISO(2029);
getdatesofFirstWeekISO(2030);
getdatesofFirstWeekISO(2031);
getdatesofFirstWeekISO(2032);
