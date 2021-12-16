#!/usr/bin/env node
import { commonLogic } from '../src/index.js';
import findgcd from '../src/games/brain-gcd-logic.js';

console.log(commonLogic('Find the greatest common divisor of given numbers.', findgcd));
