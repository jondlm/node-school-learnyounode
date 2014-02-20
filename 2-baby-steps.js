var numbers = process.argv.slice(2,process.argv.length);
var sum = 0;

numbers.forEach(function(num) {
  sum += +num;
});

console.log(sum);
