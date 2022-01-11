function compute(){
    var principal = document.getElementById("principal").value;
    var moreThenZero = parseInt(principal) > 0;
    if (!moreThenZero) {
    alert("Enter a positive number in the Amount Field Please");
    document.getElementById("principal").focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    result.innerHTML = "If you deposit \<mark\>"+principal+"</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+interest+",\</mark\>\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    }
    
    function updateRate()
    {
    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerText=rateval;
    }
    