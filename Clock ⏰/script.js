// Get all time elements
const hourBox = document.getElementById("hour");
const minBox = document.getElementById("minute");
const secBox = document.getElementById("second");
const ampmBox = document.getElementById("ampm");
// Get all date elements
const dayBox = document.getElementById("day");
const monthBox = document.getElementById("month");
const yearBox = document.getElementById("year");



// This function will run every second with out colling
(function () {
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        // Convert 24-hour time to 12-hour time
        if (hour > 12) {
          hour = hour - 12;
          ampm = "PM";
        }
        else {
          ampm = "AM";
        }

        hourBox.innerText = hour;
        minBox.innerText = minute;
        secBox.innerText = second;
        ampmBox.innerText = ampm;


        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        dayBox.innerText = day;
        monthBox.innerText = month;
        yearBox.innerText = year;
    }, 1000);
  })();

  

