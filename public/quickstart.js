

var username = "ACa5dd28eb8822fb19b6aa2a402c506508"; // fill in!
var password = "335f9c25ef248262065f4b5802ace90e"; // fill in!
var fromPhone = "+19147684899"; // replace!
var toPhone = "+16466836965"; // replace
$("#textMe").click(function(){
    $.ajax({
        type: "POST",
        url: "https://api.twilio.com/2010-04-01/Accounts/ACa5dd28eb8822fb19b6aa2a402c506508/Messages.json",
          headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
          },
        data: {
            From:fromPhone,
            To:toPhone,
            Body: "Hey it's gonna rain today, grab an umbrella!",
        },
        dataType:"text",
        success: function(result){
        $("#div1").html(result);
    }});
});