export function print(props) {
    console.log("- Character: " + this.getName())

    if (props.health) {
      console.log("- HEALTH: " + this.getHp() + "/" + this.getHpMax())
    }

    if(props.special) {
      console.log("- SPECIAL:")
      console.log("-- S: " +    this.getSpecial({attribute: "S"}))
      console.log("-- P: " +    this.getSpecial({attribute: "P"}))
      console.log("-- E: " +    this.getSpecial({attribute: "E"}))
      console.log("-- C: " +    this.getSpecial({attribute: "C"}))
      console.log("-- I: " +    this.getSpecial({attribute: "I"}))
      console.log("-- A: " +    this.getSpecial({attribute: "A"}))
      console.log("-- L: " +    this.getSpecial({attribute: "L"}))
    }

    if (props.attack) {
      console.log("- ATTACK: ");
      // console.log("-- Base Damage: " +  this.combatAbility.getDamageRange().min + "-" + this.combatAbility.getDamageRange().max);
      // console.log("-- Crit Chance: " +  this.combatAbility.getCritChance() + "%");
      // console.log("-- Crit Damage: x" + this.combatAbility.getCritMultipier());
    }

    if (props.xp) {
      console.log("- EXPERIENCE: ");
      // console.log("-- XP:  " + this.exp.getXP());
      // console.log("-- LVL: " + this.exp.getLevel());
      // console.log("-- SkP: " + this.exp.getSkillPoints());
    }

    console.log("")

  }