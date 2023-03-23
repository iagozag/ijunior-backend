function palindrome(str){
  var ans = (str == str.split("").reverse().join("")) ? "YES":"NO";
  return ans;
}

function two_greater_numbers(list){
    list.sort();
    let n = list.length;
    return [list[n-1], list[n]];
}
