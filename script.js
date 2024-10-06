document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the input values
    let assignment1 = parseFloat(document.getElementById('assignment1').value);
    let assignment2 = parseFloat(document.getElementById('assignment2').value);
    let mid1 = parseFloat(document.getElementById('mid1').value);
    let mid2 = parseFloat(document.getElementById('mid2').value);

    // Calculate if the student has passed
    let resultText = '';
    let passStatus = true;

    // Checking assignment marks
    if (assignment1 < 5) {
        resultText += 'Failed in First Assignment. ';
        passStatus = false;
    } else {
        resultText += 'Passed in First Assignment. ';
    }

    if (assignment2 < 5) {
        resultText += 'Failed in Second Assignment. ';
        passStatus = false;
    } else {
        resultText += 'Passed in Second Assignment. ';
    }

    // Checking mid-term marks
    if (mid1 < 15) {
        resultText += 'Failed in First Mid Exam. ';
        passStatus = false;
    } else {
        resultText += 'Passed in First Mid Exam. ';
    }

    if (mid2 < 15) {
        resultText += 'Failed in Second Mid Exam. ';
        passStatus = false;
    } else {
        resultText += 'Passed in Second Mid Exam. ';
    }

    // Final result message
    if (passStatus) {
        resultText = 'Congratulations! You passed all exams!';
    } else {
        resultText = 'You did not pass in some subjects.';
    }

    // Show the result
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultText;
    resultDiv.style.display = 'block';
});
