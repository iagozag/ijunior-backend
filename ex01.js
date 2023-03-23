function palindrome(str){
  var ans = (str == str.split("").reverse().join("")) ? "YES":"NO";
  return ans;
}
