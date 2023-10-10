document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const popupResults = document.getElementById("popup-results");
    const closePopupButton = document.getElementById("close-popup");
    const resetButton = document.getElementById("reset-button");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        // Check if all fields are filled
        const inputs = form.querySelectorAll("input, select");
        let isValid = true;
        let selectedValues = {};

        inputs.forEach(function (input) {
            if(input.name != 'Gender'){
                if (!input.value) {
                    isValid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                    selectedValues[input.name] = input.value;
                }
                }
            });

            if(document.querySelector('input[name="Gender"]:checked')){
                selectedValues['Gender'] = document.querySelector('input[name="Gender"]:checked')?.value;
                document.querySelector('input[name="Gender"]').classList.remove("error");
            }
            else {
                isValid = false;
                document.querySelector('input[name="Gender"]').classList.add("error");
            }

        if (isValid) {
            // Display the selected values in the popup
            let popupHTML = "";
            popupHTML += "<ul>";
            for (const key in selectedValues) {
                if (selectedValues.hasOwnProperty(key)) {
                    popupHTML += `<li><strong>${key}:</strong> ${selectedValues[key]}</li>`;
                }
            }
            popupHTML += "</ul>";
            popupResults.innerHTML = popupHTML;

            // Show the popup
            popup.style.display = "block";
        } else {
            alert("All Fields are Required!!!!");
        }
    });

    resetButton.addEventListener("click", function () {
        // Reset the form and hide the popup
        form.reset();
        popup.style.display = "none";
    });

    closePopupButton.addEventListener("click", function () {
        // Close the popup
        popup.style.display = "none";
        form.reset();
    });
});