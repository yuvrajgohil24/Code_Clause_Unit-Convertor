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

  // Meter to Kilometer
  if (option_from === "meter" && option_to === "kilometer") {
    result.value = Number(input.value) * 0.001;
  }
  // Meter to Centimeter
  else if (option_from === "meter" && option_to === "Centimeter") {
    result.value = Number(input.value) * 100;
  }
  // Meter to Meter
  else if (option_from === "meter" && option_to === "") {
    result.value = input.value;
  }
  // Meter to Milimeter
  else if (option_from === "meter" && option_to === "milimeter") {
    result.value = result.value = Number(input.value) * 1000;
  }
  // Metre to yard
  else if (option_from === "meter" && option_to === "yard") {
    result.value = result.value = Number(input.value) * 1.0936132983;
  }
  // M to mile
  else if (option_from === "meter" && option_to === "mile") {
    result.value = result.value = Number(input.value) * 0.0006213689;
  }
  // Meter to Foot
  else if (option_from === "meter" && option_to === "foot") {
    result.value = result.value = Number(input.value) * 3.280839895;
  }
  // Meter to Inch
  else if (option_from === "meter" && option_to === "inch") {
    result.value = result.value = Number(input.value) * 39.37007874;
  }

  // Km to meter
  if (option_from === "kilometer" && option_to === "meter") {
    result.value = Number(input.value) * 1000;
  }
  // Kilometer to centimeter
  else if (option_from === "kilometer" && option_to === "Centimeter") {
    result.value = Number(input.value) * 100000;
  }
  // Km to Km
  else if (option_from === "kilometer" && option_to === "kilometer") {
    result.value = input.value;
  }
  // KiloMeter to Milimeter
  else if (option_from === "kilometer" && option_to === "milimeter") {
    result.value = result.value = Number(input.value) * 1000000;
  }
  // KiloMeter to yard
  else if (option_from === "kilometer" && option_to === "yard") {
    result.value = result.value = Number(input.value) * 1093.6132983;
  }
  // KiloMeter to mile
  else if (option_from === "kilometer" && option_to === "mile") {
    result.value = result.value = Number(input.value) * 0.6213688756;
  }
  // KiloMeter to Foot
  else if (option_from === "kilometer" && option_to === "foot") {
    result.value = result.value = Number(input.value) * 3280.839895;
  }
  // KiloMeter to Inch
  else if (option_from === "kilometer" && option_to === "inch") {
    result.value = result.value = Number(input.value) * 39370.07874;
  }

  // Centimeter to Kilometer
  if (option_from === "Centimeter" && option_to === "kilometer") {
    result.value = Number(input.value) * 0.00001;
  }
  // Centimeter to Meter
  else if (option_from === "Centimeter" && option_to === "meter") {
    result.value = Number(input.value) * 0.01;
  }
  // Centimeter to Centimeter
  else if (option_from === "Centimeter" && option_to === "Centimeter") {
    result.value = input.value;
  }
  // Centimeter to Milimeter
  else if (option_from === "Centimeter" && option_to === "milimeter") {
    result.value = result.value = Number(input.value) * 10;
  }
  // Centimeter to yard
  else if (option_from === "Centimeter" && option_to === "yard") {
    result.value = result.value = Number(input.value) * 0.010936133;
  }
  // Centimeter to mile
  else if (option_from === "Centimeter" && option_to === "mile") {
    result.value = result.value = Number(input.value) * 0.0000062137;
  }
  // Centimeter to Foot
  else if (option_from === "Centimeter" && option_to === "foot") {
    result.value = result.value = Number(input.value) * 0.032808399;
  }
  // Centimeter to Inch
  else if (option_from === "Centimeter" && option_to === "inch") {
    result.value = result.value = Number(input.value) * 0.3937007874;
  }

  // Milimeter to Kilometer
  if (option_from === "milimeter" && option_to === "kilometer") {
    result.value = Number(input.value) * 0.000001;
  }
  // Milimeter to Meter
  else if (option_from === "milimeter" && option_to === "meter") {
    result.value = Number(input.value) * 0.001;
  }
  // Milimeter to Centimeter
  else if (option_from === "milimeter" && option_to === "Centimeter") {
    result.value = Number(input.value) * 0.1;
  }
  // Milimeter to Milimeter
  else if (option_from === "milimeter" && option_to === "milimeter") {
    result.value = input.value;
  }
  // Milimeter to yard
  else if (option_from === "milimeter" && option_to === "yard") {
    result.value = result.value = Number(input.value) * 0.0010936133;
  }
  // Milimeter to mile
  else if (option_from === "milimeter" && option_to === "mile") {
    result.value = result.value = Number(input.value) * 6.213688756e-7;
  }
  // Milimeter to Foot
  else if (option_from === "milimeter" && option_to === "foot") {
    result.value = result.value = Number(input.value) * 0.0032808399;
  }
  // Milimeter to Inch
  else if (option_from === "milimeter" && option_to === "inch") {
    result.value = result.value = Number(input.value) * 0.0393700787;
  }

  // Yard to Kilometer
  if (option_from === "yard" && option_to === "kilometer") {
    result.value = Number(input.value) * 0.0009144;
  }
  // Yard to Meter
  else if (option_from === "yard" && option_to === "meter") {
    result.value = Number(input.value) * 0.9144;
  }
  // Yard to Centimeter
  else if (option_from === "yard" && option_to === "Centimeter") {
    result.value = Number(input.value) * 91.44;
  }
  // Yard to Milimeter
  else if (option_from === "yard" && option_to === "milimeter") {
    result.value = result.value = Number(input.value) * 914.4;
  }
  // Yard to yard
  else if (option_from === "yard" && option_to === "yard") {
    result.value = input.value;
  }
  // Yard to mile
  else if (option_from === "yard" && option_to === "mile") {
    result.value = result.value = Number(input.value) * 0.0005681797;
  }
  // Yard to Foot
  else if (option_from === "yard" && option_to === "foot") {
    result.value = result.value = Number(input.value) * 3;
  }
  // Yard to Inch
  else if (option_from === "yard" && option_to === "inch") {
    result.value = result.value = Number(input.value) * 36;
  }

  // Mile to Kilometer
  if (option_from === "mile" && option_to === "kilometer") {
    result.value = Number(input.value) * 1.60935;
  }
  // Mile to Meter
  else if (option_from === "mile" && option_to === "meter") {
    result.value = Number(input.value) * 1609.35;
  }
  // Mile to Centimeter
  else if (option_from === "mile" && option_to === "Centimeter") {
    result.value = Number(input.value) * 160935;
  }
  // Mile to Milimeter
  else if (option_from === "mile" && option_to === "milimeter") {
    result.value = result.value = Number(input.value) * 1609350;
  }
  // Mile to yard
  else if (option_from === "mile" && option_to === "yard") {
    result.value = result.value = Number(input.value) * 1760.0065617;
  }
  // Mile to mile
  else if (option_from === "mile" && option_to === "mile") {
    result.value = input.value;
  }
  // Mile to Foot
  else if (option_from === "mile" && option_to === "foot") {
    result.value = result.value = Number(input.value) * 5280.019685;
  }
  // Mile to Inch
  else if (option_from === "mile" && option_to === "inch") {
    result.value = result.value = Number(input.value) * 63360.23622;
  }

  // Foot to Kilometer
  if (option_from === "foot" && option_to === "kilometer") {
    result.value = Number(input.value) * 0.0003048;
  }
  // Foot to Meter
  else if (option_from === "foot" && option_to === "meter") {
    result.value = Number(input.value) * 0.3048;
  }
  // Foot to Centimeter
  else if (option_from === "foot" && option_to === "Centimeter") {
    result.value = result.value = Number(input.value) * 30.48;
  }
  // Foot to Milimeter
  else if (option_from === "foot" && option_to === "milimeter") {
    result.value = result.value = Number(input.value) * 304.8;
  }
  // Foot to yard
  else if (option_from === "foot" && option_to === "yard") {
    result.value = result.value = Number(input.value) * 0.3333333333;
  }
  // Foot to mile
  else if (option_from === "foot" && option_to === "mile") {
    result.value = result.value = Number(input.value) * 0.0001893932;
  }
  // Foot to Foot
  else if (option_from === "foot" && option_to === "foot") {
    result.value = input.value;
  }
  // Foot to Inch
  else if (option_from === "foot" && option_to === "inch") {
    result.value = result.value = Number(input.value) * 12;
  }

  // Inch to Kilometer
  if (option_from === "inch" && option_to === "kilometer") {
    result.value = Number(input.value) * 0.0000254;
  }
  // Inch to Meter
  else if (option_from === "inch" && option_to === "meter") {
    result.value = Number(input.value) * 0.0254;
  }
  // Inch to Centimeter
  else if (option_from === "inch" && option_to === "Centimeter") {
    result.value = result.value = Number(input.value) * 2.54;
  }
  // Inch to Milimeter
  else if (option_from === "inch" && option_to === "milimeter") {
    result.value = result.value = Number(input.value) * 25.4;
  }
  // Inch to yard
  else if (option_from === "inch" && option_to === "yard") {
    result.value = result.value = Number(input.value) * 0.0277777778;
  }
  // Inch to mile
  else if (option_from === "inch" && option_to === "mile") {
    result.value = result.value = Number(input.value) * 0.0000157828;
  }
  // Inch to Foot
  else if (option_from === "inch" && option_to === "foot") {
    result.value = result.value = Number(input.value) * 0.0833333333;
  }
  // Inch to Inch
  else if (option_from === "inch" && option_to === "inch") {
    result.value = input.value;
  }
}
