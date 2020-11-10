let responseData;
let FirstName;
let lastName;
let email;
let avatar;
let personData = {
  "url": "https://reqres.in/api/users?page=1",
  "method": "GET",
  "timeout": 0,
  "dataType": "json",
  "async":false,
};

$.ajax(personData)
.done(function (response) {
responseData = response['data'];
});

    let array = {
      id: "",
      email:"",
      first_name:"",
      last_name:" ",
      avatar: "",
    }
$(document).ready(function () {
  for (i = 0; i < responseData.length; i++) {
    let html = ('<button class = "button">' + responseData[i]["first_name"] + '</button><br><br>');
$('#display0').append(html);//here buttons are created  now on click it should display coressponding data
// $('#display1').click(function () {
  $.each(responseData[i], function(key, value) {
    let data = (key + ': ' + value);
let display = ('<p>' + data + '</p>');;
$('#display0').append(display);
});
$("display0").click(function(){
        $(this).show();
    });
$("display0").click(function(){
  $(this).slideUp();
        $(this).hide();

    // });
});
  }
});

    
    // Show hidden paragraphs
    
/* $('#display1').onclick(function data (event) {
            $.each(responseData[i], function (key, value ) {
                   let display = (key + ': ' + value)
  console.log(display);
let innerhtml = ('<p>' + display + '</p>');;
$('#display1').append(innerhtml);
});
            }); */
            

/* $(document).ready(function () {
let html = ('<button>' + responseData[0]["first_name"] + '</button>');
$('#display0').append(html);
}     
('<p>' + data + '</p>');
$.('#display0').on(click, (function (event) {
            $.each(responseData, function (index, i ) {
                $.each(i, function (key, value) {
                   let data = responseData(key, value);
                    $("#display0").append(data);
                });
            });
/* $('#display').click(function (event) {
for(j = 0; j < responseData.length; j++ ){
//if(i = j) {
let data = ('<p> FirstName: ' + responseData[j]["first_name"] + '</p>') + ('<p>LastName : ' + responseData[j]["last_name"] + '</p>') + ('<p> Email: ' + responseData[j]["email"]+ '</p>') + ('<p> image:' + responseData[j]["avatar"] + '</p><br><br><br><br><br><br>') ;
    $('#display').append(data);
//}
}
}); */
/* }));
});  */




 


 /* $.each(formData, function (index, data) {
                $.each(data, function (Key, Value) {
                    if (Value === "email") {
                        UserEmail = data['value'];
                    }
                });
            }); */
/* $(document).ready(function () {
let i;
for (i = 0; i < responseData.length; i++) {
 let html= ('<p>' + responseData[i]["first_name"] + '</p>');
 $('#display').append(html);
}
 }); */
/* $(document).ready(function () {
let i;
for (i = 0; i < responseData.length; i++) {
 let html = ('<p> FirstName: ' + responseData[i]["first_name"] + '</p>') + ('<p>LastName : ' + responseData[i]["last_name"] + '</p>') + ('<p> Email: ' + responseData[i]["email"]+ '</p>') + ('<p> image:' + responseData[i]["avatar"] + '</p>');
  $('#display').append(html);
}
 }); */

 
 /* $(document).ready(function () {
 let html = ('<p> FirstName: ' + FirstName + '</p>') + ('<p>LastName : ' + lastName + '</p>') + ('<p> Email: ' + email + '</p>') + ('<img src=./avatar alt="pic">');
  $('#display').append(html);
 });
 */
 
/* 
 $(document).ready(function () {
   $("#display").click(function(){
            // $("#display").click(function (event) {
              console.log('clicked');
              $.ajax( function (personData) {
                    $('#state').html('<p> FirstName: ' + FirstName + '</p>');
                    $('#state').append('<p>LastName : ' + lastName + '</p>');
                    $('#state').append('<p> Email: ' + email + '</p>');
                    $('#state').append('<p> avatar: ' + avatar + '</p>');
                });
            });
        });
 */
/* $(document).ready(function () {
            $("#display").click(function (event) {
              console.log('clicked');
                $.getajax( function (responseData) {
                    $('#state').html('<p> FirstName: ' + FirstName + '</p>');
                    $('#state').append('<p>LastName : ' + lastName + '</p>');
                    $('#state').append('<p> Email: ' + email + '</p>');
                    $('#state').append('<p> avatar: ' + avatar + '</p>');
                });
            });
        }); */

/* let firstNameJson = [];
        if ($.responseData.get(FirstName)) {
            firstNameJson = JSON.parse($.responseData.get(FirstName), true);
            formJson = JSON.stringify(firstNameJson);
        } */


/* $ ( document ).ready ( function () {
    let DisplayFirstName = $.session.get (responseData);
    if ( responseData.length > 0) {
        document.getElementById (FirstName).href = fac;
    }
    $.session.delete('DisplayFirstName');
} );
 */

 /* document.includeHTML(display);
function display() {
  document.displayObject( FN );
  console.log(display);
}
document.getElementById(FN); */
// document.getElementById(FN);

/* FN = responseData[0]["first_name"];
FN1 = responseData[1]["first_name"];
FN2 = responseData[2]["first_name"];
FN3 = responseData[3]["first_name"];
FN4 = responseData[4]["first_name"];
FN5 = responseData[5]["first_name"];
console.log(FN, FN1, FN2, FN3, FN4, FN5); */

/* let j;
for (j = 0; j < responseData.length; j++) {
  FN1 = responseData[j]["first_name"]+ responseData[j]["last_name"] + responseData[j]["email"] + responseData[j]["avatar"];
  console.log(FN1);
} */

/* let j;
for (j = 0; j < responseData.length; j++) {
  lastName = responseData[j]["last_name"];
  console.log(lastName);
}

let k;
for (k = 0; k < responseData.length; k++) {
  email = responseData[k]["email"];
  console.log(email);
}
let l;
for (l = 0; l < responseData.length; l++) {
  avatar = responseData[l]["avatar"];
  console.log(avatar);
} */


/* let i;
for (i = 0; i < responseData.length; i++) {
  FirstName = responseData[i]["first_name"];
  lastName = responseData[i]["last_name"];
  email = responseData[i]["email"];
  avatar = responseData[i]["avatar"];
} */