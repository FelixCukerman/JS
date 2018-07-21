import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';

export default async function fight(fighter, improvedFighter, ...point)
{
    for(let i = 0; i < point.length; i++)
    {
        if(i % 2 == 0)
        {
            let damage = fighter.hit(improvedFighter, point);
            console.log(`fighter: -${damage}`);
            if(improvedFighter.health <= 0)
            {
                await improvedFighter.knockout();
                break;
            }
        }
        else
        {
            let damage = improvedFighter.hit(fighter, point);
            console.log(`improved fighter: -${damage}`);
            if(fighter.health <= 0)
            {
                await fighter.knockout();
                break;
            }
        }
    }
}