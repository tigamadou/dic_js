function get_achievement(sum) {

    if (sum > 250) {
        return 'A';
    } else if (sum >= 200) {
        return 'B'
    } else if (sum >= 100) {
        return 'C'
    } else {
        return 'D'
    }

}

function get_pass_or_failure(x, y, z) {
    if (x >= 60, y >= 60, z >= 60) {
        return "Pass";
    } else {
        return "Fail";
    }

}

function judgement(x, y, z) {
    let sum = x + y + z;
    let achievement = get_achievement(sum);
    let pass_or_failure = get_pass_or_failure(x, y, z);
    return `Your grade is ${achievement}. ${pass_or_failure}!`;
}

console.log(judgement(60, 100, 59));