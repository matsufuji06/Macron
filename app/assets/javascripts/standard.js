window.addEventListener("load", function() {
  const carbo = document.getElementById("carboStandard");
  const fat = document.getElementById("fatStandard");
  const protein = document.getElementById("proteinStandard");
  const calorie = document.getElementById("calorieStandard");

  const calculateCalorie = () => {
    const sum = carbo.value*4 + fat.value*9 + protein.value*4;
    calorie.value = sum;
  };

  carbo.addEventListener("input", calculateCalorie);
  fat.addEventListener("input", calculateCalorie);
  protein.addEventListener("input", calculateCalorie);
});