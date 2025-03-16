// BMI CALCULATE BUTTON SECTION--------------------------- 

function calculateBmi(){

  const weight = parseFloat(document.getElementById('weight').value) ;
  const height = parseFloat(document.getElementById('height').value) / 100;

  const bmi = (weight / (height * height)).toFixed(2);


  if(bmi<18.5){
    output.innerHTML=`
    <div class="card text-center bg-light" style="width: 18rem;">
    <img src="./images/underweight.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">UNDERWEIGHT</h5>
    <p class="card-text">Your BMI score: ${bmi}</p>
    <button class="btn btn-primary" onclick="buttonUnder(${bmi})">TIPS</button>    
    </div>
    </div>
    `
  }
  else if (bmi >= 18.5 && bmi < 24.9) {
    output.innerHTML=`
    <div class="card bg-light text-center" style="width: 18rem;">
    <img src="./images/normalweight.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">NORMAL WEIGHT</h5>
    <p class="card-text">Your BMI score: ${bmi}</p>
    <button class="btn btn-primary" onclick="buttonNormal(${bmi})">TIPS</button>    
    </div>
    </div>
    `
  }
  else if (bmi >= 25 && bmi < 29.9) {
    output.innerHTML=`
    <div class="card text-center bg-light" style="width: 18rem;">
       <img src="./images/overweight.jpg" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">OVERWEIGHT</h5>
         <p class="card-text">Your BMI score: ${bmi}</p>
         <button class="btn btn-primary" onclick="buttonOver(${bmi})">TIPS</button>    
       </div>
    </div>

    `
  }
  else if(bmi>30){
    output.innerHTML=`
    <div class="card bg-light text-center" style="width: 18rem;">
        <img src="./images/obesee.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">OBESE</h5>
            <p class="card-text">Your BMI score: ${bmi}</p>
            <button class="btn btn-primary" onclick="buttonObese(${bmi})">TIPS</button>    

        </div>
    </div>

    `
  }

  else{
    secondoutput.innerHTML=`
<div class="card text-bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Bro! Provide A Valid Input...</h5>
  </div>
</div>    `
  }

  return bmi;

}


// TIP BUTTON SECTION-----------------------------------------

function buttonObese(bmi){
  console.log(bmi);
  secondoutput.innerHTML=`
<div class="card p-3 ">
  <h5 class="text-center mb-4">Follow and Stay Healthy</h5>
  
  <div class="accordion" id="bmiTips">

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tip1">
          🥗 Eat High-Protein Foods
        </button>
      </h2>
      <div id="tip1" class="accordion-collapse collapse show">
        <div class="accordion-body">
          Focus on eggs, chicken breast, fish, and fiber-rich foods like oats and spinach.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip2">
          🏋️‍♀️ Regular Exercise
        </button>
      </h2>
      <div id="tip2" class="accordion-collapse collapse">
        <div class="accordion-body">
          Strength training + cardio workouts like walking, skipping, and core workouts help burn fat.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip3">
          💧 Stay Hydrated
        </button>
      </h2>
      <div id="tip3" class="accordion-collapse collapse">
        <div class="accordion-body">
          Drink 3-4 liters of water daily and avoid sugary drinks.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip4">
          🌄 Fix Your Sleep
        </button>
      </h2>
      <div id="tip4" class="accordion-collapse collapse">
        <div class="accordion-body">
          Sleep 7-8 hours daily to control hunger hormones.
        </div>
      </div>
    </div>

  </div>
</div>
  `
    
}

