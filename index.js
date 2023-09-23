// -------------------------------------HTML------------------------------------

let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
console.log(progressValue.innerHTML);
let progressStrat = 0;
let progressEnd = 90;
let speed = 100;
let timer = setInterval(()=>{
    progressStrat++;
    
    progressValue.textContent = `${progressStrat}%`;
    // console.log(circularProgress);
    circularProgress.style.background = `conic-gradient(#0A4D68 ${progressStrat * 3.6}deg, #e6f4f4 0deg)`;

    if(progressStrat == progressEnd)
    clearInterval(timer);
},speed);

// -------------------------------------CSS---------------------------------- 
let circularProgress1 = document.querySelectorAll(".circular-progress")[1];
let progressValue1 = document.querySelectorAll(".progress-value")[1];
console.log(progressValue1.innerHTML);
let progressStrat1 = 0;
let progressEnd1 = 80;
let speed1 = 100;
let timer1 = setInterval(()=>{
    progressStrat1++;
    
    progressValue1.textContent = `${progressStrat1}%`;
    // console.log(circularProgress);
    circularProgress1.style.background = `conic-gradient(#0A4D68 ${progressStrat1 * 3.6}deg, #e6f4f4 0deg)`;

    if(progressStrat1 == progressEnd1)
    clearInterval(timer1);
},speed1);

//  ----------------------------------JAVASCRIPT---------------------------------------
let circularProgress2 = document.querySelectorAll(".circular-progress")[2];
let progressValue2 = document.querySelectorAll(".progress-value")[2];
console.log(progressValue2.innerHTML);
let progressStrat2 = 0;
let progressEnd2 = 75;
let speed2 = 100;
let timer2 = setInterval(()=>{
    progressStrat2++;
    
    progressValue2.textContent = `${progressStrat2}%`;
    // console.log(circularProgress);
    circularProgress2.style.background = `conic-gradient(#0A4D68 ${progressStrat2 * 3.6}deg, #e6f4f4 0deg)`;

    if(progressStrat2 == progressEnd2)
    clearInterval(timer2);
},speed2);

//  ---------------------------------BOOTSTRAP-----------------------------------------
let circularProgress3 = document.querySelectorAll(".circular-progress")[3];
let progressValue3 = document.querySelectorAll(".progress-value")[3];
console.log(progressValue3.innerHTML);
let progressStrat3 = 0;
let progressEnd3 = 50;
let speed3 = 100;
let timer3 = setInterval(()=>{
    progressStrat3++;
    
    progressValue3.textContent = `${progressStrat3}%`;
    // console.log(circularProgress);
    circularProgress3.style.background = `conic-gradient(#0A4D68 ${progressStrat3 * 3.6}deg, #e6f4f4 0deg)`;

    if(progressStrat3 == progressEnd3)
    clearInterval(timer3);
},speed3);

// -----------------------------------MERNSTACK-----------------------------------------------
let circularProgress4 = document.querySelectorAll(".circular-progress")[4];
let progressValue4 = document.querySelectorAll(".progress-value")[4];
console.log(progressValue4.innerHTML);
let progressStrat4 = 0;
let progressEnd4 = 70;
let speed4 = 100;
let timer4 = setInterval(()=>{
    progressStrat4++;
    
    progressValue4.textContent = `${progressStrat4}%`;
    // console.log(circularProgress);
    circularProgress4.style.background = `conic-gradient(#0A4D68 ${progressStrat4 * 3.6}deg, #e6f4f4 0deg)`;

    if(progressStrat4 == progressEnd4)
    clearInterval(timer4);
},speed4);

//  ----------------------------------JAVA-------------------------------------------------
let circularProgress5 = document.querySelectorAll(".circular-progress")[5];
let progressValue5 = document.querySelectorAll(".progress-value")[5];
console.log(progressValue5.innerHTML);
let progressStrat5 = 0;
let progressEnd5 = 70;
let speed5 = 100;
let timer5 = setInterval(()=>{
    progressStrat5++;
    
    progressValue5.textContent = `${progressStrat5}%`;
    // console.log(circularProgress);
    circularProgress5.style.background = `conic-gradient(#0A5D68 ${progressStrat5 * 3.6}deg, #e6f4f4 0deg)`;

    if(progressStrat5 == progressEnd5)
    clearInterval(timer5);
},speed5);

