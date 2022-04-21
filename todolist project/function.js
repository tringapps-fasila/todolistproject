function signup(){
            
        var names = document.getElementById('names').value;
        var mail = document.getElementById('mail').value;
        var pw = document.getElementById('pw').value;

        let detail={
            "details":[],
        }
        detail.details.push({
            "names":names,
            "email":mail,
            "pw":pw,
            "todolist":[]});

           
        localStorage.setItem("detail",JSON.stringify(detail));

        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
    
        if(names.value.length == 0){
            alert('Please fill in email');
      }else if(pw.value.length == 0){
            alert('Please fill in password');
    
        }else if(mail.value.length == 0){
            alert('Please fill in password');
    
        }
        else if(names.value.length == 0 && pw.value.length == 0 && mail.value.length){
            alert('Please fill in username, email and password');
    
        }else if(pw.value.length > 8){
            alert('Max of 8');
    
        }else if(!pw.value.match(numbers)){
            alert('please add 1 number');
    
        }else if(!pw.value.match(upperCaseLetters)){
            alert('please add 1 uppercase letter');
    
        }else if(!pw.value.match(lowerCaseLetters)){
            alert('please add 1 lovercase letter');
    
        }else{
            alert('Your account has been created');
        }
        return false;
    }
      function signin()
     {
        alert("hi");
        var userName = document.getElementById('userName').value;
        var userPw = document.getElementById('userPw').value;
        let  storedName =localStorage.getItem("detail");
        let parseobj=JSON.parse(storedName);
        alert('hoo');
        var count=0;
        for(var i=0;i<parseobj.details.length;i++)
        {
            let newname=parseobj.details[i]["names"];
            let newpw=parseobj.details[i]["pw"];
            if (newname == userName && newpw == userPw){
                window.open("todolist.html");
           }
            else{
                 count++;
             }
        }
        if(count>0){
            alert("please give correct username and password!!");
        }
        return false;
         }

          
	