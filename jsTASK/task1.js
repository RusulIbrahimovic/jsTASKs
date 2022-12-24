/** Q1 About Javascript Dates
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
    let t1Start = new Date(t1Start);
    let t1End = new Date(t1End);
    let t2Start = new Date(t2Start);
    let t2End = new Date(t2End);
  
    return (t1Start < t1End  && t2Start < t2End);
  }
  
  console.log(CheckOverlap(
    "13/5/2021 13:00",
   "14/5/2021 13:00",
    "14/5/2021 13:00", 
    "16/5/2021 13:00"));  // Output: true