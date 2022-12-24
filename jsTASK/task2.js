/** Q2
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */
function HowManyPairs(shoes) {
    let pairs = 0;
  
    for (let i = 0; i < shoes.length; i++) {
      if (shoes[i] === "L" && shoes[i + 1] === "R") {
        pairs++;
        i++;
      } else if (shoes[i] === "R" && shoes[i + 1] === "L") {
        pairs++;
        i++;
      }
    }
  
    return pairs;
  }
  
  console.log(HowManyPairs("RLRLRRLLLLLLLL"));