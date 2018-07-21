import Fighter from './fighter';

export default class ImprovedFighter extends Fighter
{
    constructor(name, power, health)
    {
        super(name, power, health);
    }

    doubliHit(enemy, point)
    {
        super.hit(enemy, point*2);
    }
}