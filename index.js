// function btnClick() {
//     alert("thanks for submitting");
// }



// XMLHttpRequest
console.log("JS File Executed");

// Step 1
// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// Step 2
// Open connection to destination or config details to Http request obj
request.open('GET', 'https://restcountries.com/v3/all'); // Setting the Operation to be Read Operation

// Step 3
// Send the request to rest countries server
request.send(null);

// Step 3.1
// getting the response and unpacking
request.onload = function () {
  const response = JSON.parse(request.responseText); // parse the string of JSON
  console.log(response);

  response.forEach(({ flags, name: { common } }) => { // destructured flag from each country
    console.log(flags, common);
  });

};

// const request = new XMLHttpRequest();

// request.open('GET', 'https://restcountries.com/v3.1/all');

// request.send(null);

// request.onload = () => {
//   const response = JSON.parse(request.responseText);
//   response.forEach(country => {
//     const countryFlag = document.createElement('img');
//     countryFlag.src = country.flags.png;
//     countryFlag.title = country.name.common;
//     countryFlag.alt = country.name.common;
//     countryFlag.style.margin = '8px';
//     document.body.append(countryFlag);
//   });
// };