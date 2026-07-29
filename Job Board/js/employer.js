const jobForm = document.getElementById("jobForm");
const postedJobs = document.getElementById("postedJobs");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

displayJobs();

jobForm.addEventListener("submit", function(e){

e.preventDefault();

const job = {

title: document.getElementById("jobTitle").value,

company: document.getElementById("companyName").value,

location: document.getElementById("jobLocation").value,

salary: document.getElementById("salary").value

};

jobs.push(job);

localStorage.setItem("jobs", JSON.stringify(jobs));

jobForm.reset();

displayJobs();

});

function displayJobs(){

postedJobs.innerHTML="";

jobs.forEach((job,index)=>{

postedJobs.innerHTML += `

<div class="job-item">

<h3>${job.title}</h3>

<p>${job.company}</p>

<p>${job.location}</p>

<p>${job.salary}</p>

<button class="delete-btn" onclick="deleteJob(${index})">

Delete

</button>

</div>

`;

});

}

function deleteJob(index){

jobs.splice(index,1);

localStorage.setItem("jobs", JSON.stringify(jobs));

displayJobs();

}