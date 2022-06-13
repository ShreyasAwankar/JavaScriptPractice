// AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX's most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

// The two major features of AJAX allow you to do the following:
// 1. Make requests to the server without reloading the page
// 2. Receive and work with data from the server


console.log("Ajax Learning");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");
  // Instaniate an xhr object...
  let xhr = new XMLHttpRequest();

  //Open the Object...
  xhr.open("GET", "harry.txt", true);
  // the third arguement ('true') is for asynchronus request. It means that the 'xhr.open' will not block the code until it gets completed. It will execute another code after it. If  we put there 'false' then it will be considered as a synchronus request and the code after it will have to wait until its completion to get executed.

  // // USE THIS FOR POST REQUEST
  // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
  // xhr.getResponseHeader('Content-type', 'application/json');

  //What to do on progress (optional), we can use this as spinners whendata is being fetched)...
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  // xhr.onreadystatechange = function () {
  //     console.log('Ready state is: ', xhr.readyState)
  // }
  // // Search for XHR ready status code on google

  // What to do when response is ready...
  // .onload means you are at ready state 4 of XHR
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error has occured");
    }
  };

  // send the request
  params = `{"name":"test34sad545","salary":"123","age":"23"}`;
  xhr.send(params);

  console.log("We are done!");
}

// Populating data with xhr
let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", populate);

function populate() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dummyjson.com/products/1", true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>Title: ${obj[key]}  </li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  // send request
  xhr.send();
  console.log("We are done fetching data!");
}
