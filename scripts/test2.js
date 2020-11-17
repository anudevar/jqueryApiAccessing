$(function () {
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

        let html = (`<div class = "showMore" > <br>
      <h1> ` + firstName + ` </h1>
      <div hidden>
      <h1>` + secondName + `</h1> 
      <h1>` + email + `</h1>
      <img src="` + imageSource + `" alt="` + secondName + `">
    </div>
      </div>`);
        $('#mainDiv').append(html);
    });

//This is show only functionality
    $('.showMore').on('click', function () {
        $(this).children('div').toggle();
    });
});