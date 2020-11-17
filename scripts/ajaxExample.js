$(document).ready(function() {
//This is to take data
    let personData = {
        "url": "https://reqres.in/api/users?page=1",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };

    let person;
    $.ajax(personData)
        .done(function (response) {
            person = response['data'];
        });
//This is to display items
    $.each(person, function(key, value) {
        let firstName = value['first_name'];
        let secondName = value['last_name'];
        let email = value['email'];
        let imageSource = value['avatar'];
let display = (`<div id= "showMore ` + key + `" class='DisplayName'>
` + firstName + ` </div>`
);
    $('#mainDiv').append(display); 
   //This is show only functionality
    /*todo:1.create function for on click and blur
     */
    $(".DisplayName").on('click', function(){
 let html = (`<div id= "More ` + key + `" class='personDetails'>
 <p> FirstName: ` + firstName + `</p>
 <p>LastName : ` + secondName + `</p>
 <p> Email: ` + email + `</p>
 <img src="` + imageSource + `" alt="` + secondName + `">
  </div>`);
  $("#mainDiv").append(html);
      
 }); 
//  ('<p> FirstName: ' + firstName + '</p>') + ('<p>LastName : ' + secondName + '</p>') + ('<p> Email: ' + email + '</p>') + ('<img src="' + imageSource + '" alt="' + secondName + '">');
  $("#mainDiv").dblclick(function(){
    $this.hide();
    }); 

});
});


    