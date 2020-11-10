$( document ).ready(function() {
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
    $.each(person, function (key, value) {

        let firstName = value['first_name'];
        let secondName = value['last_name'];
        let email = value['email'];
        let imageSource = value['avatar'];
let display = (`<div class ="DisplayName" id= "showMore ` + (key + 1) + `"> <br>
<button class="displayData"> ` + firstName + `</button></div>
<div class="hidden" id="more"` + (key + 1) + `">
    <h1>` + firstName + `</h1> 
      <h1>` + secondName + `</h1> 
      <h1>` + email + `</h1>
      <img src="` + imageSource + `" alt="` + secondName + `">
    </div>`);
    $(".hidden").hide();

   //This is show only functionality
    /*todo:1.create function for on click and blur
     */
    $(".DisplayName").click(function(){ 
      $(this).parent().addClass("more");
      $(this).hide();
      $(this).siblings(".hidden").show();
    });
    $(".hidden").click(function(){
      $(this).parent().removeClass("more");
      $(this).hide();
      $(this).siblings(".DisplayName").show();
    });  
    $('#mainDiv').append(display); 
});
});
