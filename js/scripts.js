// User Interface Logic



window.onload = function() {
  event.preventDefault();
  function hideResultsAndError() {
  document.getElementById("under18").setAttribute("class", "hidden");
  document.getElementById("18female").setAttribute("class", "hidden");
  document.getElementById("35female").setAttribute("class", "hidden");
  document.getElementById("18male").setAttribute("class", "hidden");
  document.getElementById("35male").setAttribute("class", "hidden");
  document.getElementById("error-message").setAttribute("class", "hidden")
}

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
   
    const age = parseInt(document.querySelector("input#age").value);
    const gender = document.querySelector("input#gender").value.toString();
    console.log(age);
    console.log(gender);

      if (age >= 35 && gender === "male") {
        document.getElementById("35male").removeAttribute("class");
        
      }else if (age >= 35 && gender === "female") {
        document.getElementById("35female").removeAttribute("class");
        
      } else if (age >= 18 && age < 35 && gender === "male") {
        
        document.getElementById("18male").removeAttribute("class");
      } else if (age >= 18 && age < 35 && gender === "female") {
        document.getElementById("18female").removeAttribute("class");
      } else if (age < 18) {
        document.getElementById("under18").removeAttribute("class");
      } else if (age === "" || gender === "") {
        document.getElementById("error-message").removeAttribute("class");
    }
  }
};
;