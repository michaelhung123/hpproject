function  toggleFrom(){
    container=document.querySelector(".container");
    container.classList.toggle("active");
    main=document.querySelector(".login__registered");
    main.classList.toggle("active");
}

function check(){
    const arr = document.getElementsByTagName("input");
    var name1=arr[0].value;
    var passWord=arr[1].value;
    if( name1== "" || passWord == "" ){
        alert("Vui lòng nhập đầy đủ thông tin.");
    }
    else{
        confirm("WELCOME " + name1);
    } 
}
function check1(){
    const arr = document.getElementsByTagName("input");
    var name2=arr[3].value;
    var email= arr[4].value;
    var createPass=arr[5].value;
    var confirmPass=arr[6].value;
    if( name2== "" || email == "" || createPass == "" || confirmPass=="" ){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }else if(createPass != confirmPass){
        alert("Mật khẩu không khớp nhau. Vui lòng thử lại!");
        return;
    }
    else{
        confirm("Welcome " + name2);
    }
}