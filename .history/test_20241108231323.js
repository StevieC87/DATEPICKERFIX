
//first we GET THE DATES FOR THE 1ST WEEK OF THE YEAR -
function GetdatesofFirstWeekISO(year) {
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
  return week1datesarray;
}
//GET array of dates FOR WEEK X of YEAR x (except for week 1)
function GetArrayofDatesbyByWeekNumberNYear(weeknumber, year) {
  if (weeknumber === 1) {
    throw new Error("Week number 1 is not allowed.");
  }
  let newarrayWeekXDates = [];
  let firstweekdatesArray = GetdatesofFirstWeekISO(year);
  let firstMondayofFirstWeek = firstweekdatesArray[0];

  let calculated7daystoAdd = (weeknumber - 1) * 7; // - Week 2 becomes 1 (i.e., 1 week or 7 days to add for the second week).
  //get monday
  let firstMondayofFirstWeekTODate = new Date(firstMondayofFirstWeek);
  let firstMondayofXWeek = new Date(firstMondayofFirstWeekTODate);
  firstMondayofXWeek.setDate(firstMondayofFirstWeekTODate.getDate() + calculated7daystoAdd);
  console.log(firstMondayofXWeek, 'firstMondayofXWeek in GetMondayofWeekNumberByWeekNumber')
  let firstMondayofXWeekISO = firstMondayofXWeek.toISOString().slice(0, 10);

  //get tuesday
  let tuesdayWeekX = new Date(firstMondayofXWeek);
  tuesdayWeekX.setDate(firstMondayofXWeek.getDate() + 1);
  let tuesdayWeekXISO = tuesdayWeekX.toISOString().slice(0, 10);

  //get wednesday
  let wednesdayWeekX = new Date(firstMondayofXWeek);
  wednesdayWeekX.setDate(firstMondayofXWeek.getDate() + 2);
  let wednesdayWeekXISO = wednesdayWeekX.toISOString().slice(0, 10);

  //get thursday
  let thursdayWeekX = new Date(firstMondayofXWeek);
  thursdayWeekX.setDate(firstMondayofXWeek.getDate() + 3);
  let thursdayWeekXISO = thursdayWeekX.toISOString().slice(0, 10);

  //get friday
  let fridayWeekX = new Date(firstMondayofXWeek);
  fridayWeekX.setDate(firstMondayofXWeek.getDate() + 4);
  let fridayWeekXISO = fridayWeekX.toISOString().slice(0, 10);

  //get saturday
  let saturdayWeekX = new Date(firstMondayofXWeek);
  saturdayWeekX.setDate(firstMondayofXWeek.getDate() + 5);
  let saturdayWeekXISO = saturdayWeekX.toISOString().slice(0, 10);

  //get sunday
  let sundayWeekX = new Date(firstMondayofXWeek);
  sundayWeekX.setDate(firstMondayofXWeek.getDate() + 6);
  let sundayWeekXISO = sundayWeekX.toISOString().slice(0, 10);

  newarrayWeekXDates.push(firstMondayofXWeekISO, tuesdayWeekXISO, wednesdayWeekXISO, thursdayWeekXISO, fridayWeekXISO, saturdayWeekXISO, sundayWeekXISO);
  console.log(newarrayWeekXDates, 'newarrayWeekXDates in GetMondayofWeekNumberByWeekNumber')
  return newarrayWeekXDates;

}

//RETURN ARRAY OF DATES PER WEEK - FOR ANY WEEK AND YUEAR (ANY WEEK)
function getdatesofWeekbynumberAndYear(weeknumber: number, year: number) {
  let firstweekdatesArray = GetdatesofFirstWeekISO(year);
  let newMonday;
  let arrayofWeekdates = [];
  if (weeknumber === 1) {
    arrayofWeekdates = firstweekdatesArray;
  }
  else {
    try {
      let getarrayofWEEKxDates = GetArrayofDatesbyByWeekNumberNYear(weeknumber, year);
      arrayofWeekdates = getarrayofWEEKxDates;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  return arrayofWeekdates;
}

getdatesofWeekbynumberAndYear(1, 2024);