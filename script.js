//هذا خاص بالوضع الليلي و النهاري
let body = document.body;
let icon = document.getElementById("nav_icon"); 
let mode_btn = document.getElementById("mode_btn");
let mode_text = document.getElementById("mode_text");
mode_btn.addEventListener("click", function() {
  body.classList.toggle("dark");
  if (body.classList.contains('dark')) {
    icon.classList.remove('fa-moon')
    mode_text.innerHTML ='<i id="nav_icon" class="fa-solid fa-sun style-icon"></i> Light';
  } else {
    icon.classList.remove("fa-sun");
    mode_text.innerHTML ='<i id="nav_icon" class="fa-solid fa-moon style-icon"></i> Dark'
  }
});
// نهاية الوضع الليلي و النهاري


//هذا خاص بالكتابة اللي تطلع تدريجيا اول ماتفتح الموقع
let typed = new Typed("#typed-target", {
    strings: ["I am <span>AbdAllah Hadeedan</span> <br>Software Engineer | Web Developer | Data Analyst "],
    typeSpeed: 30
});
//نهاية كود الكتابة اللي تطلع بالتدريج


//كود يتاكد من الحقول فاضية او لا 
const name = document.getElementById("name");
const email= document.getElementById("email");
const message= document.getElementById("message");
const send = document.getElementById("submit");
const th_msg = document.getElementById("thank_message");
send.addEventListener("click", function() {
 if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
   th_msg.innerHTML = "Please fill empty fields";
 } else {
   if (validator.isEmail(email.value) && email.value.endsWith("@gmail.com")) {
     th_msg.innerHTML = "Thank you for your message";
   } else {
     th_msg.innerHTML = "Please enter a valid email";
   }
}
});
//نهاية كود التحقق من الحقول

//هذا الكود خاص بالقائمة الجانبية يعني لما نضغط على الشكل متاع ثلاث خطوط على بعضهن شن يصير و لما نضغط عى ايقونة ال x شت يصير
const bars= document.getElementById("nav_bars");
const x= document.getElementById("x");
const nav_list= document.getElementById("nav_list");
bars.addEventListener("click",function(){
  if(nav_list.style.left==="0px"){
    nav_list.style.left="-400px";
  }else{
    nav_list.style.left="0px";
  }
})
x.addEventListener("click",function(){
  if(nav_list.style.left==="0px"){
    nav_list.style.left="-400px";
  }else{
    nav_list.style.left="0px";
  }
})
//نهاية القائمة الجانبية


  