function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (!dob) {
    alert("Please enter your date of birth");
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();

  let ageYears = today.getFullYear() - dobDate.getFullYear();
  let ageMonths = today.getMonth() - dobDate.getMonth();
  let ageDays = today.getDate() - dobDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("result").innerHTML =
    `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
