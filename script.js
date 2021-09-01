// XML HTTP REQUEST (VIA APT)
// STEP 01: create a XHR object
var request = new XMLHttpRequest();

// STEP 02: initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining execution of your
request.open('GET','https://restcountries.eu/rest/v2/all',true);

// STEP 03:sending a connection
// creating bridge btween server and client
request.send();

// STEP 04: once the data has been recevied scuccessfully we need to extract 
request.onload = function(){
    var data = JSON.parse(request.response);
    console.log(data);
    for(var i in data){
        console.log(data[i].name+" "+data[i].flag+" "+data[i].capital+" "+data[i].region+" "+data[i].subregion+" "+data[i].population);
        
    }
    
}