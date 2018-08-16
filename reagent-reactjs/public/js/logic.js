/*window.eval = global.eval = function () {
    throw new Error(`Sorry, this app does not support window.eval().`)
  } */

console.log("Logic.js file attached.");
  
window.eval = () => {
    throw new Error(`Sorry, this app does not support window.eval() for security purposes.`);
} 
