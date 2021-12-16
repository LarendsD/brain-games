#!/usr/bin/env node
import { commonLogic } from '../src/index.js';
import findPrime from '../src/games/brain-prime-logic.js';

console.log(commonLogic('Answer "yes" if given number is prime. Otherwise answer "no".', findPrime));
