function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 7;
    const perTableWood = 15;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuantity;
    console.log("Total wood need for chair: ",chairWood);

    const tableWood = perTableWood * tableQuantity;
    console.log("Total wood need for table: ",tableWood);

    const bedWood = perBedWood * bedQuantity;
    console.log("Total wood need for bed: ",bedWood);

    const totalWoodNeed = chairWood + tableWood + bedWood;
    console.log("Total wood we need: ",totalWoodNeed)

}

const totalWood = woodCalculate(3, 2, 5);