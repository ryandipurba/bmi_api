const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors())
app.use(express.json());

Countbmi = (weight, height) => {
  return (weight / Math.pow(height, 2)).toFixed(1)
}

bmiCategory = (bmi) => {
  if (bmi >= 30) {
    return "Obesitas";
  } else if (bmi >= 25.1 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "normal";
  }
  else {
    return "underweight";
  }
}

app.get("/", (req, res) => {
  res.send("Hello Quotes!");
});

app.post("/bmi", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let height = req.body.height;
  let weight = req.body.weight;
  let bmi = Countbmi(weight, height);
  let category = bmiCategory(bmi);

  res.json({
    name: name,
    age: age,
    height: height,
    weight: weight,
    bmi: bmi,
    category: category
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});