function requiredReading(numOfPagesCurrentBook, pagesPerHour, numOfDaysForWhichYouMustReadBook) {
    let totalTimeToReadBook = numOfPagesCurrentBook / pagesPerHour;
    let requiredHoursPerDay = totalTimeToReadBook / numOfDaysForWhichYouMustReadBook;
    console.log(requiredHoursPerDay);
}
requiredReading(212, 20, 2)
requiredReading(432, 15, 4)