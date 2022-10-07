function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

document.getElementById("calculateBtn").onclick = function(){

    let salary = document.getElementById("salary").value
    let hours = document.getElementById("hours").value
    let weeks = document.getElementById("weeks").value

    salary = Number(salary)
    hours = Number(hours)
    weeks = Number(weeks)

    let monthly_pay = (salary/12)
    let weekly_pay = (salary/weeks)
    let hourly_pay = (salary/weeks)/hours
    let median = (salary/54132)*100

    monthly_pay = monthly_pay%1 == 0.0 ? Math.round(monthly_pay) : monthly_pay.toFixed(2);
    monthly_pay = monthly_pay > 999 ? numberWithCommas(monthly_pay) : monthly_pay;
    weekly_pay = weekly_pay%1 == 0.0 ? Math.round(weekly_pay) : weekly_pay.toFixed(2);
    weekly_pay = weekly_pay > 999 ? numberWithCommas(weekly_pay) : weekly_pay;
    hourly_pay = hourly_pay%1 == 0.0 ? Math.round(hourly_pay) : hourly_pay.toFixed(2);
    hourly_pay = hourly_pay > 999 ? numberWithCommas(hourly_pay) : hourly_pay;
    median = median%1 == 0.0 ? Math.round(median) : median.toFixed(2);
    median = median > 999 ? numberWithCommas(median) : median;

    if (salary == "" || salary <= 0){
        alert("Your salary input is not valid.")
    }
    else if (hours == "" || hours <= 0){
        alert("Your hours input is not valid.")
    }
    else if (weeks == "" || weeks <= 0){
        alert("Your weeks input is not valid.")
    }
    else {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").style.height = "unset";
        document.getElementById("hourVal").innerHTML = `$${hourly_pay}`;
        document.getElementById("monthVal").innerHTML = `$${monthly_pay}`;
        document.getElementById("weekVal").innerHTML = `$${weekly_pay}`;
        document.getElementById("medianVal").innerHTML = `${median}%`;
    }


    document.getElementById("resetBtn").onclick = function(){
        document.getElementById("salary").value = "";
        document.getElementById("hours").value = 40;
        document.getElementById("weeks").value = 52;
        document.getElementById("hourVal").innerHTML = "";
        document.getElementById("monthVal").innerHTML = "";
        document.getElementById("weekVal").innerHTML = "";
        document.getElementById("medianVal").innerHTML = "";
        document.getElementById("result").style.visibility = "hidden";
        document.getElementById("result").style.height = "0";
    }
}