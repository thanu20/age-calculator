// Load Luxon
const DateTime = luxon.DateTime;

// Initialize jQuery UI Datepicker
$(function () {
  $("#dob").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "1900:2025",
    dateFormat: "mm/dd/yy"
  });
});

// Calculate Age using Luxon
function calculateAge() {
  const dobInput = document.getElementById("dob").value;

  if (!dobInput) {
    alert("Please select your birthdate.");
    return;
  }

  const dob = DateTime.fromFormat(dobInput, "MM/dd/yyyy");
  const now = DateTime.now();

  if (!dob.isValid || dob > now) {
    alert("Please enter a valid date of birth.");
    return;
  }

  const diff = now.diff(dob, ["years", "months", "days"]).toObject();

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);

  document.getElementById("result").innerHTML =
    `<span class="shiny">Wooohooo! 🎉<br>You are ${years} years, ${months} months, and ${days} days old! 🥳</span>`;
}
