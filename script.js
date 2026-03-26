let chart;

async function analyze() {
  const data = {
    name: document.getElementById("name").value,
    s1: document.getElementById("s1").value,
    s2: document.getElementById("s2").value,
    s3: document.getElementById("s3").value
  };

  if (!data.name || !data.s1 || !data.s2 || !data.s3) {
    alert("Fill all fields");
    return;
  }

  const res = await fetch("/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  document.getElementById("rname").innerText = "Name: " + result.name;
  document.getElementById("rtotal").innerText = "Total: " + result.total;
  document.getElementById("ravg").innerText = "Average: " + result.avg;
  document.getElementById("rgrade").innerText = "Grade: " + result.grade;

  document.getElementById("result").classList.remove("hidden");

  createChart(result.marks);
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
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(75, 192, 192, 0.7)"
        ],
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1200
      },
      plugins: {
        legend: {
          labels: {
            color: "white"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "white"
          }
        },
        x: {
          ticks: {
            color: "white"
          }
        }
      }
    }
  });
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}
