window.addEventListener("load", function() {
  const carbo = document.getElementsByClassName("form")[1];
  const fat = document.getElementsByClassName("form")[2];
  const protein = document.getElementsByClassName("form")[3];

  const calculateCalorie = () => {
    console.log(carbo.value);
  };

  carbo.addEventListener("input", calculateCalorie);
});