$(document).ready (function (){


})

var myIncomes =[]
var myOuts =[]
$(document).on('click', '.income-button', function (){
    
    var inputValue = $("#input-income").val()
 
    myIncomes.push(inputValue)
    displayIncomes()
    
})
function displayIncomes() {
    var html
    for (var element of myIncomes){
    html=`
    
    <div class="income-item">${element}</div>
    `     
    $('.box-display').prepend(html)  
    }



}

 