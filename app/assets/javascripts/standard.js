window.addEventListener("load", function() {
  const maleStandard = document.getElementsByClassName("standardForm")[0];
  const femaleStandard = document.getElementsByClassName("standardForm")[1];
  const ageStandard = document.getElementsByClassName("standardForm")[2];
  const metabolismStandard = document.getElementsByClassName("standardForm")[3];
  const weightStandard = document.getElementsByClassName("standardForm")[4];
  const idealweightStandard = document.getElementsByClassName("standardForm")[5];
  const carboStandard = document.getElementsByClassName("standardForm")[6];
  const fatStandard = document.getElementsByClassName("standardForm")[7];
  const proteinStandard = document.getElementsByClassName("standardForm")[8];
  const calorieStandard = document.getElementsByClassName("standardForm")[9];

  const calculateMetabolism = () => {
    const sexSelect = () => {
      if (maleStandard.checked) {
        
      } else if (femaleStandard.checked) {
        console.log("hello, female");
        
      };
    };
    const ageSelect = () => {
      console.log("hello");
    };
    sexSelect();
    ageSelect();
  };

  maleStandard.addEventListener("click", calculateMetabolism);
  femaleStandard.addEventListener("click", calculateMetabolism);
  ageStandard.onchange = event => {
    calculateMetabolism();
  }

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