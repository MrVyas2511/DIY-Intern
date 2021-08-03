
function add(a,b,c) {

    if (document.querySelector(a).value.length == 0) {
        alert("Please Enter a Task");
    }
    else {
        if (document.querySelector(b).innerText == "No Skills are added !!") {
            document.querySelector(c).innerHTML =
                `<li class="listitem list-group-item  rounded-pill m-2">
            ${document.querySelector(a).value}
            <button id="cancleSkill" ><i class="fa fa-trash"></i></button>
                     </li>`;
        }
        else {
            document.querySelector(c).innerHTML +=
                `<li class="listitem list-group-item  rounded-pill m-2">
            ${document.querySelector(a).value}
            <button id="cancleSkill" ><i class="fa fa-trash"></i></button> 
                    </li>`;
        }
        document.querySelector(a).value = "";
    }
    
    removeNode();

function removeNode()
{
    let task = document.querySelectorAll("#cancleSkill");
    for (let i = 0; i < task.length; i++) {

        task[i].onclick = function () {

            this.parentNode.remove();
            if (document.querySelector(c).innerHTML == "") {
                document.querySelector(c).innerHTML =
                    `<li class="listitem list-group-item  rounded-pill m-2">
                No Skills are added !!
                </li>`;
            }
        }

    }
}
}

function addExp(){

    let cName = document.getElementById("companyName").value;
    let role = document.getElementById("roleName").value;
    let sDate = document.getElementById("startDate").value;
    let eDate = document.getElementById("endDate").value;

    if(cName=="" || role=="" || sDate == "" || eDate == "")
    {
        alert("Fill all the field!!");
    }
    else{
        document.querySelector('.exp').innerHTML+=`
        <div class = " expCard my-2 row">
        <div class="col-md-11">
          <h6>${cName} - ${role}</h6>
          From : <span>${sDate}</span>
          To : <span>${eDate}</span>
        </div>
        <button id="removeExp" class="col-md-1 btn "><i class="fa fa-trash"></i></button>
        </div>
       
    `;

    document.getElementById("companyName").value ="";
    document.getElementById("roleName").value="";
    document.getElementById("startDate").value="";
    document.getElementById("endDate").value="";
        
    }
    removeExp();
    function removeExp()
    {
   
        let task = document.querySelectorAll("#removeExp");
        for(let i of task) {
            task[i].onclick = function () {
                this.parentNode.remove();
               
            }
    
        }
   
    }    
}

let count = 0;
function addLicences(){
    let title = document.getElementById("LicenseTitle").value;
    let oName = document.getElementById("orgName").value;
    let iDate = document.getElementById("issueDate").value;
    let about = document.getElementById("aboutcirtification").value;

    if(title==""||oName==""||iDate==""||about=="")
    {
        alert("Fill all the field!!");
    }
    else{
        count++;
        document.querySelector("#noofCirti").innerHTML=`
         ${count} Cirtificate Added
        `;
        document.querySelector(".cirtificateList").innerHTML+=`
        <div class="cirtiDetail p-2 my-2 row">
            <div class="col-md-11">
              <h6>${title} - ${oName}</h6>
              <p>${about}L</p>
              <hr>
              Issue Date : <span>${iDate}</span>
            </div>
            <button id="removeCirtificate" class="col-md-1 btn"><i class="fa fa-trash"></i></button>
          </div>
        `;

        document.getElementById("LicenseTitle").value ="";
        document.getElementById("orgName").value="";   
        document.getElementById("issueDate").value="";
        document.getElementById("aboutcirtification").value="";
        
    }
     
    removeExp();
    function removeExp()
    {  
        let task = document.querySelectorAll("#removeCirtificate");
        for (let i = 0; i < task.length; i++) {    
            task[i].onclick = function () {   
                count--;
                this.parentNode.remove();    
                document.querySelector("#noofCirti").innerHTML=`
         ${count} Cirtificate Added
        `;          
            }   
        } 
    }        
}


