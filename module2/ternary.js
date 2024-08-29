/**
 * TERNARY ---> three parts
 * 
 * ? :
 * 
 * condition ?do something when true : do something when false
 */

// simple ternary 
const age = 30;


 age >=18 ? console.log('vote') : console.log('Ghumai thako')

let price = 500;
const isLeader = true;

price = isLeader === true ? 0 : price + 100;


// OPTIONAL:semi-advanced ternary

price = isLeader === true ? price > 1000 ? price/2 : 0 : price + 100;