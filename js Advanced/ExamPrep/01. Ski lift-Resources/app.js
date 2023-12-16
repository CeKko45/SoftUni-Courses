function solve() {
    //    capture elements

    let firstNameElement = document.getElementById("first-name");
    let lastNameElement = document.getElementById("last-name");
    let numOfPeopleElement = document.getElementById("people-count");
    let fromDateElement = document.getElementById("from-date");
    let numOfDaysElement = document.getElementById("days-count");

    let infoListElement = document.querySelector(".ticket-info-list");

    let nextButton = document.getElementById("next-btn");

    nextButton.addEventListener("click", nextButtonFunc);

    // next button logic
    function nextButtonFunc(e) {
        e.preventDefault();
        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let numOfPeople = numOfPeopleElement.value;
        let fromDate = fromDateElement.value;
        let numOfDays = numOfDaysElement.value;

        if (firstName === "" || lastName === "" || numOfPeople === "" ||
            fromDate === "" || numOfDays === "") {
            return;
        }

        let ticketInfo = createTicketInfoFunc(firstName, lastName, numOfPeople, fromDate, numOfDays);
        infoListElement.appendChild(ticketInfo);

        firstNameElement.value = "";
        lastNameElement.value = "";
        numOfPeopleElement.value = "";
        fromDateElement.value = "";
        numOfDaysElement.value = "";
    }

    function createTicketInfoFunc(firstName, lastName, numOfPeople, fromDate, numOfDays) {
        let liElement = document.createElement("li");
        liElement.classList.add("ticket-content");

        let article = document.createElement("article");

        let fullNameParagraph = document.createElement("p");
        fullNameParagraph.textContent = `Name: ${firstName} ${lastName}`;

        let fromDateParagraph = document.createElement("p");
        fromDateParagraph.textContent = `From date: ${fromDate}`;

        let numOfDaysParagraph = document.createElement("p");
        numOfDaysParagraph.textContent = `For ${numOfDays} days`;

        let numOfPeopleParagraph = document.createElement("p");
        numOfPeopleParagraph.textContent = `For ${numOfPeople} people`;

        article.appendChild(fullNameParagraph);
        article.appendChild(fromDateParagraph);
        article.appendChild(numOfDaysParagraph);
        article.appendChild(numOfPeopleParagraph);

        nextButton.disabled = true;

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", editHandler);

        let continueBtn = document.createElement("button");
        continueBtn.textContent = "Continue";
        continueBtn.classList.add("continue-btn", "continue");
        continueBtn.addEventListener("click", continueHandler);

        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        return liElement;
    }

    //edit button logic
    function editHandler(e) {
        let liElement = e.target.parentElement;
        liElement.remove();

        let articleEdit = liElement.querySelectorAll("p");

        let fullNameValue = articleEdit[0].textContent;
        let fromDateValue = articleEdit[1].textContent;
        let numOfDaysValue = articleEdit[2].textContent;
        let numOfPeopleValue = articleEdit[3].textContent;

        fullNameValue = fullNameValue.substring(6).split(" ");
        firstNameValue = fullNameValue[0];
        lastNameValue = fullNameValue[1];
        fromDateValue = fromDateValue.substring(11);
        numOfDaysValue = numOfDaysValue.substring(4, 5);
        numOfPeopleValue = numOfPeopleValue.substring(4, 5);

        firstNameElement.value = firstNameValue;
        lastNameElement.value = lastNameValue;
        numOfPeopleElement.value = numOfPeopleValue;
        fromDateElement.value = fromDateValue;
        numOfDaysElement.value = numOfDaysValue;

        nextButton.disabled = false;
    }

    //continue button logic
    function continueHandler(e) {

        let liElement = e.target.parentElement;
        liElement.remove();

        let article = liElement.querySelector("article");

        let confirmBtn = document.createElement("button");
        confirmBtn.textContent = "Confirm";
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.addEventListener("click", confirmHandler);

        let cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.addEventListener("click", cancelHandler);

        article.appendChild(confirmBtn);
        article.appendChild(cancelBtn);

        let confirmListElement = document.querySelector(".confirm-ticket");
        confirmListElement.appendChild(article);
    }

    // cancel button logic
    function cancelHandler(e) {
        let liElement = e.target.parentElement;
        liElement.remove();

        nextButton.disabled = false;
    }

    // confirm button logic
    function confirmHandler(e) {
        let bodyElement = document.getElementById("body");
        let mainDivElement = document.getElementById("main");
        mainDivElement.remove();

        let thankYouElement = document.createElement("h1");
        thankYouElement.setAttribute("id", "thank-you");
        thankYouElement.textContent = "Thank you, have a nice day!";

        let backBtn = document.createElement("button");
        backBtn.setAttribute("id", "back-btn");
        backBtn.textContent = "Back";
        backBtn.addEventListener("click", backHandler);

        bodyElement.appendChild(thankYouElement);
        bodyElement.appendChild(backBtn);
    }

    // back button logic
    function backHandler(e) {
        location.reload();
    }
}