export default class Fighter
{
    constructor(name, power, health)
    {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage)
    {
        this.health -= damage;
        return this.health;
    }

    hit(enemy, point)
    {
        let damage = point * this.power;
        enemy.setDamage(damage);
        return damage;
    }

    knockout()
    {
        return new Promise((resolve) => 
        {
            console.log("time is over!");
            setTimeout(() =>
            {
                resolve(`${this.name} is died...`);
            }, 500);
        });
    }
}