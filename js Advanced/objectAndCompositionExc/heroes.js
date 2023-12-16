function heroes() {
    const mageHero = {
        mageProto: {
            cast: function (spellName) {
                this.mana -= 1;
                console.log(`${this.name} cast ${spellName}`);
            },
        },

        mage: function (name) {
            const mageObj = {
                ...this.mageProto,
                name,
                mana: 100,
                health: 100
            };
            return mageObj;
        },
    };
    const fighterHero = {
        fightProto: {
            fight: function () {
                this.stamina -= 1;
                console.log(`${this.name} slashes at the foe!`);
            },
        },

        fighter: function (name) {
            const fighterObj = {
                ...this.fightProto,
                name,
                stamina: 100,
                health: 100,
            };
            return fighterObj;
        }
    };

    const allHeroes = {
        ...mageHero,
        ...fighterHero
    };
    return allHeroes;
}
let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);
