/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment"); 
    const subject = document.getElementById("subject"); 
    //for email send
    const contactForm = document.getElementById("form");
    const contactMessage = document.getElementById('contact-message');

    function checkRequired(inputs) {
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                errorInput(input, `${getName(input)} is required`);
            } else {
                successInput(input);
            }
        }); 
    }

    function getName(input){


        return input.id;


    }

    function errorInput(input, message) {
        // Add your error handling code here
        const formGroup = input.parentElement;
        formGroup.className = "form-group error";
        const p = formGroup.querySelector("p");
        p.innerHTML = message;
    }

    function successInput(input) {
        const formGroup = input.parentElement;
        formGroup.className = "form-group success";
        const p = formGroup.querySelector("p");
        p.innerHTML = "";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        checkRequired([username, email,subject,comment]);
    });

    //email



    const sendEmail = (e)=>{
        e.preventDefault();
        

        //servise id, template id
        emailjs.sendForm('service_2y5m8uz','template_5q3ppra','#form','3OzHqDxiln03jvYmK')

        .then(() => {
            contactMessage.textContent = "Message sent successfully";

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent';
        });
    }

    // Make sure the DOM content is loaded before adding the event listener
    contactForm.addEventListener('submit', sendEmail);







    


});*/


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment"); 
    const subject = document.getElementById("subject"); 
    const contactForm = document.getElementById("form");
    const contactMessage = document.getElementById('contact-message');

    function checkRequired(inputs) {
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                errorInput(input, `${getName(input)} is required`);
            } else {
                successInput(input);
            }
        }); 
    }

    function getName(input){
        return input.id;
    }

    function errorInput(input, message) {
        const formGroup = input.parentElement;
        formGroup.className = "form-group error";
        const p = formGroup.querySelector("p");
        p.innerHTML = message;
    }

    function successInput(input) {
        const formGroup = input.parentElement;
        formGroup.className = "form-group success";
        const p = formGroup.querySelector("p");
        p.innerHTML = "";
    }

    function sendEmail(e) {
        e.preventDefault();
        
        //servise id, template id
        emailjs.sendForm('service_2y5m8uz','template_5q3ppra','#form','3OzHqDxiln03jvYmK')
        .then(() => {
            contactMessage.textContent = "Message sent successfully";

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        })
        .catch(() => {
            // Show error message
            contactMessage.textContent = 'Message not sent';
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        checkRequired([username, email, subject, comment]);

        // Only proceed with sending email if there are no errors
        if (!form.querySelector('.error')) {
            sendEmail(e);
        }
    });
});