function buttonUnder(bmi){
  secondoutput.innerHTML=`
<div class="card p-3 w-100" style="width: 18rem;">
  <h5 class="text-center mb-4">Follow and Stay Healthy</h5>
  
  <div class="accordion" id="underweightTips">

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tip1">
          🥛 High-Calorie Shakes
        </button>
      </h2>
      <div id="tip1" class="accordion-collapse collapse show">
        <div class="accordion-body">
          Drink banana shakes with oats, almonds, and peanut butter for quick bulking.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip2">
          🍳 High-Protein Foods
        </button>
      </h2>
      <div id="tip2" class="accordion-collapse collapse">
        <div class="accordion-body">
          Focus on eggs, chicken breast, fish, and paneer to build muscle mass.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip3">
          🏋️‍♀️ Strength Training
        </button>
      </h2>
      <div id="tip3" class="accordion-collapse collapse">
        <div class="accordion-body">
          Do heavy-weight workouts like squats, deadlifts, and bench press to gain size.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip4">
          🍞 Eat Every 3 Hours
        </button>
      </h2>
      <div id="tip4" class="accordion-collapse collapse">
        <div class="accordion-body">
          Increase meal frequency. Eat 5-6 small meals a day with carbs and protein.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip5">
          🌄 Fix Your Sleep
        </button>
      </h2>
      <div id="tip5" class="accordion-collapse collapse">
        <div class="accordion-body">
          Sleep 7-8 hours for proper muscle recovery and faster gains.
        </div>
      </div>
    </div>

  </div>
</div>

  `
}


function buttonNormal(bmi){
  secondoutput.innerHTML=`
  <div class="card p-3 w-100" style="width: 20rem;">
  <h5 class="text-center mb-4">Follow and Stay Healthy</h5>
  
  <div class="accordion" id="normalWeightTips">

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tip1">
          🥗 Maintain Balanced Diet
        </button>
      </h2>
      <div id="tip1" class="accordion-collapse collapse show">
        <div class="accordion-body">
          Eat clean and balanced meals with proper carbs, protein, and healthy fats.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip2">
          🏋️‍♀️ Strength + Cardio Workout
        </button>
      </h2>
      <div id="tip2" class="accordion-collapse collapse">
        <div class="accordion-body">
          Focus on strength workouts + light cardio to stay fit and maintain muscle mass.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip3">
          🥛 Stay Hydrated
        </button>
      </h2>
      <div id="tip3" class="accordion-collapse collapse">
        <div class="accordion-body">
          Drink 3 liters of water daily and avoid junk foods.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip4">
          🌄 Maintain Sleep Cycle
        </button>
      </h2>
      <div id="tip4" class="accordion-collapse collapse">
        <div class="accordion-body">
          Sleep at least 7 hours to keep your metabolism and hormones balanced.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip5">
          🛑 Avoid Sugar & Processed Foods
        </button>
      </h2>
      <div id="tip5" class="accordion-collapse collapse">
        <div class="accordion-body">
          Cut off sugary drinks, fast food, and high-oil snacks.
        </div>
      </div>
    </div>

  </div>
</div>

  `
}

function buttonOver(bmi){
  secondoutput.innerHTML=`
  <div class="card p-3 w-100" style="width: 20rem;">
  <h5 class="text-center mb-4">Follow and Stay Healthy</h5>
  
  <div class="accordion" id="overweightTips">

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tip1">
          🥗 Focus on Calorie Deficit Diet
        </button>
      </h2>
      <div id="tip1" class="accordion-collapse collapse show">
        <div class="accordion-body">
          Eat low-calorie, high-fiber foods like oats, fruits, and vegetables.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip2">
          🏋️‍♀️ Increase Physical Activity
        </button>
      </h2>
      <div id="tip2" class="accordion-collapse collapse">
        <div class="accordion-body">
          Do walking, skipping, and core workouts along with strength training.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip3">
          🍵 Drink Detox Water
        </button>
      </h2>
      <div id="tip3" class="accordion-collapse collapse">
        <div class="accordion-body">
          Drink lemon water, green tea, or jeera water to burn fat faster.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip4">
          🌄 Fix Your Sleep Cycle
        </button>
      </h2>
      <div id="tip4" class="accordion-collapse collapse">
        <div class="accordion-body">
          Sleep 7-8 hours to control cravings and boost metabolism.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tip5">
          🚫 Avoid Sugar & Junk Food
        </button>
      </h2>
      <div id="tip5" class="accordion-collapse collapse">
        <div class="accordion-body">
          Cut off sugary drinks, processed foods, and high-oil snacks.
        </div>
      </div>
    </div>

  </div>
</div>

  `
}