function addAccomplishment(){

    let accTitle = document.getElementById("accTitle").value;
    let accDate = document.getElementById("accDate").value;
    let accDesc = document.getElementById("accDescription").value;

    if(accDate==""||accTitle==""||accDesc=="")
    {
        alert("Fill all the field!!");
    }
    else{
        document.getElementById("accList").innerHTML+=`
        <div class="d-flex justify-content-between">
        <div>
            <h6>${accTitle} -  ${accDate}</h6>
            <p>${accDesc}</p>
          
          </div>
          <button id="removeAcc" class="col-md-1 btn"><i class="fa fa-trash"></i></button>
        </div>
     
        `;

        document.getElementById("accTitle").value ="";
        document.getElementById("accDate").value="";
        document.getElementById("accDescription").value="";

        
    }
    removeAcc();
    function removeAcc()
    {  
        let task = document.querySelectorAll("#removeAcc");
        for (let i = 0; i < task.length; i++) {    
            task[i].onclick = function () {   
                this.parentNode.remove();             
        ;          
            }   
        } 
    }  

}

function addProject(){

        let projectTitle = document.getElementById("ProjectTitle").value;
        let Projecdescription = document.getElementById("projectDescription").value;
        let projectLink = document.getElementById("ProjectLink").value;

        if(projectLink==""||projectTitle==""||Projecdescription=="")
        {
            alert("Fill all the field!!");
        }
        else{
            document.getElementById("projectList").innerHTML+=`
            <div class="d-flex justify-content-between">
            <div>
             <h5>${projectTitle}  -  ${projectLink}</h5>
             <p>${Projecdescription}</p>
           </div> 
           <button id="removeProject" class="col-md-1 btn"><i class="fa fa-trash"></i></button>
         </div>
            `;
        }


        removeProject();
    function removeProject()
    {  
        let task = document.querySelectorAll("#removeProject");
        for (let i = 0; i < task.length; i++) {    
            task[i].onclick = function () {   
                this.parentNode.remove();             
        ;          
            }   
        } 
    }  

}

function addSchool(){
    let std = document.getElementById("sel1").value;
    let schoolName = document.getElementById("schoolName1").value;
    let boardName = document.getElementById("BoardName1").value;
    let passYear = document.getElementById("PassingYear1").value;
    let cgpa = document.getElementById("Percentage1").value;


    if(std==""||schoolName==""||boardName==""||passYear==""||cgpa==""){
        alert("Fill all the field!!");
    }
    else{

        document.getElementById("educationDetail").innerHTML+=`
        <div class="eduList row mb-3">
        <div class=" col-lg-10">
        <div class="d-flex justify-content-between">
          <h5>${std} - Jeevan bharti high school</h5>
          <p>Passing year - 2020 </p>
        </div>
        <div class="d-flex justify-content-between">
          <h6>CBSE</h6>
          <p>Percentage/CGPA - 80.8 % </p>
        </div>
        </div>
        <button id="removeEdu"  class="col-md-2 btn"><i class="fa fa-trash"></i></button>
        </div>  
        `;

        document.getElementById("sel1").value="";
        document.getElementById("schoolName1").value="";
        document.getElementById("BoardName1").value="";
        document.getElementById("PassingYear1").value="";
        document.getElementById("Percentage1").value="";
    }


    removeeducation()
}

function removeeducation()
{
    let task = document.querySelectorAll("#removeEdu");
        for(let i of task) {    
            i.onclick = function () {   
                this.parentNode.remove();             
        ;          
            }   
        }    
}
function addCollege(){
    let std = document.getElementById("sel2").value;
    let collegeName = document.getElementById("schoolName2").value;
    let Degree = document.getElementById("degree").value;
    let passYear = document.getElementById("PassingYear2").value;
    let cgpa = document.getElementById("Percentage2").value;


    if(std==""||collegeName==""||Degree==""||passYear==""||cgpa==""){
        alert("Fill all the field!!");
    }
    else{

        document.getElementById("educationDetail").innerHTML+=`
        <div class="eduList row mb-3">
        <div class=" col-lg-10">
        <div class="d-flex justify-content-between">
          <h5>${std} - ${collegeName}</h5>
          <p>Passing year - ${passYear} </p>
        </div>
        <div class="d-flex justify-content-between">
          <h6>${Degree}</h6>
          <p>Percentage/CGPA - ${cgpa} </p>
        </div>
        </div>
        <button id="removeEdu" class="col-md-2 btn"><i class="fa fa-trash"></i></button>
        </div>  
        `;
    }
    document.getElementById("sel2").value="";
    document.getElementById("schoolName2").value="";
    document.getElementById("degree").value="";
    document.getElementById("PassingYear2").value="";
    document.getElementById("Percentage2").value="";
    removeeducation()
}

 