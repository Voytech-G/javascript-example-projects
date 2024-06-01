document
  .getElementById("validationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    const emailRegexp = /^[a-zA-Z0=9_.-]+@[a-zA-Z0=9.-]+\.[a-zA-z]{2,6}$/.test(
      email
    );
    if (!emailRegexp) {
      alert("Invalid email format!");
      return;
    }
    const phoneRegexp = /^(\d{3}\s?){3}$/.test(phone);
    if (!phoneRegexp) {
      alert("Invalid phone format!");
      return;
    }
    const passRegexp = /^(?=.*\d)(?=.*[A-Z]).{8,20}$/.test(password);
    if (!passRegexp) {
      alert("Invalid password format!");
      return;
    }
    alert("Form has been successfully submitted!");
    document.getElementById("validationForm").submit();
  });
