function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.locations = "kwitter.html";
    }


    function updatelike(message_id)
    {
          console.log("clicked on like button - " + message_id);
          button_id = message_id;
          likes = document.getElementById(button_id).value;
          updated_likes = Number(likes) +2;
          console.log(updated_likes);
    }


    function send()
    {
     msg = document.getElementById("msg").Value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
    
     document.getElementById("msg").value = "";
    }
    
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0


    });