const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    // Retrieving the values of form elements 
   // var name = document.contactForm.fullname.value;
    var nameonmrk = document.contactForm.nameonmrk.value;
    var gender = document.contactForm.gender.value;
    var address = document.contactForm.address.value;
    var city = document.contactForm.city.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobileno.value;
    var parentsmobileno = document.contactForm.parentsmobileno.value;
    var branch = document.contactForm.branch.value;
    var comname = document.contactForm.comname.value;
    var batchtime = document.contactForm.batchtime.value;
    var course = document.contactForm.course.value;
  //  var coursename = document.contactForm.coursename.value;
    var designation = document.contactForm.designation.value;
  //  var feespaid = document.contactForm.feespaid.value;
   // var payment = document.contactForm.payment.value;
    var comname = document.contactForm.comname.value;
    var enroll = document.contactForm.enroll.value;
    var branch = document.contactForm.branch.value;
    var course = document.contactForm.course.value;
   // var trx_no = document.contactForm.trx_no.value;
    var tutorname = document.contactForm.tutorname.value;
    var chequeno = document.contactForm.chequeno.value;
    var receipt = document.contactForm.receipt.value;
    var paytype = document.contactForm.paytype.value;
    var pincode = document.contactForm.pincode.value;
   /* var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }*/
    
	// Defining error variables with a default value
    var receiptErr = chequenoErr = paytypeErr = tutornameErr = courseErr = emailErr = branchErr = enrollErr = comnameErr = mobileErr = branchErr = designationErr = genderErr = nameonmrkErr = addressErr = parentsmobilenoErr = comnameErr = batchtimeErr = courseErr = coursenameErr = cityErr= true;
    var pincodeErr=true;
     // Validate branch
     if(branch == "0") {
        printError("branchErr", "Please select your branch");
    } else {
        printError("branchErr", "");
        branchErr = false;
    }
   

        // Validate nameonmark
        if(nameonmrk == "") {
        printError("nameonmrkErr", "*Please enter a name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(nameonmrk) === false) {
            printError("nameonmrkErr", "*Please enter a valid name");
        } else {
            printError("nameonmrkErr", "");
            nameonmrkErr = false;
        }
    }
    //validate gender
    if(gender == "0") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

     // Validate address
     if(address == "") {
        printError("addressErr", "*Please enter address");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(address) === false) {
            printError("addressErr", "*Please enter a valid address");
        } else {
            printError("addressErr", "");
            addressErr = false;
        }
    }
   
    // Validate email address
    if(email == "") {
        printError("emailErr", "*Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "*Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

     // Validate city
     if(city == "") {
        printError("cityErr", "*Please enter address");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(city) === false) {
            printError("cityErr", "*Please enter a valid address");
        } else {
            printError("cityErr", "");
            cityErr = false;
        }
    }
    // Validate designation
    if(designation == "0") {
        printError("designationErr", "Please select your Designation");
    } else {
        printError("designationErr", "");
        designationErr = false;
    }
// Validate college
    if(comname == "") {
        printError("comnameErr", "*Please enter College/Company name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(address) === false) {
            printError("comnameErr", "*Please enter a valid College/Company name");
        } else {
            printError("comnameErr", "");
            comnameErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "*Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "*Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate enrollment number
    if(enroll == "") {
        printError("enrollErr", "*Please enter your Enrollment number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(enroll) === false) {
            printError("enrollErr", "*Please enter a valid 10 digit Enrollment number");
        } else{
            printError("enrollErr", "");
            enrollErr = false;
        }
    }

    // Validate parent mobile number
    if(parentsmobileno == "") {
        printError("parentsmobilenoErr", "*Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(parentsmobileno) === false) {
            printError("parentsmobilenoErr", "*Please enter a valid 10 digit mobile number");
        } else{
            printError("parentsmobilenoErr", "");
            parentsmobilenoErr = false;
        }
    }
    //company name
    if(comname == "") {
        printError("comnameErr", "*Please enter company/college name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(comname) === false) {
            printError("comnameErr", "*Please enter a valid company/college name");
        } else {
            printError("comnameErr", "");
            comnameErr = false;
        }
    }

    // Validate batch time
    if(batchtime == "0") {
        printError("batchtimeErr", "Please select your batch time");
    } else {
        printError("batchtimeErr", "");
        batchtimeErr = false;
    }
 // Validate course name
    if(course == "0") {
        printError("courseErr", "Please select your Course");
    } else {
        printError("courseErr", "");
        courseErr = false;
    }

//fees paid validation
    if(feespaid == "") {
        printError("feespaidErr", "*Please enter Fees Paid");
    } else {
        var regex=/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;            
        if(regex.test(feespaid) === false) {
            printError("feespaidErr", "*Please enter a valid format");
        } else {
            printError("feespaidErr", "");
            feespaidErr = false;
        }
    }
//fees  validation
if(coursefees == "") {
    printError("coursefeesErr", "*Please enter Course Fees ");
} else {
    var regex=/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;            
    if(regex.test(coursefees) === false) {
        printError("coursefeesErr", "*Please enter a valid format");
    } else {
        printError("coursefeesErr", "");
        coursefeesErr = false;
    }
}

//pincode  validation
if(pincode == "") {
    printError("pincodeErr", "*Please enter pincode ");
} else {
    var regex=/^(\d{4}|\d{6})$/;            
    if(regex.test(pincode) === false) {
        printError("pincodeErr", "*Please enter a valid format");
    } else {
        printError("pincodeErr", "");
        pincodeErr = false;
    }
}

    //validate Branch
    if(branch == "0") {
        printError("branchErr", "Please select your Branch");
    } else {
        printError("branchErr", "");
        branchErr = false;
    }

    //validate Course
    if(course == "0") {
        printError("courseErr", "Please select your Course");
    } else {
        printError("courseErr", "");
        courseErr = false;
    }

    //validate Batching timing
    if(batchtime == "0") {
        printError("batchtimeErr", "Please select your Batch Time");
    } else {
        printError("batchtimeErr", "");
        batchtimeErr = false;
    }

//Tutor Name
if(tutorname == "") {
    printError("tutornameErr", "*Please enter Tutor name");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(tutorname) === false) {
        printError("tutornameErr", "*Please enter a valid name");
    } else {
        printError("tutornameErr", "");
        tutornameErr = false;
    }
} 
//Payment type
if(paytype == "0") {
    printError("paytypeErr", "Please select your Payment Type");
} else {
    printError("paytypeErr", "");
    paytypeErr = false;
}

if(chequeno == "") {
    printError("chequenoErr", "*Please enter Online Transation No./ Cheque No");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(chequeno) === false) {
        printError("chequenoErr", "*Please enter a valid Online Transation No./ Cheque No");
    } else {
        printError("chequenoErr", "");
        chequenoErr = false;
    }
} 

if(receipt == "") {
    printError("receiptErr", "*Please enter Receipt Number");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(receipt) === false) {
        printError("receiptErr", "*Please enter a valid Receipt Number");
    } else {
        printError("receiptErr", "");
        receiptErr = false;
    }
}


    /*^[1-9]\d{0,7}(?:\.\d{1,4})?|\.\d{1,4}$
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }*/
};