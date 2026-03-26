
name = input("Enter Student Name: ")

marks = []
total = 0

for i in range(3):
    m = int(input(f"Enter marks for Subject {i+1}: "))
    marks.append(m)
    total += m

average = total / 3

# Grade logic
if average >= 90:
    grade = "A+"
elif average >= 75:
    grade = "A"
elif average >= 60:
    grade = "B"
elif average >= 50:
    grade = "C"
else:
    grade = "F"

print("\n--- RESULT ---")
print("Name:", name)
print("Total:", total)
print("Average:", average)
print("Grade:", grade)
