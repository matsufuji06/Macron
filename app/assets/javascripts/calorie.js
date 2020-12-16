window.addEventListener("load", function() {
  const carbo = document.getElementsByClassName("form")[1];
  const fat = document.getElementsByClassName("form")[2];
  const protein = document.getElementsByClassName("form")[3];
  const calorie = document.getElementsByClassName("form")[4];

  const calculateCalorie = () => {
    const sum = carbo.value*4 + fat.value*9 + protein.value*4;
    calorie.value = sum;
  };

  carbo.addEventListener("input", calculateCalorie);
  fat.addEventListener("input", calculateCalorie);
  protein.addEventListener("input", calculateCalorie);
});