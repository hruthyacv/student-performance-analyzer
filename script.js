let chart;

function analyze() {
  let name = document.getElementById("name").value;
  let s1 = Number(document.getElementById("s1").value);
  let s2 = Number(document.getElementById("s2").value);
  let s3 = Number(document.getElementById("s3").value);

  if (!name || !s1 || !s2 || !s3) {
    alert("Please fill all fields");
    return;
  }

  let total = s1 + s2 + s3;
  let avg = total / 3;

  let grade;
  let message;

  if (avg >= 90) {
    grade = "A+";
    message = "Outstanding! Keep it up! 🌟";
  } 
  else if (avg >= 75) {
    grade = "A";
    message = "Great job! You're doing really well! 👍";
  } 
  else if (avg >= 60) {
    grade = "B";
    message = "Good effort! Keep improving! 💪";
  } 
  else if (avg >= 50) {
    grade = "C";
    message = "You can do better! Stay consistent! 📘";
  } 
  else {
    grade = "F";
    message = "Don't give up! Work harder and try again! 🔥";
  }

  document.getElementById("rname").innerText = "Name: " + name;
  document.getElementById("rtotal").innerText = "Total Marks: " + total;
  document.getElementById("ravg").innerText = "Average: " + avg.toFixed(2);
  document.getElementById("rgrade").innerText = "Grade: " + grade;
  document.getElementById("rmessage").innerText = message;

  document.getElementById("result").classList.remove("hidden");

  createChart([s1, s2, s3]);
}

function createChart(marks) {
  const ctx = document.getElementById("chart").getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Subject 1", "Subject 2", "Subject 3"],
      datasets: [{
        label: "Marks",
        data: marks,
        backgroundColor: ["#ff6b6b", "#4dabf7", "#51cf66"],
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      animation: { duration: 1000 }
    }
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
