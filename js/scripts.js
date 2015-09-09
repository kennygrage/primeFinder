function primeFinder(num) {
  var prime_numbers = [];
  var divisor_index = 0;

  for(var i = 2; i <= num; i++){
    prime_numbers.push(i);
  }
  for (var x = 0; x <= prime_numbers.length; x++){

    for (var n = 0; n <= prime_numbers.length; n++){
      if (prime_numbers[n] === prime_numbers[x]) {
          continue;
      }
      if (prime_numbers[n] % prime_numbers[x] === 0) {
        prime_numbers.splice(n, 1);  //remove 1 item at the nth position
      }
    }
  }
  return prime_numbers;
}

$(document).ready(function() {

  $("form#primeFinder").submit(function(event) {
    var num = parseInt($("input#num").val());
    var prime_numbers = primeFinder(num);
    var numbers = prime_numbers.toString();

    $(".prime_numbers").empty();
    $(".prime_numbers").text(numbers);

    $(".prime_finder").show();
    event.preventDefault();
  });
});
