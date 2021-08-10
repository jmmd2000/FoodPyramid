// Treats counter
var t = 0;
function plusTreats() {
            t++;
            document.getElementById('treats').value = t;
        }
function minusTreats(){
            t--;
            document.getElementById('treats').value = t;
        }


// Fruit counter
var f = 0;
function plusFruit() {
            f++;
            document.getElementById('fruit').value = f;
}
function minusFruit(){
            f--;
            document.getElementById('fruit').value = f;
        }


// Carbs counter
var c = 0;
function plusCarbs() {
            c++;
            document.getElementById('carbs').value = c;
        }
function minusCarbs(){
            c--;
            document.getElementById('carbs').value = c;
        }


// Fats counter
var fa = 0;
function plusFats() {
            fa++;
            document.getElementById('fats').value = fa;
        }
function minusFats(){
            fa--;
            document.getElementById('fats').value = fa;
        }


// Proteins counter
var p = 0;
function plusProteins() {
            p++;
            document.getElementById('proteins').value = p;
        }
function minusProteins(){
            p--;
            document.getElementById('proteins').value = p;
        }


// Veg counter
var v = 0;
function plusVeg() {
            v++;
            document.getElementById('veg').value = v;
        }
function minusVeg(){
            v--;
            document.getElementById('veg').value = v;
        }

// This shows the date form box
function showDateBox(){
    document.getElementById("date-input").style.display = "block";
}

// This hides the date form box
function cancel(){
    document.getElementById("date-input").style.display = "none";
}

// This takes the values from the form, applies them to the date display
//  and then hides the date form box
function submitDate(){
    var day = document.getElementById("dayInput").value;
    var month = document.getElementById("monthInput").value;
    var year = document.getElementById("yearInput").value;

    document.getElementById("date1").style.display = "inline";
    document.getElementById("date2").style.display = "inline";
    document.getElementById("date3").style.display = "inline";
    document.getElementById("date4").style.display = "inline";
    document.getElementById("dayDate").style.display = "inline";
    document.getElementById("monthDate").style.display = "inline";
    document.getElementById("yearDate").style.display = "inline";

    document.getElementById("dayDate").innerHTML = day;
    document.getElementById("monthDate").innerHTML = month;
    document.getElementById("yearDate").innerHTML = year;

    document.getElementById("date-input").style.display = "none";
}