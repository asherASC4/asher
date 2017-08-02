$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0]);
    var userFirstName = data.results[0].name.first;
        var userLastName = data.results[0].name.last;
        var picture = data.results[0].picture;
        var nl = data.results[0].nat;
        $("body").append("<h1>This is "+userFirstName + " " +userLastName);
       $ ("body").append("<img src =https://randomuser.me/api/portraits/med/men/83.jpg></img>")  
       $.ajax({
           url:'https://restcountries.eu/rest/v2/alpha?codes=col;no;ee',
           dataType: 'json',
           success: function(data) {
               
               for (i=0; i<data.length; i++){
                   console.log("remove" )
                   if (nl ==data[1].alpha2Code){
                       $("body").append("<h2>"+data[i].name+"</h2>");
                       break
                   
                   }
               }
           }
       })
}
});
