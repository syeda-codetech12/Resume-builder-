// Get the education and experience fieldsets
const educationFieldset = document.getElementById('Education');
const experienceFieldset = document.getElementById('Experience');

// Get the add education and experience buttons
const addEducationButton = document.getElementById('add-education');
const addExperienceButton = document.getElementById('add-experience');

// Initialize arrays to store education and experience data
let educationData = [];
let experienceData = [];

// Function to validate if all education fields are filled
function validateEducationFields() {
    const schoolInput = educationFieldset.querySelector('input[name="School"]');
    const degreeInput = educationFieldset.querySelector('input[name="degree"]');
    const startYearInput = educationFieldset.querySelector('input[name="startyear"]');
    const endYearInput = educationFieldset.querySelector('input[name="endyear"]');

    return schoolInput.value && degreeInput.value && startYearInput.value && endYearInput.value;
}

// Function to validate if all experience fields are filled
function validateExperienceFields() {
    const positionInput = experienceFieldset.querySelector('input[name="Position"]');
    const companyInput = experienceFieldset.querySelector('input[name="Company"]');
    const durationInput = experienceFieldset.querySelector('input[name="Duration"]');

    return positionInput.value && companyInput.value && durationInput.value;
}

// Function to clear education fields
function clearEducationFields() {
    educationFieldset.querySelectorAll('input').forEach(input => input.value = '');
}

// Function to clear experience fields
function clearExperienceFields() {
    experienceFieldset.querySelectorAll('input').forEach(input => input.value = '');
}

// Function to add new education input fields
function addEducation() {
    if (!validateEducationFields()) {
        alert("Please fill out all education fields before adding a new entry.");
        return;
    }

    // Store current education data
    storeEducationData();


// Call to update the resume display
    updateEducationOnResume();  


    // Clear the current input fields for new entry
    clearEducationFields();
}

// Function to add new experience input fields
function addExperience() {
    if (!validateExperienceFields()) {
        alert("Please fill out all experience fields before adding a new entry.");
        return;
    }

    // Store current experience data
    storeExperienceData();


    // Call to update the resume display
    updateExperienceOnResume();


    // Clear the current input fields for new entry
    clearExperienceFields();
}

// Function to store education data
function storeEducationData() {
    const schoolInput = educationFieldset.querySelector('input[name="School"]');
    const degreeInput = educationFieldset.querySelector('input[name="degree"]');
    const gradeInput = educationFieldset.querySelector('input[name="grade"]');
    const startYearInput = educationFieldset.querySelector('input[name="startyear"]');
    const endYearInput = educationFieldset.querySelector('input[name="endyear"]');

    const educationObject = {
        school: schoolInput.value,
        degree: degreeInput.value,
        grade: gradeInput.value,
        startYear: startYearInput.value,
        endYear: endYearInput.value,
    };

    educationData.push(educationObject);
}

// Function to store experience data
function storeExperienceData() {
    const positionInput = experienceFieldset.querySelector('input[name="Position"]');
    const companyInput = experienceFieldset.querySelector('input[name="Company"]');
    const durationInput = experienceFieldset.querySelector('input[name="Duration"]');

    const experienceObject = {
        position: positionInput.value,
        company: companyInput.value,
        duration: durationInput.value,
    };

    experienceData.push(experienceObject);
}

// Add event listeners to the buttons
addEducationButton.addEventListener('click', addEducation);
addExperienceButton.addEventListener('click', addExperience);





























// Function to update the education section of the resume
function updateEducationOnResume() {
    const educationSection = document.getElementById('UserEducationEntries');
    educationSection.innerHTML = ''; // Clear previous entries

    





// Loop through all the education data and append each entry with the same structure and styling
educationData.forEach((edu) => {
    educationSection.innerHTML += `
        <div class="education-entry">
            <strong>${edu.startYear} - ${edu.endYear}</strong>
            <strong>School: </strong><p class="addelement"> ${edu.school}</p>
            <strong>Degree: </strong> <p class="addelement">${edu.degree}</p>
            <strong>Grade: </strong> <p class="addelement">${edu.grade}</p><br>
            <div class="stylingline"></div>

        </div>
    `;
});
}



// Function to update the experience section of the resume
function updateExperienceOnResume() {
    const experienceSection = document.getElementById('UserExperienceEntries');
    experienceSection.innerHTML = ''; // Clear previous entries




    // Loop through all the experience data and append each entry with the same structure and styling
    experienceData.forEach((exp) => {
        experienceSection.innerHTML += `
            <div class="experience-entry">
                <strong>Duration: </strong> <p class="addelement">${exp.duration}</p>
                <strong>Position: </strong> <p class="addelement">${exp.position}</p>
                <strong>Company: </strong> <p class="addelement">${exp.company}</p><br>
                <div class="stylingline"></div>
            </div>
        `;
    });
}












































