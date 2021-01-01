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
  const calculateCalorie = () => {
    const sum = carbo.value*4 + fat.value*9 + protein.value*4;
    calorie.value = sum;
  };

  carbo.addEventListener("input", calculateCalorie);
  fat.addEventListener("input", calculateCalorie);
  protein.addEventListener("input", calculateCalorie);
  male.addEventListener("click", calculateMetabolism);
  female.addEventListener("click", calculateMetabolism);
});