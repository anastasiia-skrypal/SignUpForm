const table = document.getElementById("table"),
	salaries = document.getElementsByClassName("salary_employee"),
	nameEmployee = document.getElementsByClassName("name_employee"),
	modal = document.getElementById("modal");
let average = 0;	

function changeBackground(color) {
   document.body.style.background = color;
}

for(let i=0; i < salaries.length; i++){
	average = average + parseInt(salaries[i].innerText);
}
average = average/salaries.length;

document.getElementById("average_salary").innerText = average;

window.onload = function() {
	changeBackground("#ccc");
}

table.addEventListener("click", () => {
	if(event.target.className == "name_employee"){
		modal.classList.toggle("hidden");
		modal.innerText = "Вы выбрали:";
		modal.innerText = modal.innerText + event.target.innerText;
	}
})