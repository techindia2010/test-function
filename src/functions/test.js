const pmslist = [
  { id: 0, pipeclass: "1CC4", piperating: "150#", pipmemoc: "CARBON STEEL" },
  { id: 1, pipeclass: "1CG2", piperating: "150#", pipmemoc: "CARBON STEEL (GALV.)" },
  { id: 2, pipeclass: "1CS2", piperating: "150#", pipmemoc: "SS 304/304L DUAL GRADE" },
  { id: 3, pipeclass: "1CS4", piperating: "150#", pipmemoc: "SS 304/304L DUAL GRADE" },
  { id: 4, pipeclass: "1DC4", piperating: "300#", pipmemoc: "CARBON STEEL" },
  { id: 5, pipeclass: "1DL4", piperating: "300#", pipmemoc: "LT CARBON STEEL" },
  { id: 6, pipeclass: "1FL4", piperating: "600#", pipmemoc: "LT CARBON STEEL" },
  { id: 7, pipeclass: "1IS0", piperating: "Tube Class", pipmemoc: "SS A269 TP316" },
  { id: 8, pipeclass: "2DC4", piperating: "300#", pipmemoc: "CARBON STEEL" },
  { id: 9, pipeclass: "2FP4", piperating: "600#", pipmemoc: "1-1/4 CR - 1/2 MO" },
  { id: 10, pipeclass: "3CC4", piperating: "150#", pipmemoc: "CARBON STEEL" },
  { id: 11, pipeclass: "3CS4", piperating: "150#", pipmemoc: "SS 316/316L DUAL GRADE" },
  { id: 12, pipeclass: "4CC2", piperating: "150#", pipmemoc: "CARBON STEEL" },
  { id: 13, pipeclass: "5CS9", piperating: "150#", pipmemoc: "SS 304/304L DUAL GRADE" },
  { id: 14, pipeclass: "5FS4", piperating: "600#", pipmemoc: "SS 304/304L DUAL GRADE" },
  { id: 15, pipeclass: "6CS4", piperating: "150#", pipmemoc: "SS 304/304L DUAL GRADE" },
  { id: 16, pipeclass: "7CS4", piperating: "150#", pipmemoc: "SS 316/316L DUAL GRADE" },
  { id: 17, pipeclass: "7DS4", piperating: "300#", pipmemoc: "SS 316/316L DUAL GRADE" },
  { id: 18, pipeclass: "8CC2", piperating: "150#", pipmemoc: "CARBON STEEL W&C" },
  { id: 19, pipeclass: "8CS4", piperating: "150#", pipmemoc: "SS 316/316L DUAL GRADE" },
  { id: 20, pipeclass: "5DS4", piperating: "300#", pipmemoc: "SS 304/304L DUAL GRADE" },
  { id: 21, pipeclass: "1FC4", piperating: "600#", pipmemoc: "CARBON STEEL" }
];

