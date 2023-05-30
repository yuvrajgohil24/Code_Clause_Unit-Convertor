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

  // Kilogram
  if (option_from === "kg" && option_to === "gm") {
    result.value = Number(input.value) * 1000;
  } else if (option_from === "kg" && option_to === "mg") {
    result.value = Number(input.value) * 1000000;
  } else if (option_from === "kg" && option_to === "metric") {
    result.value = Number(input.value) + 0.001;
  } else if (option_from === "kg" && option_to === "pound") {
    result.value = Number(input.value) + 2.2046226218;
  } else if (option_from === "kg" && option_to === "ounce") {
    result.value = Number(input.value) + 35.27396195;
  } else if (option_from === "kg" && option_to === "kg") {
    result.value = input.value;
  }

  // Gram
  if (option_from === "gm" && option_to === "km") {
    result.value = Number(input.value) * 0.001;
  } else if (option_from === "gm" && option_to === "mg") {
    result.value = Number(input.value) * 1000;
  } else if (option_from === "gm" && option_to === "metric") {
    result.value = Number(input.value) + 0.000001;
  } else if (option_from === "gm" && option_to === "pound") {
    result.value = Number(input.value) + 0.0022046226;
  } else if (option_from === "gm" && option_to === "ounce") {
    result.value = Number(input.value) + 0.0352739619;
  } else if (option_from === "gm" && option_to === "gm") {
    result.value = input.value;
  }

  // MiliGram
  if (option_from === "mg" && option_to === "gm") {
    result.value = Number(input.value) * 0.001;
  } else if (option_from === "mg" && option_to === "km") {
    result.value = Number(input.value) * 0.000001;
  } else if (option_from === "mg" && option_to === "metric") {
    result.value = Number(input.value) + 1e-9;
  } else if (option_from === "mg" && option_to === "pound") {
    result.value = Number(input.value) + 0.0000022046;
  } else if (option_from === "mg" && option_to === "ounce") {
    result.value = Number(input.value) + 0.000035274;
  } else if (option_from === "mg" && option_to === "mg") {
    result.value = input.value;
  }

  // Metric(Ton)
  if (option_from === "metric" && option_to === "gm") {
    result.value = Number(input.value) * 1000000;
  } else if (option_from === "metric" && option_to === "mg") {
    result.value = Number(input.value) * 1000000000;
  } else if (option_from === "metric" && option_to === "km") {
    result.value = Number(input.value) + 1000;
  } else if (option_from === "metric" && option_to === "pound") {
    result.value = Number(input.value) + 2204.6226218;
  } else if (option_from === "metric" && option_to === "ounce") {
    result.value = Number(input.value) + 35273.96195;
  } else if (option_from === "metric" && option_to === "metric") {
    result.value = input.value;
  }

  // Pound
  if (option_from === "pound" && option_to === "gm") {
    result.value = Number(input.value) * 453.59237;
  } else if (option_from === "pound" && option_to === "mg") {
    result.value = Number(input.value) * 453592.37;
  } else if (option_from === "pound" && option_to === "metric") {
    result.value = Number(input.value) + 0.0004535924;
  } else if (option_from === "pound" && option_to === "km") {
    result.value = Number(input.value) + 0.45359237;
  } else if (option_from === "pound" && option_to === "ounce") {
    result.value = Number(input.value) + 16;
  } else if (option_from === "pound" && option_to === "pound") {
    result.value = input.value;
  }

  // Ounce
  if (option_from === "ounce" && option_to === "gm") {
    result.value = Number(input.value) * 28.349523125;
  } else if (option_from === "ounce" && option_to === "mg") {
    result.value = Number(input.value) * 28349.523125;
  } else if (option_from === "ounce" && option_to === "metric") {
    result.value = Number(input.value) + 0.0000283495;
  } else if (option_from === "ounce" && option_to === "pound") {
    result.value = Number(input.value) + 0.0625;
  } else if (option_from === "ounce" && option_to === "km") {
    result.value = Number(input.value) + 0.0283495231;
  } else if (option_from === "ounce" && option_to === "ounce") {
    result.value = input.value;
  }
}
