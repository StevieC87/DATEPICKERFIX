
export function getmonthnumber(date: string): string {
  console.log(date, 'date in getmonthnumber')
  console.log(typeof date, 'typeof date in getmonthnumber')
  let month = date.slice(5, 7);
  return month;
}

export function getmonthname(month: number, year: number): string {
  //  console.log(date, 'date in getmonthname')
  //   let month = date.slice(5, 7);
  //  let year = date.slice(0, 4);
  console.log(month, 'month in getmonthname343434')
  console.log(typeof month, 'typeof month in getmonthname343434')
  if (month && year) {
    console.log(month, 'month in getmonthname111')
    console.log(typeof month, 'typeof month in getmonthname')
    let monthinno = parseInt(month);
    console.log(monthinno, 'monthinno in getmonthname')
    console.log(year, 'year in getmonthname')
    console.log(typeof year, 'typeof year in getmonthname')
    let yearinno = parseInt(year);

    console.log(yearinno, 'yearinno in getmonthname')
    let monthname = new Date(yearinno, monthinno - 1).toLocaleString('default', { month: 'long' });
    console.log(monthname, 'monthname in getmonthname3333')
    return monthname;
  } else {
    return;
  }
}
export function daysinmonth2(month: string, year: string): number {
  /*   console.log(date, 'date in daysinmonth1')
    console.log(typeof date, 'typeof date in daysinmonth1')
    let month = date.slice(5, 7); */
  let monthinno = parseInt(month);
  // let year = date.slice(0, 4);
  let yearinno = parseInt(year);

  let daysinmonth1 = new Date(yearinno, monthinno, 0).getDate();
  console.log(daysinmonth1, 'daysinmonth1 in daysinmonth1')
  console.log(typeof daysinmonth1, 'typeof daysinmonth1 in daysinmonth1')
  return daysinmonth1;
}
export function getdayofweek(date: string): number {
  //console.log(date, 'date in getdayofweek')
  let day = date.slice(8, 10);
  let month = date.slice(5, 7);
  let year = date.slice(0, 4);
  let dayinno = parseInt(day);
  let monthinno = parseInt(month);
  let yearinno = parseInt(year);
  let dayofweek = new Date(yearinno, monthinno - 1, dayinno).getDay();
  // console.log(dayofweek, 'dayofweek in getdayofweek')
  return dayofweek;
}

export function getdayname(dayofweek: number): string {
  console.log(dayofweek, 'dayofweek in getdayname')
  console.log(typeof dayofweek, 'typeof dayofweek in getdayname')
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayname = days[dayofweek];
  return dayname;
}

//CHECK IF THIS IS CORRECT
export function getWeeksInMonth(month: string, year: string): number[] {
  // Create a date object for the first and last day of the month
  console.log(month, 'month in getWeeksInMonth')
  console.log(typeof month, 'typeof month in getWeeksInMonth')
  console.log(year, 'year in getWeeksInMonth')
  let monthinno = parseInt(month);
  let yearinno = parseInt(year);
  let firstDay = new Date(yearinno, monthinno - 1, 1);
  console.log(firstDay, 'firstDay in getWeeksInMonth')
  let lastDay = new Date(yearinno, monthinno, 0);
  console.log(lastDay, 'lastDay in getWeeksInMonth')

  // Function to calculate the week number of a date
  function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

    //if less than 10 i want to add 0 before
    /*         if (weekNo < 10) {
                weekNo = '0' + weekNo;
            } */
    return weekNo;
  }

  // Get the week number for the first and last day of the month
  let firstWeek = getWeekNumber(firstDay);
  console.log(firstWeek, 'firstWeek in getWdeeksInMonth')
  let lastWeek = getWeekNumber(lastDay);
  console.log(lastWeek, 'lastWeek in getWeeksInMonth')

  // Return an array of the weeks
  let weeks = [];
  let weekobject = {
    weeknumber: 0,
    year: 0
  }
  let lastweektoloop;

  //WAIT I WAS THINKING ABOUT FOR GOING BACK, DUNNO FI TAHT WILL AFFECT GOING FORWARD LOGIC
  if (lastWeek < firstWeek) {
    let lastpossibleweek = 52;
    let difference = lastpossibleweek - firstWeek; //e.g. 4


    //push first week first
    let firstweekobject = {
      weeknumber: firstWeek,
      year: yearinno
    }
    weeks.push(firstweekobject);
    for (let i = 1; i <= difference; i++) {
      weekobject = {
        weeknumber: firstWeek + i,
        year: yearinno
      }
      weeks.push(weekobject);
    }
    //and for the weeks in the new year

    for (let i = 1; i <= lastWeek; i++) {
      weekobject = {
        weeknumber: i,
        year: yearinno + 1
      }
      weeks.push(weekobject);
    }



    //so if e.g. first week is 52, difference will be 0. 
    //if first week is 51, difference will be 1
    //last week could be e.g. week 5. 
    //first we add the last one or two weeks to the array  e.g. 51 and 52, 
    //then we add the ones from 1 to to the last week 

    //first loop through weeks, add them if below last possible week


    let beforelastweek = 52; //last week to loop - for the loop - last week of year
    lastweektoloop = beforelastweek;


    /*   weekobject = {
          weeknumber: lastWeek, //.toString()
          year: yearinno + 1
      }
      weeks.push(weekobject); */
    console.log(lastweektoloop, 'lastweektoloop in getWeeksInMonth')
  }
  else {
    lastweektoloop = lastWeek;

    if (lastWeek)
      for (let i = firstWeek; i <= lastweektoloop; i++) {
        let i2 = i; // / .toString()
        if (i < 10) {
          i2 = 0 + i;
        }
        weekobject = {
          weeknumber: i2,
          year: yearinno
        }
        //  weeks.push(i2);
        weeks.push(weekobject);
        if (lastWeek < firstWeek) {
          const indexOfWeek1 = weeks.findIndex(element => element.weeknumber === 1);

          // If found, move this element to the end of the array
          if (indexOfWeek1 !== -1) {
            const [week1] = weeks.splice(indexOfWeek1, 1);
            weeks.push(week1);
          }
        }

      }
    console.log(weeks, 'weeks in getWeeksInMonth')

  }
  return weeks;
}

