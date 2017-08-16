//Set database object

var database = firebase.database().ref();
//button executes this function
function updateDB(){
    var partyname = $("#partyname").val();
    var  address= $("#address").val();
    var agegroup=$("#agegroup").val();
    console.log(agegroup);
    

    //Update database here

    var value={
        PARTYNAME: partyname,
        ADDRESS:address,
        AGEGROUP:agegroup
    }
        database.push(value);
}
database.on("child_added", function(rowData){
    var row = rowData.val();
    var partyname = row.PARTYNAME;
    var address= row.ADDRESS;
    var agegroup = row.AGEGROUP;
}