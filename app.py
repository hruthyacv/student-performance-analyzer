from flask import Flask, render_template, request, jsonify
import csv
import os

app = Flask(__name__)

FILE = "results.csv"

# Create CSV if not exists
if not os.path.exists(FILE):
    with open(FILE, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["Name", "S1", "S2", "S3", "Total", "Average", "Grade"])

def calculate(s1, s2, s3):
    total = s1 + s2 + s3
    avg = total / 3

    if avg >= 90:
        grade = "A+"
    elif avg >= 75:
        grade = "A"
    elif avg >= 60:
        grade = "B"
    elif avg >= 50:
        grade = "C"
    else:
        grade = "F"

    return total, avg, grade

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json

    name = data["name"]
    s1 = int(data["s1"])
    s2 = int(data["s2"])
    s3 = int(data["s3"])

    total, avg, grade = calculate(s1, s2, s3)

    # Save data
    with open(FILE, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([name, s1, s2, s3, total, round(avg,2), grade])

    return jsonify({
        "name": name,
        "total": total,
        "avg": round(avg, 2),
        "grade": grade,
        "marks": [s1, s2, s3]
    })

if __name__ == "__main__":
    app.run(debug=True)
