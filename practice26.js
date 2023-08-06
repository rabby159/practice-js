function paperRequirements(book1Quantity, book2Quantity, book3Quantity ){
    const perBook1Need = 100;
    const perBook2Need = 200;
    const perBook3Need = 300;

    const totalBook1Paper = perBook1Need * book1Quantity;
    console.log("For book-1 total paper need: ", totalBook1Paper);

    const totalBook2Paper = perBook2Need * book2Quantity;
    console.log("For book-2 total paper need: ", totalBook2Paper);

    const totalBook3Paper = perBook3Need * book3Quantity;
    console.log("For book-3 total paper need: ", totalBook3Paper);

    const totalPaperNeed = totalBook1Paper + totalBook2Paper + totalBook3Paper;
    console.log("Total paper need for both of 3 book: ",totalPaperNeed);
};

const paperQuantity = paperRequirements(5, 3, 4);