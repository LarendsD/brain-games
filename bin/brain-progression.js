#!/usr/bin/env node
import { commonLogic } from '../src/index.js';
import findProgression from '../src/games/brain-progression-logic.js';

console.log(commonLogic('What number is missing in the progression?', findProgression));
