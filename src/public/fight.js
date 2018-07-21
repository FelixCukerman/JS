import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';

export default async function fight(fighter, improvedFighter, ...point)
{
    for(let i = 0; i < point.length; i++)
    {
        if(i % 2 == 0)
        {
            let damage = fighter.hit(improvedFighter, point[i]);
            console.log(`${fighter.name}: -${damage}`);
            console.log(`${fighter.name} has ${fighter.health} health`);
            if(improvedFighter.health <= 0)
            {
                console.log(false);
                let result = await improvedFighter.knockout();
                console.log(result);
                break;
            }
        }
        else
        {
            let damage = improvedFighter.hit(fighter, point[i]);
            console.log(`${improvedFighter.name}: -${damage}`);
            console.log(`${improvedFighter.name} has ${improvedFighter.health} health`);
            if(fighter.health <= 0)
            {
                let result = await fighter.knockout();
                console.log(result);
                break;
            }
        }
    }
}