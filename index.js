const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const output=document.querySelector("#output-box");

function compareValues(sum,luckyNumber){
  if(sum%luckyNumber===0){
    output.innerText="Your birthday is Lucky ";
  }else{
    output.innerText="NOT Lucky Enough 🤣😂";
  }

}
function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
compareValues(sum,luckyNumber.value);
    }
    else{
        output.innerText="Enter both fields";
    }
    // console.log(sum);
    // console.log(dateOfBirth.value);
}
function calculateSum(dob){
   dob=dob.replaceAll("-","");
   let sum=0;
   for(let index=0;index<dob.length;index++){
        sum=sum +  Number(dob.charAt(index));
   }
   return sum;

}
checkNumberButton.addEventListener('click',checkBirthdayIsLucky);

