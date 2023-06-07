console.log("1st API starts running...");
process.send("Hello 1st API");
let i = 1;
while (i <= 10000000000) {
  i++;
}
console.log("1st API completed.....");
