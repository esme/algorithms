// KeepTrucking Coding Challenge

function jobOffers(scores, lowerLimits, upperLimits) {
    let result = [];
    let index = 0;
    const n = lowerLimits.length;
    scores.sort((a, b) => a - b);
    // loop through limit array
    while (index < n) {
        let count = 0;
        scores.forEach(score => {
            // check if score is within range
            if (score >= lowerLimits[index] && score <= upperLimits[index]) {
                count++;
            }
        });
        result.push(count);
        index++;
    }
    return result;
}

console.log(jobOffers([4,8,7], [2,4], [8,4]));