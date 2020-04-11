//Display
var output1Display = document.getElementById("output1");
var output2Display = document.getElementById("output2");
var output3Display = document.getElementById("output3")

//main calc
function Maincalc() {
  var incomeVal = document.getElementsByClassName("income");
  var expenseVal = document.getElementsByClassName("expenses");
  var incomeTot = 0;
  var expenseTot = 0;

  for (var i = 0; i < incomeVal.length; i++) {
    let val = parseInt(incomeVal[i].value);
    if (!isNaN(val))
      incomeTot += val;
  }
  for (var i = 0; i < expenseVal.length; i++) {
    let val = parseInt(expenseVal[i].value)
    if (!isNaN(val))
      expenseTot += val;
  }

  var x = incomeTot - expenseTot;

  //push values to arrays
  incomeChart.push(incomeTot);
  expenseChart.push(expenseTot);
  leftoverChart.push(x);
  //displays
  output1Display.innerHTML = incomeTot;

  output2Display.innerHTML = expenseTot

  output3Display.innerHTML = x;

};

//Button functionalies
var btn = document.getElementById("submit");
//SUBMIT
btn.addEventListener("click", function () {
  Maincalc();
  chartIt();
  smoothScroll();
});

//Animation for resulsts
$("#output-display").hide();
$("#submit").on("click", function () {
  $("#output-display").fadeIn(1000);
})

function smoothScroll(){
  $("#submit").click(function(){
    $("html, body").animate({
      scrollTop: $("#output-display").offset().top}, "slow");
    });
}

$(".fa-chevron-down").click(function(){
  $("html, body").animate({
    scrollTop: $("#move-to-div").offset().top}, "slow");
});

//--------------------------------------

//chart values
var incomeChart = [];
var expenseChart = [];
var leftoverChart = [];

function chartIt() {
  //bar graph below
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["results"],
      datasets: [
        {
          data: incomeChart,
          label: "Income",
          backgroundColor: "#60F34B",
          borderColor: "#60F34B"
        },
        {
          data: expenseChart,
          label: "Expenses",
          backgroundColor: "#F34B4B",
          borderColor: "#F34B4B"
        },
        {
          data: leftoverChart,
          label: "left-over",
          backgroundColor: "#4BF2F3",
          borderColor: "#4BF2F3",
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
