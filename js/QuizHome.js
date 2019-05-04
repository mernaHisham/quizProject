
$('document').ready( function(){ 

var userIndex = $('#userIndex');
var fname = $('#fname');
var lname = $('#lname');
var address = $('#address');
var Email = $('#emailregister');
var Pass = $('#password');
var phone = $('#phone');
var userImg = $('#userImg');
var addBtn = $('#btnAdd');
var loginBtn = $('#loginBtn');
var savedID ;
var loginStatus=false;
    //  Email Validation
 var   loginModalBtn=$('#loginModalBtn');
 var loginOutModalBtn=$('#loginOutModalBtn');
    var SavedUser=JSON.parse( sessionStorage.getItem("ID"));
    var _login=sessionStorage.getItem("loginStatus");
    if(_login=='true'){
        loginModalBtn.css('display','none');
        loginOutModalBtn.css('display','inline-block');
        $('#profileLink').css('display','inline-block');
        $('#registeModalBtn').css('display','none');
    }
    else{
        loginModalBtn.css('display','inline-block');
        loginOutModalBtn.css('display','none');
        $('#profileLink').css('display','none');
        $('#registeModalBtn').css('display','inline-block');


    }
    if(SavedUser!=null){
        $('#Name').text(SavedUser['first']+' '+SavedUser['last']);
        var profImg= SavedUser['img'].replace("C:\\fakepath\\","imgs/")
        $('#profileImg').attr('src',profImg);
        $('#userID').text(SavedUser['id']);
        $('#userName').text(SavedUser['first']+' '+SavedUser['last']);
        $('#userAddress').text(SavedUser['add']);
        $('#userMail').text(SavedUser['mail']);
        $('#userPassword').text(SavedUser['pssword']);
        $('#userPhone').text(SavedUser['phne']);
        $('#userImage').attr('src',profImg);

    }
    loginOutModalBtn.click(function(){
        loginStatus=false;
        sessionStorage.setItem("loginStatus",loginStatus)
        window.location.href="quiz.html";
    })
    
    

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    
    // end Validation
var users = [];

var user=
{
    "id":"",
    "first":"",
    "last":"",
    "add":"",
    "mail":"",
    "pssword":"",
    "phne":"",
    "img":""     
}

addBtn.click(addUser);  
loginBtn.click(login);

function addUser()
{
     
  
    if(userIndex.val()==''||fname.val()==''||lname.val()==''||address.val()==''||Email.val()==''||Pass.val()==''||phone.val()==''||userImg.val()==''){
        
    }
    else{  
        if (validateEmail(Email.val())) {

            alert(Email.val() + " is valid :)");

                 
        users = JSON.parse(localStorage.getItem("users"));
        if(users==null)
        {
            users=[];
        }
        user=new Object();
        user.id=users.length+1;
        user.first=fname.val();
        user.last=lname.val();
        user.add=address.val();
        user.mail=Email.val();
        user.pssword=Pass.val();
        user.phne=phone.val();
        user.img=userImg.val()
        users.push(user);
        var userArray_serilized = JSON.stringify(users);
        localStorage.setItem("users", userArray_serilized )
           
         } else {
             alert(Email.val() + " is  Not valid :)");
        
  
    }
}}
var EmailLogin = $('#loginEmail');
var PassLogin = $('#loginpassword');

function login(){
    var saved = JSON.parse(localStorage.getItem("users"));

if (EmailLogin.val()=='') {
    alert("Email is Required");
}
else if (PassLogin.val()=='')
    
     {
        alert("Password is Required");
    }
    else{
        for (let i = 0; i < saved.length; i++) {
            if(PassLogin.val()==saved[i].pssword&&EmailLogin.val()==saved[i].mail){            
                loginStatus=true;
                sessionStorage.setItem("loginStatus",loginStatus)
                  savedID = JSON.stringify( saved[i]);
               sessionStorage.setItem("ID",savedID);
               window.location.href ="profile.html"
            }
           
        }
       
        
    }



}


} 
)
