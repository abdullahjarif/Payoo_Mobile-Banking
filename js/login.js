// console.log("file added");

// document.getElementById('id').addEventListener("click",function(){}
// search: form submit reloading the page

// step:01--> set event handler

// document.getElementById('login_Btn').addEventListener("click",function(event){
// // step-02: prevent default behavior (prevent the reload page)
//     event.preventDefault(); 
//     console.log("login button clicked");

//     // step-03: get the phone number
//     const phoneNum = document.getElementById('phone_num');
//     const pinNum = document.getElementById('pin_Num');

    
//     console.log(phoneNum.value);
//     console.log(pinNum.value);

//     //step-04: validate phone and pin 
//     // this not the ultimate way, temporary way
//     if(phoneNum === '5' && pinNum === '1234'){
//         // step-05: access in the web
//         console.log("You are logged in");
        
//     }else{
//         alert("Wrong Phone number and Pin");
//     }
// });

document.getElementById('login_Btn').addEventListener("click", function(event){
    // console.log("Button Clicked");
    event.preventDefault();

    // get phone and pin number
    const phoneNum = document.getElementById('phone_num');
    const pinNum = document.getElementById('pin_Num');

    console.log(phoneNum.value);
    console.log(pinNum.value);

    // unethical way to validate
    if(phoneNum.value === '5' && pinNum.value === '1234'){
        console.log('You are logged in');
        window.location.href = 'home.html';
        
    }else{
        alert("Wrong Credential");
    }

});
