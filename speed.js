var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;

function myResult() {
    option_from = inputType.value;
    option_to = resultType.value;

    // Km/hr to Km/min
    if (option_from === "kmph" && option_to === "kmpm") {
        result.value = Number(input.value) * 0.0166666667;
    }
    // Km/hr to M/sec
    else if (option_from === "kmph" && option_to === "mps") {
        result.value = Number(input.value) * 0.2777777778;
    }
    // Km/hr to Km/hr
    else if (option_from === "kmph" && option_to === "kmph") {
        result.value = input.value;
    }

    // Km/min To Km/hr
    if (option_from === "kmpm" && option_to === "kmph") {
        result.value = Number(input.value) * 60;
    }
    // Km/min To M/sec
    else if (option_from === "kmpm" && option_to === "mps") {
        result.value = Number(input.value) * 16.666666667;
    }
    // Km/min To Km/min
    else if (option_from === "kmpm" && option_to === "kmpm") {
        result.value = input.value;
    }

    // M/sec To Km/hr
    if (option_from === "mps" && option_to === "kmph") {
        result.value = Number(input.value) * 3.6;
    }
    // M/sec To Km/min
    else if (option_from === "mps" && option_to === "kmpm") {
        result.value = Number(input.value) * 0.06;
    }
    // M/sec To M/sec
    else if (option_from === "mps" && option_to === "mps") {
        result.value = input.value;
    }
}
