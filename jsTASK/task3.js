// Q3
// The Task is to Make Some modification on this file without deleting the setTimeout functions
// to make the execution of the file print three different defind results
// Note that you need to use callback functions to solve this task

// the current output of the execution of this file is:

/*
undefined
40
undefined
funcOne got excuted! 
*/

// we don't want this result, so try to solve this issue
// happy hacking !!



const CalculatePi = (callback) => {
    // this timeout is real delay
    setTimeout(() => {
      console.log("funcOne got excuted!");
      const pi = 22 / 7;
      callback(pi);
    }, 3000);
  };
  
  const SolarFunc = (pi, callback) => {
    let SolarResult = 1.989 * (10 ^ 30);
    callback(SolarResult.toFixed(0));
  };
  
  const SpeedOfSolar = (SolarResult, callback) => {
    // this timeout is real delay
    setTimeout(() => {
      callback(SolarResult * 2);
    }, 1000);
  };
  
  CalculatePi((ValueOfPi) => {
    console.log(ValueOfPi);
    SolarFunc(ValueOfPi, (SolarResult) => {
      console.log(SolarResult);
      SpeedOfSolar(SolarResult, (speed) => {
        console.log(speed);
      });
    });
  });
  