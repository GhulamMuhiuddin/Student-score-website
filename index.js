let addInfoBtn = document.getElementById('addInfoBtn');
addInfoBtn.addEventListener('click',studentScoreFunc);
let total = 0;  

function studentScoreFunc (){
    let studentNameInput = document.getElementById('studentNameInput').value;
    let FatherNameInput = document.getElementById('FatherNameInput').value;
    let studentScoreInput = document.getElementById('studentScoreInput').value;

    let tableForUser = document.getElementById('tableForUser');

studentScoreInput = +studentScoreInput
    total += studentScoreInput

let tr = document.createElement('tr')


    let totalTd = document.createElement('td')
    totalTd.className = 'textCenter'
    totalTd.innerText = total

    let stdntNameTd = document.createElement('td')
    stdntNameTd.innerText = studentNameInput

    let stdntFNameTd = document.createElement('td')
    stdntFNameTd.innerText = FatherNameInput

    let stdntScoreTd = document.createElement('td')
    stdntScoreTd.className = 'textCenter stuScor'
   stdntScoreTd.innerText = studentScoreInput

let deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete'
deleteBtn.className = 'delete-btn'

deleteBtn.addEventListener('click',function (){
    tr.remove()
    let numValue = tr.childNodes[2].innerText
    total = total - numValue
})

   tr.appendChild(stdntNameTd)
   tr.appendChild(stdntFNameTd)
   tr.appendChild(stdntScoreTd)
   tr.appendChild(totalTd)
   tr.appendChild(deleteBtn)

   tableForUser.appendChild(tr)
}