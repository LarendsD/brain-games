#!/usr/bin/env node
import { commonLogic } from '../src/index.js';
import findEven from '../src/games/brain-even-logic.js';

console.log(commonLogic('Answer "yes" if the number is even, otherwise answer "no".', findEven));
