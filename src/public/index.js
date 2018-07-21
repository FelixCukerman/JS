import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';
import fight from './fight';

let fighter = new Fighter("Lisa", 13, 666);
let improvedFighter = new ImprovedFighter("Brad", 14, 567);

fight(fighter, improvedFighter, 3, 2, 6, 7, 9, 12, 16, 100);