function get_achievement(x, y, z) {
    let sum = x + y + z, ans;
    if (sum > 250) {
        ans = 'A';
    } else if (sum >= 200) {
        ans = 'B'
    } else if (sum >= 100) {
        ans = 'C'
    } else {
        ans = 'D'
    }
    return ans;
}

function get_pass_or_failure(x, y, z) {
    if (x >= 60 && y >= 60 && z >= 60) {
        return "Pass";
    }else{
        return "Fail";
    }
    //… Continued
}
console.log(get_pass_or_failure(60, 100, 60));