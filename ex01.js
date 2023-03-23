function palindrome(str){
  var ans = (str == str.split("").reverse().join("")) ? "YES":"NO";
  return ans;
}

function two_greater_numbers(list){
    list.sort();
    let n = list.length;
    return [list[n-1], list[n]];
}

function is_prime(x) {
    for(let i = 2; i < x/2; i++){
        if(x % i == 0) return false;
    }
    return true;
}