//first we GET THE DATES FOR THE 1ST WEEK OF THE YEAR
function GetdatesofFirstWeekISO(year: number) {
  let fourthjan = new Date(year, 0, 4);
  let fourthjanWEEKDAY = fourthjan.getDay();

  let week1datesarray: string[] = [];
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
function GetMondayofWeekNumberByWeekNumber(weeknumber: , year) {

}
function getdatesofWeekbynumberAndYear(weeknumber: number, year: number) {
  let firstweekdatesArray = getdatesofFirstWeekISO(year);
  let newMonday;
  if(weeknumber === 1) {
    return firstweekdatesArray;
  }
  else {

  }

}

  function getFirstDateofWeek(weeknumber: number, year: number) {

    //first we need to get the DATES of THE FIRST WEEK OF THE YEAR
    let week1DATES = getdatesofFirstWeekISO(year);

    let fourthjan = new Date(year, 0, 4);


    console.log(fourthjanWEEKDAY, 'fourthjanWEEKDAY in getFirstDateofWeek')
  }

    export function makearrayofdatesfromWeek(weeknumber: number, year: number, monthnumber: number, monthname: string) {
      if (weeknumber && year && monthnumber && monthname) {

        getFirstDateofWeek(weeknumber, year);
        //suppose it's week one , we need to get all the dates
        //what's the first date of that week

        console.log(weeknumber, 'weeknumber333');
        // console.log(typeof weeknumber, 'typeof weeknumber333');
        // console.log(typeof year, 'typeof year333');
        //   console.log(typeof monthnumber, 'typeof monthnumber333');
        //  console.log(typeof monthname, 'typeof monthname333');
        //  console.log(year, 'year333');
        //  console.log(monthnumber, 'monthnumber333');
        //  console.log(monthname, 'monthname333');
        let weekdays = [];

        //

        // Calculate the Monday of the given week number
        const firstdayofweek = getDateFromWeekNumber(year, weeknumber);
        console.log(firstdayofweek, 'firstdayofweek3333');
        const dayOfWeek = firstdayofweek.getUTCDay();
        // Adjust to Monday if it’s not already Monday (UTCDay 1 = Monday)
        if (dayOfWeek !== 1) {
          firstdayofweek.setUTCDate(firstdayofweek.getUTCDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
        }
        firstdayofweek.setUTCHours(0, 0, 0, 0); // Set time to midnight UTC
        // Loop to get 7 days starting from Monday
        for (let i = 0; i < 7; i++) {
          let currentday = new Date(firstdayofweek);
          currentday.setUTCDate(firstdayofweek.getUTCDate() + i);

          let cleanyes = currentday.toISOString().slice(0, 10);
          let monthclean = cleanyes.slice(5, 7);
          let monthclean2no = parseInt(monthclean);
          let yearclean = cleanyes.slice(0, 4);
          let yearclean2no = parseInt(yearclean);

          console.log(cleanyes, monthclean, monthclean2no, yearclean, yearclean2no, 'cleanyes, monthclean, monthclean2no, yearclean, yearclean2no in makearrayofdatesfromWeek');
          let monthname = getmonthname(monthclean2no, yearclean2no);
          console.log(monthname, 'monthname in makearrayofdatesfromWeek');
          // Check if the current day is in the specified month
          if (parseInt(monthclean) === monthnumber) {
            let dateobj = {
              datetxt: cleanyes,
              dateobj: currentday,
              monthname: monthname,
              monthnumber: monthclean,
            };
            weekdays.push(dateobj);
          }
        }
        console.log(weekdays, 'weekdays7777');
        return weekdays;
      }
    }
    //HERE U GIVE YEAR, WEEK NUMBER AND RETURNS 'date object' - works'
    function getDateFromWeekNumber(year: number, weekNumber: number): Date {
      // Create a new date object representing January 1st of the given year in UTC
      const januaryFirst = new Date(Date.UTC(year, 0, 1));
      console.log(januaryFirst, 'januaryFirst in getDateFromWeekNumber')
      // Calculate the number of days to add to January 1st
      // Get the day of the week for January 1st (0-6, where 0 is Sunday and 6 is Saturday)
      let dayOfWeek = januaryFirst.getUTCDay();
      console.log(dayOfWeek, 'dayOfWeek in getDateFromWeekNumber')
      // Adjust to make Monday the first day of the week
      dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      // Calculate the offset to the first Monday of the year
      const firstMondayOfYear = dayOfWeek > 4 ? 8 - dayOfWeek : 1 - dayOfWeek;
      // Calculate the number of days from the first Monday to the specified week
      // Subtract 1 from weekNumber because we start counting weeks from 1
      const daysToAdd = (weekNumber - 1) * 7 + firstMondayOfYear;

      // Add the calculated number of days to January 1st
      januaryFirst.setUTCDate(januaryFirst.getUTCDate() + daysToAdd);

      return januaryFirst;
    }

    export function convertYMD2DMY(date: string): string {
      if (date) {
        let datearray = date.split('-');
        let year = datearray[0];
        let month = datearray[1];
        let day = datearray[2];
        let newdate = `${day}-${month}-${year}`;
        return newdate;
      }
      else {
        return '';
      }
    }
    export function convertDMY2YMD(date: string): string {
      if (date) {
        let datearray = date.split('-');
        let day = datearray[0];
        let month = datearray[1];
        let year = datearray[2];
        let newdate = `${year}-${month}-${day}`;
        return newdate;
      }
      else {
        return '';
      }
    }
    export function convertMDY2YMD(date: string): string {
      if (date) {
        let datearray = date.split('-');
        let month = datearray[0];
        let day = datearray[1];
        let year = datearray[2];
        let newdate = `${year}-${month}-${day}`;
        return newdate;
      }
      else {
        return '';
      }
    }

    export function convertDMY2YMDarray(datearray: string[]): string[] {
      if (
        datearray.length > 0
      ) {
        let count = datearray.length;
        let newdatearray: string[] = [];

        for (let i = 0; i < count; i++) {
          let date = datearray[i];
          let converted = convertDMY2YMD(date);
          newdatearray.push(converted);
        }
        return newdatearray;
      }
      else {
        return '';
      }
    }

    export function convertMDY2YMDarray(datearray: string[]): string[] {
      if (
        datearray.length > 0
      ) {
        let count = datearray.length;
        let newdatearray = [];

        for (let i = 0; i < count; i++) {
          let date = datearray[i];
          let converted = convertMDY2YMD(date);
          newdatearray.push(converted);
        }
        return newdatearray;
      }
      else {
        return '';
      }
    }

    export function convertFormat(format: string, date: string): string {
      if (date) {
        if (format === 'DDMMYYYY') {
          return convertDMY2YMD(date)
        }
        else if (format === 'YYYYMMDD') {
          return (date)

        }
        else if (format === 'MMDDYYYY') {
          return convertMDY2YMD(date)
        }
      }
    }







//OLD STUFF CRAP
/* export function convertFormatArray(format:string, datearray: string[], format: string): string[] {
    
    if(format === 'DDMMYYYY') {
      return convertDMY2YMDarray(datearray)
    }
    else if(format === 'YYYYMMDD') {
      return(datearray)

    }
    else if (format === 'MMDDYYYY') {
      return convertMDY2YMDarray(datearray)
    }
} */

/* export function loopmonthdays(daysinmonth2: number, date2) {
    console.log(date2, 'date2 in loopmonthdays')
    console.log(typeof date2, 'typeof date2 in loopmonthdays')
    //CREATE OBJECT FOR EACH DATE OF MONTH
    let array = [];
    for (let i = 1; i <= daysinmonth2; i++) {
        let monthfromdate2 = date2.slice(5, 7);
        let year = date2.slice(0, 4);
        let daynumber = i;
        let datefull = `${year}-${monthfromdate2}-${daynumber}`;

        let dayofweek = getdayofweek(datefull);
      //  console.log(dayofweek, 'dayofweek in loopmonthdays2')
      //  console.log(datefull, 'datefull in loopmonthdays2')
        let dayofweektxt = getdayname(dayofweek);
        let month2 = getmonthnumber(datefull);
        
        let dateobject = {
            daynumber: daynumber,
            dayofweek: dayofweek,
            dayofweektxt: dayofweektxt,
            month2: month2,
            datefull: datefull,
        }
        array.push(dateobject);
    }
    return array;

} */


/* UNUSED


const convertYMD2DMYarray = (datearray) => {  //date is string,  return string
          //convert to dd-mm-yyyy
          if(
            datearray.length > 0
          ) {
            let count = datearray.length;
            let newdatearray = [];

            for(let i = 0; i < count; i++) {
              let date = datearray[i];
              let converted = convertYMD2DMY(date);
              newdatearray.push(converted);
            }
            return newdatearray;
          }
          else {
            return '';
          }
        }*/

/* const validatedate = (date) => {
    let validORnot;
  //  let datePattern = /^(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])(-)\d{4}$/;
    let datePattern =  /^\d{4}-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/;
    validORnot = datePattern.test(date);
    return validORnot;
  } */