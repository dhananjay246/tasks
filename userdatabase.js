let userdatabase={
    user1:"pw123",
    user2:"pw456",
    user3:"pw789"
}
 function usermatch(username,password){
    if(userdatabase[username] && userdatabase[username]===password){
        return true;
    }
    else{
        return false;
    }
 }
 A=usermatch("user1","pw123")
 console.log(A)