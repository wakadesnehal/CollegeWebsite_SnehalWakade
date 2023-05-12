let fnameNode=$('#uname');
let errorNode1=$('#error1');
let emailNode=$('#uemail');
let errorNode2=$('#error2');
let phoneNode=$('#phone');
let errorNode3=$('#error3');
let msgNode=$('#message');
let errorNode4=$('#error4');

$(function(){
    fnameNode.blur(()=>validate1());
    emailNode.blur(()=>validate2());
    phoneNode.blur(()=>validate3());
    msgNode.blur(()=>validate4());

    $('#contactForm').submit(()=>validateForm());

});

function validate1(){
    errorNode1.text("");
    let fname=fnameNode.val();
    let fnamepattern=new RegExp("^[A-Za-z]*$");
    fnameNode.css({border:"2px solid red"});
    if(fname==""){
        errorNode1.text("Name is required.");
        return false
    }
    else if(fnamepattern.test(fname)==false){
        errorNode1.text("Name must have only alphabets");
        return false
    }
    else{
        fnameNode.css({border:"2px solid green"});
        return true
    }
}

function validate2(){
    errorNode2.text("");
    let email=emailNode.val();
    emailNode.css({border:"2px solid red"});
    if(email==""){
        errorNode2.text("Email is required");
        return false
    }
    else if(!email.includes('@')){
        errorNode2.text("Please enter valid EmailId");
        return false
    }
    else if(email.endsWith('@')){
        errorNode2.text("Please enter valid EmailId");
        return false
    }
    else{
        emailNode.css({border:"2px solid green"});
        return true
    }
}
function validate3(){
    errorNode3.text("");
    let phone=phoneNode.val();
    let phonePattern= new RegExp("^[0-9]*$");
    phoneNode.css({border:"2px solid red"});
    if(phone==""){
        errorNode3.text("Phone number is required");
        return false
    }
    else if(phonePattern.test(phone)==false){
        errorNode3.text("Phone number must have only numbers");
        return false
    }
    else if(phone.length<10 || phone.length>10){
        errorNode3.text("Phone number must contain 10 digits only.");
        return false
    }
    else{
        phoneNode.css({border:"2px solid green"});
        return true
    }
}

function validate4(){
    errorNode4.text("");
    let message=msgNode.val();
    msgNode.css({border:"2px solid red"});
    if(message==""){
        errorNode4.text("Your message is required");
        return false
    }
    else{
        msgNode.css({border:"2px solid green"});
        return true
    }
}

let nodeArray=[fnameNode,emailNode,phoneNode,msgNode];
function validateForm(){
    var flag1=validate1();
    var flag2=validate2();
    var flag3=validate3();
    var flag4=validate4();
    
    let flagArray=[flag1,flag2,flag3,flag4];
        for(let i=0;i<flagArray.length;i++){
                if(flagArray[i]==false){
                    nodeArray[i].focus();
                    break;
                }
            }
    let value=(flag1 && flag2  && flag3 && flag4);
    if(value=='true'){
        alert("Thank you for connecting with us.");
    }
    return (value)
}

