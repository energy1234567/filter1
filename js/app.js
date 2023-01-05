const some = function(number) {
    if (number <= 0) {
    return 1;
    } else {
    return (number * some(number - 1));
    }
   };
   console.log(some(5));




