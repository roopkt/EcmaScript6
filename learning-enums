enum AnimalFlags {
    None           = 0,
    HasClaws       = 1 << 0,
    CanFly = 1 << 1,
    CanSwim = 1<< 2
}
function printAnimalAbilities(animal) {
    var animalFlags = animal.flags;

    if (animalFlags & AnimalFlags.HasClaws) {
        console.log('animal has claws');
    }
    if (animalFlags & AnimalFlags.CanFly) {
        console.log('animal can fly');
    }
    if (animalFlags & AnimalFlags.CanSwim) {
      console.log('animal can sim');
    }
    if (animalFlags == AnimalFlags.None) {
        console.log('nothing');
    }
    
}

var animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // nothing
console.log(animal.flags);

animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // animal has claws
console.log(animal.flags);

animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // nothing
console.log(animal.flags);

animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal); // animal has claws, animal can fly
console.log(animal.flags);


animal.flags |= AnimalFlags.CanSwim
printAnimalAbilities(animal); // animal has claws, animal can fly, animal can swim
console.log(animal.flags);

animal.flags &= ~AnimalFlags.CanSwim
printAnimalAbilities(animal); // animal has claws, animal can fly
console.log(animal.flags);
