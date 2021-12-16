#!/usr/bin/env node
import { commonLogic } from '../src/index.js';
import findExpression from '../src/games/brain-calc-logic.js';

console.log(commonLogic('What is the result of the expression?', findExpression));
