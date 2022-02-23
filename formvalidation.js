function fnameValidate(){
 let first_name=document.getElementById('fname').value
  if(first_name==""){
      displayMsg ('firstname is mandatory', 'fnameMsg', 'red')
      return false
  }


  else if(! first_name.match (/^[a-zA-z]) +$ /)) {

    displayMsg('firstname only contains alphabets','fnameMsg', 'red')
    return false
  }




  function lnameValidate(){
    let last_name=document.getElementById('lname').value
     if(last_name==""){
         displayMsg ('lastname is mandatory', 'lnameMsg', 'red')
         return false
     }



     else if(!last_name.match (/^[A-Z]+ ([a-z])+$/)) {
   
       displayMsg('lastname only contains alphabets and start with uppercase letters','fnameMsg', 'red')
       return false
     }

     else if (last_name.length<3){
         displayMsg('lastname must be more than 2 characters', 'lnameMsg','red')
         return false
     }
     else {
         displayMsg('valid lastname','lnameMsg','green')
         return true
     }









     function emailValidate(){
        let email=document.getElementById('email').value
         if(email==""){
             displayMsg ('email is mandatory', 'emailMsg', 'red')
             
             return false
         }

         // ram09.hari@gmail

           else if(!email.match(/^ [a-z0-9])  [a-z0-9 \_\- \. ] +\@+ (([a-z]+\.)+
           ([a-z]) /)) {


           displayMsg('invalid email format','emailMsg', 'red')
           return false
         
    
         
         }
         else {
             displayMsg('valid email','emailMsg','green')
             return true
         }
        }






















     }
     









  else if(first_name.length<3){
      displayMsg('firstname must be more than 2 characters', 'fnameMsg', 'red')
      return false
  }

  else{
      displayMsg('valid firstname', 'fnameMsg','green')
      return true
  }
}
function displayMsg(Msg,id, colorvalue){
    document.getElementById(id).innerHTML=Msg
    document.getElementById(id).style.color=colorvalue

}