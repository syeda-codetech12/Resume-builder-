
// Interface for Resmue Details
interface ResumeDetails{
    name: string,
    title: string,
    objective: string,
    phone: string,
    email: string,
    socialHandles: string,
    school: string,
    startyear: string,
    endyear: string,
    degree: string,
    grade: string,
    skills: string,
    position: string,
    company: string,
    duration: string,
}


// Function to read the uploaded image and display it.
function readURL (input: HTMLInputElement) : void {
    const img = document.getElementById("userpic") as HTMLImageElement;
    const file = input.files?.[0];

    if(file) {
        const reader = new FileReader();
        reader.onload = () => img.src = reader.result as string;
        reader.readAsDataURL(file);
    }
}

// Function to validate form inputs
function ValidateForm() {
    // Getting form elements
    const profilepic = (document.getElementById("profile-pic") as HTMLInputElement).files;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;


    // Education
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const grade = (document.getElementById("grade") as HTMLInputElement).value;

    // Experience
    const duration = (document.getElementById("duration") as HTMLInputElement).value;
    const position = (document.getElementById("position") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;

    // Skills
    const skills = (document.getElementById("skills") as HTMLInputElement).value;


    





    if(!profilepic || profilepic.length === 0 || !name || !title || !phone || !email || !school || !degree || !grade || !duration || !position || !company || !skills ) {
        alert("Please fill out mandatory fields!");
        return false;         //if validation fails
    }

    return true;       //if validation passes
}



  









//Function to generate the resume
function GenerateResume(): void {


    // Getting all form fields

    const ResumeOutput : ResumeDetails = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        title: (document.getElementById("title") as HTMLInputElement).value,
        objective: (document.getElementById("objective") as HTMLTextAreaElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        startyear: (document.getElementById("startyear") as HTMLInputElement).value,
        endyear: (document.getElementById("endyear") as HTMLInputElement).value,
        socialHandles: (document.getElementById("socialHandles") as HTMLInputElement).value,
        school: (document.getElementById("school") as HTMLInputElement).value,
        degree: (document.getElementById("degree") as HTMLInputElement).value,
        grade: (document.getElementById("grade") as HTMLInputElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
        position: (document.getElementById("position") as HTMLInputElement).value,
        company: (document.getElementById("company") as HTMLInputElement).value,
        duration: (document.getElementById("duration") as HTMLInputElement).value,
    };



// Upadating resume fields with the entered data.
(document.getElementById("username") as HTMLElement).innerText = ResumeOutput.name;
(document.getElementById("usertitle") as HTMLElement).innerText = ResumeOutput.title;
(document.getElementById("userobjective") as HTMLElement).innerText = ResumeOutput.objective;



// Contact Info Field of resume
(document.getElementById("userphoneNo") as HTMLElement).innerText = ResumeOutput.phone;
(document.getElementById("useremail") as HTMLElement).innerText = ResumeOutput.email;
(document.getElementById("usersocialhandles") as HTMLElement).innerText = ResumeOutput.socialHandles;

// Education Field
(document.getElementById("userschool") as HTMLElement).innerText = ResumeOutput.school;
(document.getElementById("userdegree") as HTMLElement).innerText = ResumeOutput.degree;
(document.getElementById("usergrade") as HTMLElement).innerText = ResumeOutput.grade;
(document.getElementById("display-startdate") as HTMLElement).innerText = ResumeOutput.startyear;
(document.getElementById("display-enddate") as HTMLElement).innerText = ResumeOutput.endyear;

// Skills field
(document.getElementById("userskills") as HTMLElement).innerText = ResumeOutput.skills;

// Experience Field
(document.getElementById("userposition") as HTMLElement).innerText = ResumeOutput.position;
(document.getElementById("usercompany") as HTMLElement).innerText = ResumeOutput.company;
(document.getElementById("userduration") as HTMLElement).innerText = ResumeOutput.duration;
    

};












document.addEventListener('DOMContentLoaded', function () {
    const objectiveTextarea = document.getElementById('objective') as HTMLTextAreaElement | null;
    const socialHandlesInput = document.getElementById('socialHandles') as HTMLInputElement | null;
    const objectiveSection = document.getElementById('objectiveSection') as HTMLElement | null;
    const userObjective = document.getElementById('userobjective') as HTMLElement | null;
    const socialHandlesSection = document.getElementById('socialhandlesSection') as HTMLElement | null;
    const userSocialHandles = document.getElementById('usersocialhandles') as HTMLElement | null;

    // Function to update sections based on input values
    function updateSections(): void {
        if (!objectiveTextarea || !socialHandlesInput || !objectiveSection || !userObjective || !socialHandlesSection || !userSocialHandles) {
            console.error('One or more elements are missing.');
            return;
        }

        const objectiveValue = objectiveTextarea.value.trim();
        const socialHandlesValue = socialHandlesInput.value.trim();

        // Update objective section visibility
        if (objectiveValue) {
            objectiveSection.style.display = 'block';
            userObjective.textContent = objectiveValue;
        } else {
            objectiveSection.style.display = 'none';
            userObjective.textContent = '';
        }

        // Update social handles section visibility
        if (socialHandlesValue) {
            socialHandlesSection.style.display = 'block';
            userSocialHandles.textContent = socialHandlesValue;
        } else {
            socialHandlesSection.style.display = 'none';
            userSocialHandles.textContent = '';
        }
    }

    // Initial call to set correct visibility on page load
    updateSections();

    // Listen for changes in the textarea and input fields
    if (objectiveTextarea) {
        objectiveTextarea.addEventListener('input', updateSections);
    }

    if (socialHandlesInput) {
        socialHandlesInput.addEventListener('input', updateSections);
    }
});





























// function to handle form submission and scroll to resume section
document.getElementById("ResumeForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
    
    
    // //prefill the form based on the username in the url
    // window.addEventListener("DOMContentLoaded", () => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const usernameinput = urlParams.get('usernameinput');

    //     if(usernameinput) {
    //         //autofill form if data is found in localstorage
    //         const savedResumeData = localStorage.getItem(usernameinput);

            // if(savedResumeData) {
                // const ResumeData = JSON.parse(savedResumeData);
        // (document.getElementById("name-forurl") as HTMLInputElement).value = usernameinput;
        // (document.getElementById("name") as HTMLInputElement).value = ResumeData.name;
        // (document.getElementById("title") as HTMLInputElement).value = ResumeData.title;
        // (document.getElementById("objective") as HTMLTextAreaElement).value = ResumeData.objective;
        // (document.getElementById("phone") as HTMLInputElement).value = ResumeData.phone;
        // (document.getElementById("email") as HTMLInputElement).value = ResumeData.email;
        // (document.getElementById("socialHandles") as HTMLInputElement).value = ResumeData.socialHandles;
        // (document.getElementById("school") as HTMLInputElement).value = ResumeData.school;
        // (document.getElementById("grade") as HTMLInputElement).value = ResumeData.grade;
        // (document.getElementById("degree") as HTMLInputElement).value = ResumeData.degree;
        // (document.getElementById("startyear") as HTMLInputElement).value = ResumeData.startyear;
        // (document.getElementById("endyear") as HTMLInputElement).value = ResumeData.endyear;
        // (document.getElementById("skills") as HTMLInputElement).value = ResumeData.skills;
        // (document.getElementById("position") as HTMLInputElement).value = ResumeData.position;
        // (document.getElementById("company") as HTMLInputElement).value = ResumeData.company;
        // (document.getElementById("duration") as HTMLInputElement).value = ResumeData.duration;


                
        //     }
        // }







    // If validation is successful, proceed with resume generation and scrolling
    if(ValidateForm()) {
    GenerateResume();

    // Scroll to the resume section
    const resumeHeading = document.getElementById("Resume-heading");
    if(resumeHeading) {
        resumeHeading.scrollIntoView({behavior: "smooth"});
       };
    };

});











document.addEventListener("DOMContentLoaded", function() {
    // function to enable editing on click and save changes
function makeeditable(elementid:any) {
    const element = document.getElementById(elementid);
    if (element) {
        element.addEventListener("click", function () {
            const isediting = element.isContentEditable;
            if (!isediting) {
                element.contentEditable = "true";
                element.focus();
            } else {
                element.contentEditable = "false";

                //Save the edited content

            const fieldid = elementid.replace("user", "").toLowerCase(); // extract field name.
            const targetelement = document.getElementById(fieldid);

            //check if the target element is an input or textarea
            if(targetelement && (targetelement instanceof HTMLInputElement || targetelement instanceof HTMLTextAreaElement)) {
                targetelement.value = element.textContent?.trim() || "";

            }
            }
        })
    }

// Make sections editable

makeeditable("userschool");
makeeditable("userdegree");
makeeditable("usergrade");
makeeditable("display-startdate");
makeeditable("display-enddate");
makeeditable("userskills");
makeeditable("userposition");
makeeditable("usercompany");
makeeditable("userduration");

//optionally, handle input fields to reflect changes
function updateResumeField(inputid: any, outputid: any) {
    const input = document.getElementById(inputid) as HTMLInputElement;
    const output = document.getElementById(outputid);

    if (input && output) {
        input.addEventListener("input", function () {
            output.textContent = input.value;
        });
        }
};

//Update fields
updateResumeField('school', 'userschool');
updateResumeField('degree', 'userdegree');
updateResumeField('grade', 'usergrade');
updateResumeField('startyear', 'display-startdate');
updateResumeField('endyear', 'display-enddate');
updateResumeField('skills', 'userskills');
updateResumeField('position', 'userposition');
updateResumeField('company', 'usercompany');
updateResumeField('duration', 'userduration');
}    
})











const downloadpdf = document.getElementById("download-pdf-btn") as HTMLButtonElement;
downloadpdf?.addEventListener('click', () => {
    window.print();
});

































const generateLinkBtn = (document.getElementById("generate-link-btn") as HTMLButtonElement);



//sharable link section
const shareablelinksec = document.getElementById("shareable-linksec") as HTMLDivElement;
const shareablelinkelement = document.getElementById("shareable-link") as HTMLAnchorElement;





//generating a shareable url
generateLinkBtn?.addEventListener('click', () => {
const UsernameInput = (document.getElementById("name-forURL") as HTMLInputElement).value;

if(UsernameInput) {
const generatedURL = `${window.location.origin}/resume?username=${encodeURIComponent(UsernameInput)}`;



        //displaying the generated link
        shareablelinksec.style.display = "block";
        shareablelinkelement.href  = generatedURL;
        shareablelinkelement.textContent  = generatedURL;

    };
});






const copyLinkbtn = document.getElementById("copy-link-btn") as HTMLButtonElement;
copyLinkbtn?.addEventListener('click', () => {
    const shareablelink = (document.getElementById("shareable-link") as HTMLAnchorElement).href;
    navigator.clipboard.writeText(shareablelink).then(() => {
        alert("Link copied to clipboard!")
    }).catch(err => {
        console.error("Failed to copy link: ", err)
    });
});
