window.addEventListener("load", function() {
  const weightStandard = document.getElementsByClassName("standardForm")[0];
  const idealweightStandard = document.getElementsByClassName("standardForm")[1];
  const carboStandard = document.getElementsByClassName("standardForm")[2];
  const fatStandard = document.getElementsByClassName("standardForm")[3];
  const proteinStandard = document.getElementsByClassName("standardForm")[4];
  const calorieStandard = document.getElementsByClassName("standardForm")[5];

  const calculateStandard = () => {
    const gap = weightStandard.value - idealweightStandard.value
    
    const calculateCalorie = () => {
      const sum = carboStandard.value*4 + fatStandard.value*9 + proteinStandard.value*4;
      calorieStandard.value = sum;
    };

    carboStandard.addEventListener("input", calculateCalorie);
    fatStandard.addEventListener("input", calculateCalorie);
    proteinStandard.addEventListener("input", calculateCalorie);
  }

  weightStandard.addEventListener("input", calculateStandard);
  idealweightStandard.addEventListener("input", calculateStandard);
});