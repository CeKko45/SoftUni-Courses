window.addEventListener('load', solve);

function solve() {
        //capture elements
        let carModelElement = document.getElementById("car-model");
        let carYearElement = document.getElementById("car-year");
        let partNameElement = document.getElementById("part-name");
        let partNumberElement = document.getElementById("part-number");
        let conditionElement = document.getElementById("condition");

        let infoListElement = document.querySelector(".info-list")

        let completeImageElement = document.getElementById("complete-img");
        let completeTextElement = document.getElementById("complete-text");
        let nextButton = document.getElementById("next-btn");


        nextButton.addEventListener("click", nextButtonFunc);

        // next button logic
        function nextButtonFunc(e) {
                e.preventDefault();
                let carModel = carModelElement.value;
                let carYear = carYearElement.value;
                let partName = partNameElement.value;
                let partNumber = partNumberElement.value;
                let condition = conditionElement.value;
                carYear = Number(carYear);
                partNumber = Number(partNumber);

                if (carModel === "" || carYear === "" || partName === "" || partNumber === "" || condition === "") {
                        return;
                }

                if (carYear < 1980 || carYear > 2023) {
                        return;
                }

                let partInfo = createPartInfoFunc(carModel, carYear, partName, partNumber, condition);
                infoListElement.appendChild(partInfo);

                carModelElement.value = "";
                carYearElement.value = "";
                partNameElement.value = "";
                partNumberElement.value = "";
                conditionElement.value = "";
        }

        // createPartInfoFunc for creating structure

        function createPartInfoFunc(carModel, carYear, partName, partNumber, condition) {
                let liElement = document.createElement("li");
                liElement.classList.add("part-content");

                let article = document.createElement("article");

                let carModelParagraph = document.createElement("p");
                carModelParagraph.textContent = `Car Model: ${carModel}`;

                let carYearParagraph = document.createElement("p");
                carYearParagraph.textContent = `Car Year: ${carYear}`;

                let partNameParagraph = document.createElement("p");
                partNameParagraph.textContent = `Part Name: ${partName}`;

                let partNumberParagraph = document.createElement("p");
                partNumberParagraph.textContent = `Part Number: ${partNumber}`;

                let conditionParagraph = document.createElement("p");
                conditionParagraph.textContent = `Condition: ${condition}`;

                article.appendChild(carModelParagraph);
                article.appendChild(carYearParagraph);
                article.appendChild(partNameParagraph);
                article.appendChild(partNumberParagraph);
                article.appendChild(conditionParagraph);

                completeImageElement.style.visibility = "hidden";
                completeTextElement.textContent = "";
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

                let carModelValue = articleEdit[0].textContent;
                let carYearValue = articleEdit[1].textContent;
                let partNameValue = articleEdit[2].textContent;
                let partNumberValue = articleEdit[3].textContent;
                let conditionValue = articleEdit[4].textContent;

                carModelValue = carModelValue.substring(11);
                carYearValue = carYearValue.substring(10);
                partNameValue = partNameValue.substring(11);
                partNumberValue = partNumberValue.substring(13);
                conditionValue = conditionValue.substring(11);

                let carModelElement = document.getElementById("car-model");
                let carYearElement = document.getElementById("car-year");
                let partNameElement = document.getElementById("part-name");
                let partNumberElement = document.getElementById("part-number");
                let conditionElement = document.getElementById("condition");

                carModelElement.value = carModelValue;
                carYearElement.value = carYearValue;
                partNameElement.value = partNameValue;
                partNumberElement.value = partNumberValue;
                conditionElement.value = conditionValue;

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

                let confirmListElement = document.querySelector(".confirm-list");
                confirmListElement.appendChild(article);

        }

        //confirm button logic
        function confirmHandler(e) {
                let liElement = e.target.parentElement;
                liElement.remove();

                nextButton.disabled = false;

                completeImageElement.style.visibility = "visible";
                completeTextElement.textContent = "Part is Ordered!";
        }

        function cancelHandler(e) {
                let liElement = e.target.parentElement;
                liElement.remove();

                nextButton.disabled = false;
        }
}
