var form = document.querySelector("#form");
var flag = 1;
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.querySelector("#card-name").value;
  console.log(name);
  var number = document.querySelector("#card-number").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var cvv = document.querySelector("#cvc").value;
  var name_error = document.querySelector(".error-name");
  var number_error = document.querySelector(".error-number");
  var date_error = document.querySelector(".date-error");
  var cv_error = document.querySelector(".cvc-error");
  /* for empty spaces*/
  if (name === "") {
    name_error.innerHTML = "Enter Name";
    document.querySelector("#card-name").style.borderColor = "red";
    flag=0;
  }
  if (number === "") {
    number_error.innerHTML = "Enter number";
    document.querySelector("#card-number").style.borderColor = "red";
    flag=0;
  }
  if (month === "" || year === "") {
    date_error.innerHTML = "Cant'be blank";
    document.querySelector("#year").style.borderColor = "red";
    document.querySelector("#month").style.borderColor = "red";
    flag=0;
  }
  if (cvv === "") {
    cv_error.innerHTML = "Cant'be blank";
    document.getElementById("cvc").style.borderColor = "red";
    flag=0;
  }
  /* for checking card number*/
  var number_length = number.length;
  console.log(number_length);
  if (number_length < 16 || number_length > 16) {
    number_error.innerHTML = "Enter valid number";
    flag=0;
  }
  for (var i = 0; i < number_length; i++) {
    if (number[i] < 0 || number[i] > 9) {
      number_error.innerHTML = "Wrong format,numbers only";
      flag=0;
    }
  }
  /*for checking date and month */
  var month_len = month.length;
  var year_len = year.length;
  if (month_len > 2 || month_len < 2) {
    date_error.innerHTML = "Enter valid month";
    flag=0;
  }
  if (month[0] > 1 || month[1] > 9) {
    date_error.innerHTML = "Enter valid month";
    flag=0;
  }
  if (year_len > 2 || year_len < 2) {
    date_error.innerHTML = "Enter valid year";
    flag=0;
  }
  /*for checking cvv number */
  var cvv_len = cvv.length;
  if (cvv_len > 3 || cvv_len < 3) {
    cv_error.innerHTML = "Enter valid cvc Number";
    flag=0;
  }
  //changing number
  var card_number_card = document.querySelector(".card-number");
  var num1 = number.slice(0, 4);
  var num2 = number.slice(4, 8);
  var num3 = number.slice(8, 12);
  var num4 = number.slice(12, 16);
  var finalNum = num1 + " " + num2 + " " + num3 + " " + num4;
  console.log(num1);
  console.log("the final num is", finalNum);
  card_number_card.innerHTML = finalNum;

  //changing name
  var card_name_card = document.querySelector(".card-name");
  var finalName = name[0].toUpperCase() + name.slice(1);
  card_name_card.innerHTML = finalName;

  //changing dates
  var date_card = document.querySelector(".card-expiry");
  var month_card = month;
  var year_card = year;
  date_card.innerHTML = month_card + "/" + year_card;

  //changing cvv
  var cvv_card = document.querySelector(".cvv");
  console.log(cvv_card);
  cvv_card.innerHTML = cvv;
  

  //adding thank you
  if(flag===1){
  var element = document.querySelector(".main-container");
  element.classList.add("main-hidden");
  console.log("hidden");

  var rem_element = document.querySelector(".thankyou");
  rem_element.classList.remove("thankyou-hidden");
  console.log("hidden-again");
  }
  
});
  

