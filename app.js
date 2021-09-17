var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given");
var nextBtn=document.querySelector("#next-btn");
var checkBtn=document.querySelector("#check-btn");
var cashGivenDiv=document.querySelector(".cash-given-div");
var errorMsg=document.querySelector(".error-msg");
var noOfNotes=document.querySelectorAll(".no-of-notes");
var changeReturnDiv=document.querySelector(".change-return-div")

var notesAvailable=[2000,500,100,20,10,5,1];

nextBtn.addEventListener('click', ()=>{
    
    if(Number(billAmount.value)>0){

        hideMessage();
        cashGivenDiv.style.display = "block";
        
    }
    else{
        //errorMsg.style.display="block";
        errorMsg.innerText="Please enter a valid amount"
    }
} )




checkBtn.addEventListener('click',function(){

    var billValue= billAmount.value;
    var cashValue= cashGiven.value;
    
     errorMsg.style.display="block";
    if (cashValue<=0){
        errorMsg.innerText="Please enter a valid amount";
        console.log("clicked")
    }
    else if (Number(billValue) > Number(cashValue)){
        console.log(billValue>cashValue)
        errorMsg.innerText="Insufficient funds, please enter adequate cash";
        console.log("clicked1")
    }
    else if(billValue===cashValue){
        errorMsg.innerText="No change!"
        console.log("clicked2")

    }
    else{
    
        calculateChange(billValue,cashValue);
    
    }
})

function hideMessage(){
    errorMsg.style.display="none";
}

function calculateChange(bill,value){
    hideMessage();
    returnAmount= value-bill;
    console.log(returnAmount)
    changeReturnDiv.style.display="block";
    for( var i=0;i<notesAvailable.length;i++){
    var notes=Math.trunc(returnAmount/notesAvailable[i]);
    returnAmount=returnAmount%notesAvailable[i];
    noOfNotes[i].innerText=notes;
    }
   
    
}
















//noOfNotes=document.querySelectorAll(".no-of-notes");
//querySelectorAll returns an array of target inputs
//console.log(noOfNotes, "number")

//var amount=[2000,500,100,50];

//for(var i=0;i<amount.length;i++){
  //  console.log(noOfNotes[i])
    
    
//}