const asmetables = [
  {
    id: 0,
    moc: "CS",
    TempInC: -28.8888888888889,
    150: 19.650525,
    300: 51.022775,
    600: 102.045775,
    900: 153.068775,
    1500: 255.459525,
    2500: 425.421275
  },
  {
    id: 1,
    moc: "CS",
    TempInC: 37.7777777777778,
    150: 19.650525,
    300: 51.022775,
    600: 102.045775,
    900: 153.068775,
    1500: 255.459525,
    2500: 425.421275
  },
  {
    id: 2,
    moc: "CS",
    TempInC: 93.3333333333333,
    150: 17.926775,
    300: 46.541025,
    600: 93.082275,
    900: 139.623525,
    1500: 232.706025,
    2500: 387.843525
  },
  {
    id: 3,
    moc: "CS",
    TempInC: 148.888888888889,
    150: 15.858275,
    300: 45.162025,
    600: 90.669025,
    900: 135.831275,
    1500: 226.155775,
    2500: 377.156275
  },
  {
    id: 4,
    moc: "CS",
    TempInC: 204.444444444444,
    150: 13.789775,
    300: 43.783025,
    600: 87.566275,
    900: 131.004775,
    1500: 218.571275,
    2500: 364.055775
  },
  {
    id: 5,
    moc: "CS",
    TempInC: 260,
    150: 11.721275,
    300: 41.369775,
    600: 82.739775,
    900: 123.765025,
    1500: 206.505025,
    2500: 344.060275
  },
  {
    id: 6,
    moc: "CS",
    TempInC: 315.555555555556,
    150: 9.652775,
    300: 37.922275,
    600: 75.500025,
    900: 113.077775,
    1500: 188.578025,
    2500: 314.411775
  },
  {
    id: 7,
    moc: "CS",
    TempInC: 343.333333333333,
    150: 8.618525,
    300: 36.888025,
    600: 74.121025,
    900: 111.009275,
    1500: 185.130525,
    2500: 308.551025
  },
  {
    id: 8,
    moc: "CS",
    TempInC: 371.111111111111,
    150: 7.584275,
    300: 36.888025,
    600: 73.431525,
    900: 110.319775,
    1500: 183.751525,
    2500: 306.137775
  },
  {
    id: 9,
    moc: "CS",
    TempInC: 398.888888888889,
    150: 6.550025,
    300: 34.819525,
    600: 69.639275,
    900: 104.114275,
    1500: 173.753775,
    2500: 289.589775
  },
  {
    id: 10,
    moc: "CS",
    TempInC: 426.666666666667,
    150: 5.515775,
    300: 28.269275,
    600: 56.883525,
    900: 85.153025,
    1500: 142.036775,
    2500: 236.498275
  },
  {
    id: 11,
    moc: "CS",
    TempInC: 454.444444444444,
    150: 4.481525,
    300: 18.616275,
    600: 36.888025,
    900: 55.504525,
    1500: 92.392775,
    2500: 153.758275
  },
  {
    id: 12,
    moc: "CS",
    TempInC: 482.222222222222,
    150: 3.447275,
    300: 11.721275,
    600: 23.787525,
    900: 35.509025,
    1500: 59.296775,
    2500: 98.598275
  },
  {
    id: 13,
    moc: "CS",
    TempInC: 510,
    150: 2.413025,
    300: 7.239525,
    600: 14.134525,
    900: 21.374275,
    1500: 35.509025,
    2500: 59.296775
  },
  {
    id: 14,
    moc: "CS",
    TempInC: 537.777777777778,
    150: 1.378775,
    300: 3.447275,
    600: 7.239525,
    900: 10.687025,
    1500: 17.926775,
    2500: 29.648275
  },
  {
    id: 15,
    moc: "SS304",
    TempInC: -28.8888888888889,
    150: 18.961025,
    300: 49.643775,
    600: 99.287775,
    900: 148.931775,
    1500: 248.219775,
    2500: 413.699775
  },
  {
    id: 16,
    moc: "SS304",
    TempInC: 37.7777777777778,
    150: 18.961025,
    300: 49.643775,
    600: 99.287775,
    900: 148.931775,
    1500: 248.219775,
    2500: 413.699775
  },
  {
    id: 17,
    moc: "SS304",
    TempInC: 93.3333333333333,
    150: 15.858275,
    300: 41.369775,
    600: 82.739775,
    900: 124.109775,
    1500: 206.849775,
    2500: 344.749775
  },
  {
    id: 18,
    moc: "SS304",
    TempInC: 148.888888888889,
    150: 14.134525,
    300: 37.232775,
    600: 74.465775,
    900: 111.698775,
    1500: 186.164775,
    2500: 310.274775
  },
  {
    id: 19,
    moc: "SS304",
    TempInC: 204.444444444444,
    150: 13.100275,
    300: 34.130025,
    600: 68.605025,
    900: 102.735275,
    1500: 171.340525,
    2500: 285.452775
  },
  {
    id: 20,
    moc: "SS304",
    TempInC: 260,
    150: 11.721275,
    300: 32.061525,
    600: 64.123275,
    900: 96.185025,
    1500: 160.653275,
    2500: 267.525775
  },
  {
    id: 21,
    moc: "SS304",
    TempInC: 315.555555555556,
    150: 9.652775,
    300: 29.993025,
    600: 60.331025,
    900: 90.324275,
    1500: 150.655525,
    2500: 250.977775
  },
  {
    id: 22,
    moc: "SS304",
    TempInC: 343.333333333333,
    150: 8.618525,
    300: 29.648275,
    600: 59.296775,
    900: 88.945275,
    1500: 148.242275,
    2500: 246.840775
  },
  {
    id: 23,
    moc: "SS304",
    TempInC: 371.111111111111,
    150: 7.584275,
    300: 29.303525,
    600: 58.607275,
    900: 87.911025,
    1500: 146.518525,
    2500: 244.082775
  },
  {
    id: 24,
    moc: "SS304",
    TempInC: 398.888888888889,
    150: 6.550025,
    300: 28.614025,
    600: 57.228275,
    900: 85.842525,
    1500: 143.071025,
    2500: 238.566775
  },
  {
    id: 25,
    moc: "SS304",
    TempInC: 426.666666666667,
    150: 5.515775,
    300: 27.924525,
    600: 55.504525,
    900: 83.429275,
    1500: 138.934025,
    2500: 231.671775
  },
  {
    id: 26,
    moc: "SS304",
    TempInC: 454.444444444444,
    150: 4.481525,
    300: 27.235025,
    600: 54.470275,
    900: 82.050275,
    1500: 136.520775,
    2500: 227.534775
  },
  {
    id: 27,
    moc: "SS304",
    TempInC: 482.222222222222,
    150: 3.447275,
    300: 26.890275,
    600: 53.780775,
    900: 80.326525,
    1500: 134.107525,
    2500: 223.397775
  },
  {
    id: 28,
    moc: "SS304",
    TempInC: 510,
    150: 2.413025,
    300: 26.200775,
    600: 52.746525,
    900: 78.947525,
    1500: 131.694275,
    2500: 219.260775
  },
  {
    id: 29,
    moc: "SS304",
    TempInC: 537.777777777778,
    150: 1.378775,
    300: 22.063775,
    600: 44.127775,
    900: 66.536525,
    1500: 110.664525,
    2500: 184.441025
  },
  {
    id: 30,
    moc: "SS304",
    TempInC: 565.555555555556,
    150: 0,
    300: 21.374275,
    600: 42.404025,
    900: 63.778525,
    1500: 106.527525,
    2500: 177.201275
  },
  {
    id: 31,
    moc: "SS304",
    TempInC: 593.333333333333,
    150: 0,
    300: 17.582025,
    600: 35.509025,
    900: 53.091275,
    1500: 88.600525,
    2500: 147.897525
  },
  {
    id: 32,
    moc: "SS304",
    TempInC: 621.111111111111,
    150: 0,
    300: 13.789775,
    600: 27.579775,
    900: 41.025025,
    1500: 68.605025,
    2500: 114.112025
  },
  {
    id: 33,
    moc: "SS304",
    TempInC: 648.888888888889,
    150: 0,
    300: 10.687025,
    600: 21.374275,
    900: 32.061525,
    1500: 53.091275,
    2500: 88.600525
  },
  {
    id: 34,
    moc: "SS304",
    TempInC: 676.666666666667,
    150: 0,
    300: 7.929025,
    600: 15.513525,
    900: 23.442775,
    1500: 38.956525,
    2500: 65.157525
  },
  {
    id: 35,
    moc: "SS304",
    TempInC: 704.444444444444,
    150: 0,
    300: 5.860525,
    600: 11.721275,
    900: 17.582025,
    1500: 29.648275,
    2500: 49.299025
  },
  {
    id: 36,
    moc: "SS304",
    TempInC: 732.222222222222,
    150: 0,
    300: 4.136775,
    600: 8.618525,
    900: 12.755525,
    1500: 21.374275,
    2500: 35.509025
  },
  {
    id: 37,
    moc: "SS304",
    TempInC: 760,
    150: 0,
    300: 3.447275,
    600: 6.205275,
    900: 9.997525,
    1500: 16.547775,
    2500: 27.579775
  },
  {
    id: 38,
    moc: "SS304",
    TempInC: 787.777777777778,
    150: 0,
    300: 2.413025,
    600: 4.826275,
    900: 7.239525,
    1500: 11.721275,
    2500: 19.650525
  },
  {
    id: 39,
    moc: "SS304",
    TempInC: 815.555555555556,
    150: 0,
    300: 1.723525,
    600: 3.792025,
    900: 5.515775,
    1500: 9.308025,
    2500: 15.858275
  }
];

