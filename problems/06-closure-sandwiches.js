/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/
const sandwichMaker = () => {
  let str1 = ['One sandwich with tomato'];
  let and = [];
  let search = []
  let commaWords = ''
  
  return func = (args) => {
      search.push(args)
      //console.log(search)
      //console.log(search)
      let index = 0;
      while (index < search.length - 1) {
          //console.log(search[index])
          if (!commaWords.includes(search[index])){
              commaWords += ', ' + search[index]    
          }
          
          index++

      }
      while (index < search.length) {
          //console.log(search[index])
          and = ' and ' + search[index];
          index++
      }
     
          
      
   
    console.log(str1 + commaWords + and)
  };
 
  
}

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread")
sandwich("ketchup")
sandwich("salt")
sandwich("pepper") // => "One sandwich with tomato and spinach and jelly and bread"
sandwich("garlic")


let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"
// Your code here 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
