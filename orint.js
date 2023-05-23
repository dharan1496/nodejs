function reverse(str) {
console.log(str)
  if (str === "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("hello"));