// -----------------------------------Data Structure-----------------------------------------------
let circularProgress6 = document.querySelectorAll(".circular-progress")[6];
let progressValue6 = document.querySelectorAll(".progress-value")[6];
console.log(progressValue6.innerHTML);
let progressStrat6 = 0;
let progressEnd6 = 70;
let speed6 = 100;
let timer6 = setInterval(()=>{
    progressStrat6++;
    
    progressValue6.textContent = `${progressStrat6}%`;
    // console.log(circularProgress);
    circularProgress6.style.background = `conic-gradient(#0A4D68 ${progressStrat6 * 3.6}deg, #e6f4f4 0deg)`;

    if(progressStrat6 == progressEnd6)
    clearInterval(timer6);
},speed6);
// let circularProgress = document.querySelectorAll(".circular-progress");
// let progressValue = document.querySelectorAll(".progress-value");
// // console.log(progressValue.innerHTML);
// let progressStrat = 0, progressEnd;
// let speed = 100;
// [...circularProgress].forEach((value)=>{
//     if(value.classList.contains("circular-progress","progress-value"))
//     {
//         // console.log(value.classList.value)
//     }
//     progressEnd = parseInt(progressValue.innerHTML);
   
//     let timer = setInterval(()=>{
//         progressStrat++;
        
//         progressValue.textContent = `${progressStrat}%`;
//         console.log(circularProgress);
//         circularProgress.style.background = `conic-gradient(#0A4D68 ${progressStrat * 3.6}deg, #e6f4f4 0deg)`;

//         if(progressStrat == progressEnd)
//         clearInterval(timer);
//     },speed);
// });



// Email JS
// let contactForm = document.getElementById("contact-form");
// let contactMessage = document.getElementById("contact-message");

// const sendEmail = (e) =>{
//     e.preventDefault();
//     alert("form----------");
//     let user_name = document.getElementsByName("user_name").value;
//     let user_email = document.getElementsByName("user_email").value;
//     let user_message = document.getElementsByName("user_message").value;
//     if(user_name!="" && user_email!="" && user_message!="")
//     {
//         document.getElementsByTagName("button").disable = false;
//     }
//     // serviceId - templateId - #form - publicKey
//     emailjs.sendForm('service_tritisq','template_b4sqgfg','#contact-form','TgDWEBRv6YHbLUQia')
//     .then(()=>{
//         contactMessage.textContent = "Message send successfully ✅";
//         setTimeout(()=>{
//             contactMessage.textContent = "";
//         },5000);
//         contactForm.reset();
//     },()=>{
//         contactMessage.textContent = "Message not send (service error) ❌";
//     });
// }

// contactForm.addEventListener("submit",sendEmail);

// smtp 

document.getElementById("contact_button").addEventListener("click",()=>{
    let user_name = document.getElementById("name").value;
    let user_email = document.getElementById("email").value;
    let user_message = document.getElementById("message").value;
    let contact_message = document.getElementById("contact-message");
    let body = "Name: "+user_name + "<br/> Email: "+user_email+" <br/> Message:"+user_message;

    Email.send({
        SecureToken : "c6025b40-f532-47cf-bfae-3dbde76a6770",
        To : 'devipurnima26899@gmail.com',
        From : "devipurnima26899@gmail.com",
        Subject : "Message from Contact Form",
        Body : body
    }).then(
      (message) => {alert(message)
        window.location.reload();
    }
    ); 
});

// ----------------------------form Validation ----------------------------------

// const form = document.getElementById('contact-form');
// const username = document.getElementById('name');
// const email = document.getElementById('email');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return check.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } 
//     else if (!isValidEmail(emailValue)) 
//     {
//         setError(email, 'Provide a valid email address');
//     } 
//     else 
//     {
//         setSuccess(email);
//     }

// };