/**
 * Calculate ASME Rating based on Material, Pressure and Temperature. MOC must be in short code like CS or SS316L.
 * @customfunction
 * @param {string} moc Pipe class code.
 * @param {number} pressure Pressure in Bar-g.
 * @param {number} temperature temperature in °C.
 * @returns {string} Rating as per ASME.
 */
function ASMEPT(moc, pressure, temperature) {
  const matGroupe = moc.replace(/\s/g, "");
  console.log(matGroupe);
  var tempinASME = asmetables.filter(e => e.TempInC <= temperature && e.moc.includes(matGroupe));
  const iton32 = tempinASME[tempinASME.length - 1];
  console.log(iton32);
  const a32 = tempinASME[tempinASME.length - 1].TempInC;
  console.log(a32);
  var btoh32 = {};

  if (temperature < 2590 / 9) {
    var tempinASME = asmetables.filter(e => e.TempInC <= temperature + 500 / 9 && e.moc.includes(matGroupe));
    var btoh32 = tempinASME[tempinASME.length - 1];
  } else {
    var tempinASME = asmetables.filter(e => e.TempInC <= temperature + 250 / 9 && e.moc.includes(matGroupe));
    var btoh32 = tempinASME[tempinASME.length - 1];
  }
  console.log(btoh32);
  console.log(
    ((btoh32.R150 - iton32.R150) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R150
  );
  console.log(
    ((btoh32.R300 - iton32.R300) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R300
  );
  console.log(
    ((btoh32.R600 - iton32.R600) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R600
  );
  console.log(
    ((btoh32.R900 - iton32.R900) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R900
  );
  console.log(
    ((btoh32.R1500 - iton32.R1500) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R1500
  );
  console.log(
    ((btoh32.R2500 - iton32.R2500) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R2500
  );
  if (
    pressure <
    ((btoh32.R150 - iton32.R150) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R150
  ) {
    return "150#";
  } else if (
    pressure <
    ((btoh32.R300 - iton32.R300) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R300
  ) {
    console.log("300#");
    return "300#";
  } else if (
    pressure <
    ((btoh32.R600 - iton32.R600) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R600
  ) {
    console.log("600#");
    return "600#";
  } else if (
    pressure <
    ((btoh32.R900 - iton32.R900) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R900
  ) {
    console.log("900#");
    return "900#";
  } else if (
    pressure <
    ((btoh32.R1500 - iton32.R1500) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R1500
  ) {
    console.log("1500#");
    return "1500#";
  } else if (
    pressure <
    ((btoh32.R2500 - iton32.R2500) / (btoh32.TempInC - iton32.TempInC)) * (temperature - iton32.TempInC) + iton32.R2500
  ) {
    console.log("2500#");
    return "2500#";
  }
}
