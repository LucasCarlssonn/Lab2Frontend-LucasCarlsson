
function validate() {
    const ERROR_STYLE = "border-color: red"

    let score = 0;

    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let radio = document.forms["myForm"]["question2"].value;
    let text = document.forms["myForm"]["question3"].value;
    let checkbox = [];
    for (let i = 0; i < 3; i++){
        checkbox.push(document.forms["myForm"]["question1"][i].checked)

    }
    
    document.getElementById("fname_error").innerHTML = ""
    document.getElementById("lname_error").innerHTML = ""
    document.getElementById("email_error").innerHTML = ""
    document.getElementById("question1_error").innerHTML = ""
    document.getElementById("question2_error").innerHTML = ""
    document.getElementById("question3_error").innerHTML = ""
    document.getElementById("fname").style = "default"
    document.getElementById("fname").style = "default"
    document.getElementById("fname").style = "default"


    if (fname == "" || !(/^[a-ö]*$/i.test(fname))) {
        if(fname == ""){
            document.getElementById("fname_error").innerHTML = "First name must be filled out";
            document.getElementById("fname").style = ERROR_STYLE;
        } else if (!(/^[a-ö]*$/i.test(fname))){
            document.getElementById("fname_error").innerHTML = "First name must only contain letters";
            document.getElementById("fname").style = ERROR_STYLE;
        }
        return false
    } 
    else if (lname == "" || !(/^[a-ö]*$/i.test(lname))){
        if (lname == ""){
            document.getElementById("lname_error").innerHTML = "Last name must be filled out";
            document.getElementById("lname").style = ERROR_STYLE;
        } else if (!(/^[a-ö]*$/i.test(lname))){
            document.getElementById("lname_error").innerHTML = "Last name must only contain letters";
            document.getElementById("lname").style = ERROR_STYLE;
        }
        return false
    }
    else if (email == "" || (!(/\S+[@]\S+[.]\S+/.test(email)) || email.includes(" "))){
        if (email == ""){
            document.getElementById("email_error").innerHTML = "Email must be filled out";
            document.getElementById("email").style = ERROR_STYLE;
        } else if (!(/\S+[@]\S+[.]\S+/.test(email)) || email.includes(" ")){
            document.getElementById("email_error").innerHTML = "Email must not contain spaces and follow the format xxxx@xxxx.xxx";
            document.getElementById("email").style = ERROR_STYLE;
        }
        return false
    }
    else if (!checkbox.includes(true)){
        document.getElementById("question1_error").innerHTML = "Please fill in question 1";
        return false

    }
    else if (radio == ""){
        document.getElementById("question2_error").innerHTML = "Please fill in question 2";
        return false

    } else if (text == ""){
        document.getElementById("question3_error").innerHTML = "Please fill in question 3";
        return false
    }
    else{
        if (radio == 1){
            score += 1;
        }
        
        if (checkbox[0] && !checkbox[1] && checkbox[2]){
            score += 2;
        } else if ((checkbox[0] || checkbox[2]) && !checkbox[1]){
            score += 1;
        }
    
        if (/paris/i.test(text)){
            score += 1
        }
        document.getElementById("score").innerHTML = "Your score is " + score + "/4"
        return false
}
}