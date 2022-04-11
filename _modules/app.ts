import RNGen, { pii as pi } from './math';

// or  

import * as RNGen2 from './math';

new RNGen2.default();


// importing type 

import { Cat, Dog, createCatName } from './math'

type Animal = Cat | Dog;

const name = createCatName() 