const findJobBtn = document.getElementById("findJobBtn");

if(findJobBtn){

    findJobBtn.addEventListener("click",function(){

        window.location.href="jobs.html";

    });

}

const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(function(button){

    button.addEventListener("click",function(){

        window.location.href="apply.html";

    });

});

/* Newsletter */

const newsletterForm = document.getElementById("newsletterForm");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("newsletterEmail").value.trim();

if(email===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing!");

newsletterForm.reset();

});

}

const search=document.getElementById("jobSearch");

if(search){

search.addEventListener("keyup",function(){

let filter=search.value.toLowerCase();

let cards=document.querySelectorAll(".job-card");

cards.forEach(function(card){

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}

const buttons=document.querySelectorAll(".apply-btn");

buttons.forEach(function(btn){

btn.onclick=function(){

window.location.href="apply.html";

};

});

/*=========================
      APPLY FORM
=========================*/

const applyForm = document.getElementById("applyForm");

if(applyForm){

applyForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const message=document.getElementById("message").value.trim();

if(name==="" || email==="" || phone==="" || message===""){

alert("Please fill all fields.");

return;

}

const application={

name,
email,
phone,
message,
date:new Date().toLocaleString()

};

let applications=JSON.parse(localStorage.getItem("applications")) || [];

applications.push(application);

localStorage.setItem("applications",JSON.stringify(applications));

alert("Application Submitted Successfully!");

applyForm.reset();

});

}

const appliedJobs = document.getElementById("appliedJobs");

const applications = JSON.parse(localStorage.getItem("applications")) || [];

if(applications.length===0){

appliedJobs.innerHTML="<p>No applications submitted yet.</p>";

}

else{

applications.forEach((job)=>{

appliedJobs.innerHTML += `

<div class="application">

<h3>${job.name}</h3>

<p>${job.email}</p>

<p>${job.phone}</p>

<p>${job.date}</p>

</div>

`;

});

}