window.addEventListener("load", function() {
  const male = document.getElementById("maleStandard");
  const female = document.getElementById("femaleStandard");
  const weight = document.getElementById("weightStandard");
  const idealWeight = document.getElementById("idealWeightStandard");
  const carbo = document.getElementById("carboStandard");
  const fat = document.getElementById("fatStandard");
  const protein = document.getElementById("proteinStandard");
  const calorie = document.getElementById("calorieStandard");
  
  const calculateMetabolism = () => {
    if (male.checked) {
      const age = document.getElementById("standard_age");
      age.onchange = () => {
        const num = age.selectedIndex;
        const val = age.options[num].value;
        const metabolism = document.getElementById("metabolismStandard");
        if (val === "0") {
          metabolism.value = 2818;
        } else if (val === "1") {
          metabolism.value = 2660;
        } else if (val === "2") {
          metabolism.value = 2678;
        } else if (val === "3") {
          metabolism.value = 2450;
        } else if (val === "4") {
          metabolism.value = 2193;
        };
      };
    } else if (female.checked) {
      const age = document.getElementById("standard_age");
      age.onchange = () => {
        const num = age.selectedIndex;
        const val = age.options[num].value;
        const metabolism = document.getElementById("metabolismStandard");
        if (val === "0") {
          metabolism.value = 2293;
        } else if (val === "1") {
          metabolism.value = 1943;
        } else if (val === "2") {
          metabolism.value = 2013;
        } else if (val === "3") {
          metabolism.value = 1942;
        } else if (val === "4") {
          metabolism.value = 1734;
        };
      };
    };
  };
  
  const calculateIdealCalorie = () => {
    const gap = parseFloat(idealWeight.value - weight.value);
    const metabolism = parseFloat(document.getElementById("metabolismStandard").value);
    if (gap >= 0) {
      const totalWeightGain = metabolism + gap*240;
      carbo.value = Math.floor(totalWeightGain * 0.6 / 4);
      fat.value = Math.floor(totalWeightGain * 0.2 / 9);
      protein.value = Math.floor(totalWeightGain * 0.2 / 4);
    } else {
      const totalWeightLose = metabolism - Math.abs(gap*240);
      carbo.value = Math.floor(totalWeightLose * 0.6 / 4);
      fat.value = Math.floor(totalWeightLose * 0.2 / 9);
      protein.value = Math.floor(totalWeightLose * 0.2 / 4);
    };

    const calculateMacro = () => {
      const sum = parseFloat(carbo.value*4 + fat.value*9 + protein.value*4);
      calorie.value = sum;
    };

    carbo.addEventListener("input", calculateMacro);
    fat.addEventListener("input", calculateMacro);
    protein.addEventListener("input", calculateMacro);
  };

  male.addEventListener("click", calculateMetabolism);
  female.addEventListener("click", calculateMetabolism);
  weight.addEventListener("input", calculateIdealCalorie);
  idealWeight.addEventListener("input", calculateIdealCalorie);
});