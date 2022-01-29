console.log("Welcome to myProject: Form Validation using Regular Expressions");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);
name.addEventListener("blur", () => {
  console.log("Name is blurred");
  // Validate name here
  let regex = /^[a-zA-Z]([a-zA-Z0-9]){2,10}$/; // ^ means must start with and $ means must stop with
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your name is valid");
    name.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log("your name is not valid");
    name.classList.add("is-invalid");
    validUser = false;
  }
});

email.addEventListener("blur", () => {
  console.log("email is blurred");
  // Validate email here
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your email is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("your email is not valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  // Validate phone here
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your phone is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("your phone is not valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

let submit = document.getElementById('submit');
submit.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("You clicked on submit");
  console.log(validUser, validEmail, validPhone);

  // Submit your form here
  if (validUser && validEmail && validPhone) {
    let failure = document.getElementById('failure');

    console.log("User, Email and Phone are valid. Submitting the form");
    let success = document.getElementById("success");
    success.classList.add("show");
    // failure.classList.remove("show");
    // $('#failure').alert('close');
    $('#failure').hide();
    $('#success').show();
  } else {
    console.log(
      "One of User, Email or Phone are not valid. Hence not submitting the form. Please correct the errors and try again"
    );
    let failure = document.getElementById('failure');
    failure.classList.add('show');
    // success.classList.remove('show');
    // $('#success').alert('close');
    $('#success').hide();
    $('#failure').show();
  }
});
