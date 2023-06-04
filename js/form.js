function submitForm() {
  const details = ["name", "email", "enquiry"]
    .map(x => document.getElementById(x).value);

  console.log(details);
}
