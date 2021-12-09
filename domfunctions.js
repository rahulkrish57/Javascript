



let a=25;
let b=true;
let c="Rahul"
let d=25.56;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

var user={
    "name":"Rahul",
    "age" : 25,
    "isActive": true
}
console.log(typeof user);
console.log(user);
console.log(user["name"]);
console.log(user.age);
console.log(user.isActive);

function idElement() // function name
{
    var a=document.getElementById("p2").innerHTML; // assigning the value to  variable 'a' using 'id'
    alert (a);
    
}


function setElement() {
    var a=document.getElementById("p2").innerHTML = "setElement Function Processed by clicking button"; // giving a new string value to variable 'a' using 'id'

}

function getResult(){
    var m= document.getElementsByClassName("mark")
    var n=m.length; //alert(n) is used to know length 
    var tot=0;
        for(var i=0; i<n; i++) {
            tot=tot+Number(m[i].value); // 1. .value is used to obtain the value from m variable 2. if we use just tot+m[i].value will be just concaded so use Number () function

        }
        alert("Total:"+tot);

}
function resetForm() {
    document.getElementById("myForm").reset(); // for reseting the form
}

function getbyName() {
    var gen= document.getElementsByName("gen");
    //alert(gen.length);

    if(gen[0].checked) // checked used for describing the value clicked in radio button
    {
        alert(gen[0].value); // alerts value stored in gen[0] i.e. Male
    }
    else if(gen[1].checked)
    {
        alert(gen[1].value)
    }
    else
    {
        alert("select gender")
    }
}


