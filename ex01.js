function palindrome(str){
  var ans = (str == str.split("").reverse().join("")) ? "YES":"NO";
  return ans;
}

function two_greater_numbers(list){
    list.sort();
    let n = list.length - 1;
    return [list[n-1], list[n]];
}

function is_prime(x) {
    if(x == 1) return false;
    for(let i = 2; i < x/2; i++)
        if(x % i == 0) return false;
    return true;
}

function vowels(str){
    let vowels = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    let str1 = str.toLowerCase();
    for(let i = 0; i < str1.length; i++){
        if(str1[i] in vowels) vowels[str1[i]] += 1;
    }
    return vowels;
}
