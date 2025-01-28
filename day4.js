/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init){
    let val =init;      
function increment(){
return ++val;
}
function decrement(){
return --val;
}
function reset(){
return (val = init);
}
return {increment,decrement,reset};
};
