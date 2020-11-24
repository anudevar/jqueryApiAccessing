$(function () {
//This is to take data
    makeRequest(1);

    let pageNumberHtml = (`<div class = "pageFooter" style ="position:absolute;bottom:0;textAlign:center;width:100%;">
<span id="1">1,&nbsp;&nbsp;</span>
<span id="2">2,&nbsp;&nbsp;</span>
<span id="next">next</span>
</div>`);
    $('#pageNumberDisplay').append(pageNumberHtml);

    setTimeout(function () {
        $('#1').on('click', function () {
            console.log("clicked1");
            $("#mainDiv").empty();
                makeRequest(1);
        });
        $('#2').on('click', function () {
            console.log("clicked2");
            $("#mainDiv").empty();
            makeRequest(2);
        });
        $('#next').on('click', function () {
            $("#mainDiv").empty();
            let noDisplayText = (`<p> nothing to display</p>`);
            $('#mainDiv').append(noDisplayText);
        });
    }, 500);

});

function makeRequest(number) {
    let url = "https://reqres.in/api/users?page="+number;
    let personData = {
        "url": url,
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
}
