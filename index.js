// Variables to store date components
let days, months, years;

// Event listener for the click on the calculate button
calculateBtn.addEventListener("click", () => {
  // Extracting date components from the inputDate field
  dateEntry = document.getElementById("inputDate").value.split("-");

  // Logging the date components for verification
  console.log(dateEntry);
  yearsDOB = dateEntry[0];
  let monthsDOB = dateEntry[1];
  daysDOB = dateEntry[2];
  console.log(daysDOB, monthsDOB, yearsDOB);

  // Getting the current date
  let date = new Date();

  // Calculating years difference between current year and birth year
  let years = date.getFullYear() - yearsDOB;

  // Calculating month difference between current month and birth month
  let month = date.getMonth() + 1 - monthsDOB;

  // Calculating day difference between current day and birth day
  let days = date.getDate() - daysDOB;

  // Displaying the calculated years in the HTML element with ID "year"
  document.getElementById("year").innerHTML = years;

  // Handling scenarios where birth month is ahead of current month
  if (monthsDOB > date.getMonth() + 1) {
    document.getElementById("month").innerHTML = 12 + month;
    document.getElementById("year").innerHTML = years - 1;
  } else {
    document.getElementById("month").innerHTML = month;
  }

  // Handling scenarios where birth day is ahead of current day
  if (daysDOB > date.getDate()) {
    document.getElementById("month").innerHTML = month - 1;
    document.getElementById("day").innerHTML = days + 31;

    // Handling negative month value
    if (month < 0) {
      document.getElementById("month").innerHTML = 11;
      document.getElementById("year").innerHTML = years - 1;
    }
  } else {
    document.getElementById("day").innerHTML = days;
  }
});
