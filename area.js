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

  if (option_from === "square_foot" && option_to === "square_inch") {
    result.value = Number(input.value) * 144;
  } else if (option_from === "square_foot" && option_to === "square_meter") {
    result.value = Number(input.value) * 0.09290304;
  } else if (option_from === "square_foot" && option_to === "square_km") {
    result.value = Number(input.value) * 9.290303999e-8;
  } else if (option_from === "square_foot" && option_to === "square_foot") {
    result.value = input.value;
  }

  if (option_from === "square_inch" && option_to === "square_foot") {
    result.value = Number(input.value) * 0.0069444444;
  } else if (option_from === "square_inch" && option_to === "square_meter") {
    result.value = Number(input.value) * 0.00064516;
  } else if (option_from === "square_inch" && option_to === "square_km") {
    result.value = Number(input.value) * 6.4516e-10;
  } else if (option_from === "square_inch" && option_to === "square_inch") {
    result.value = input.value;
  }

  if (option_from === "square_km" && option_to === "square_foot") {
    result.value = Number(input.value) * 10763910.417;
  } else if (option_from === "square_km" && option_to === "square_meter") {
    result.value = Number(input.value) * 1000000;
  } else if (option_from === "square_km" && option_to === "square_km") {
    result.value = input.value;
  } else if (option_from === "square_km" && option_to === "square_inch") {
    result.value = Number(input.value) * 1550003100;
  }

  if (option_from === "square_meter" && option_to === "square_foot") {
    result.value = Number(input.value) * 10.7639104167;
  } else if (option_from === "square_meter" && option_to === "square_inch") {
    result.value = Number(input.value) * 1550.0031000062;
  } else if (option_from === "square_meter" && option_to === "square_km") {
    result.value = Number(input.value) * 0.000001;
  } else if (option_from === "square_meter" && option_to === "square_meter") {
    result.value = input.value;
  }

  //VOLUME

  if (option_from === "cubic_meter" && option_to === "cubic_foot") {
    result.value = Number(input.value) * 35.314666721;
  } else if (option_from === "cubic_meter" && option_to === "cubic_inch") {
    result.value = Number(input.value) * 61023.744095;
  } else if (option_from === "cubic_meter" && option_to === "cubic_km") {
    result.value = Number(input.value) * 1e-9;
  } else if (option_from === "cubic_meter" && option_to === "cubic_meter") {
    result.value = input.value;
  }

  if (option_from === "cubic_km" && option_to === "cubic_foot") {
    result.value = Number(input.value) * 35314666721;
  } else if (option_from === "cubic_km" && option_to === "cubic_inch") {
    result.value = Number(input.value) * 61023744094732;
  } else if (option_from === "cubic_km" && option_to === "cubic_km") {
    result.value = input.value;
  } else if (option_from === "cubic_km" && option_to === "cubic_meter") {
    result.value = Number(input.value) * 1000000000;
  }

  if (option_from === "cubic_foot" && option_to === "cubic_foot") {
    result.value = input.value;
  } else if (option_from === "cubic_foot" && option_to === "cubic_inch") {
    result.value = Number(input.value) * 1728;
  } else if (option_from === "cubic_foot" && option_to === "cubic_km") {
    result.value = Number(input.value) * 2.831684659e-11;
  } else if (option_from === "cubic_foot" && option_to === "cubic_meter") {
    result.value = Number(input.value) * 0.0283168466;
  }

  if (option_from === "cubic_inch" && option_to === "cubic_foot") {
    result.value = Number(input.value) * 0.0005787037;
  } else if (option_from === "cubic_inch" && option_to === "cubic_inch") {
    result.value = input.value;
  } else if (option_from === "cubic_inch" && option_to === "cubic_km") {
    result.value = Number(input.value) * 1.6387064e-14;
  } else if (option_from === "cubic_inch" && option_to === "cubic_meter") {
    result.value = Number(input.value) * 0.0000163871;
  }
}
