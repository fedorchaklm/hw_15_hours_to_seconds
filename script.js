let hours = +prompt("Enter the number of hours?", "1");

while (isNaN(hours)) {
  hours = +prompt("Please enter the number of hours correctly?", "1");
}

const seconds = hours * 3600;
alert(`You enter ${hours} hour/hours. In seconds it will be ${seconds}.`);
