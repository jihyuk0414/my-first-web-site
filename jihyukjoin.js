var passwordchecking = document.getElementById('passwordchecking')
var password = document.getElementById('password')
var passwordcheck = document.getElementById('passwordcheck')
var id = document.getElementById('id')
var emailok = document.getElementById('emailok')
var codecheck = document.getElementById('codecheck')
var emailcheck = document.getElementById('emailcheck')

passwordchecking.addEventListener('click',function(event){
        
    if(password.value !== passwordcheck.value)
    {
        alert("비밀번호와 비밀번호 확인이 다릅니다.")
    }
    else 
    { 
        alert ('비밀번호 승인 완료 되었습니다.') //비밀번호 체크

        
    }

})



function maxLengthCheck(password) {
    if (password.value.length > 8)
      password.value = password.value.slice(0, 8) //레전드 똥프로그램 ㅋㅋ maxlength오류때문에 만듬 
  }



end.addEventListener('click',function(event){
        
    if(confirm ('회원가입 완료하겠습니까?'))
    {
        alert ('축하합니다! 회원가입 완료')
        location.reload() ; //
    }

})

id.addEventListener('input',function(event){
        
    id.value = id.value.replace(/[^A-Za-z0-9]/ig, '') //아이디 확인 

})

emailok.addEventListener('click',function(event){
    
    if (codecheck.value === '1234')
    {
        alert ('인증이 성공하였습니다')
        document.getElementById('end').disabled=false;
    }
    else 
    {
        alert ('인증번호가 다릅니다')
    }
})

emailcheck.addEventListener('click',function(event){
    alert ('전송 완료 되었습니다')
    window.open('이메일 프로그램.html')
})