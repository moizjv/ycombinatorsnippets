// transpile:main

import { y, Y, fac } from './lib/index';

console.log(`Factorial without using Y :
fac(fac(fac(fac(fac(fac(fac))))))(5);: ${fac(fac(fac(fac(fac(fac(fac))))))(5)}`);

console.log(`Factorial using y (recursion):
y(fac)(5);: ${y(fac)(5)}`);

console.log(`Factorial using Y (without recursion):
Y(fac)(5);: ${Y(fac)(5)}`);


//export { Y, fac };
