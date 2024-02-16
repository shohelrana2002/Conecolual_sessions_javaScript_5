// class btn add start now

const allBts = document.getElementsByClassName("add-btn");
//  header count total
let count = 0;
for (const allBtn of allBts) {
  allBtn.addEventListener("click", function (e) {
    count += 1;
    //  btn text color
    allBtn.classList.add("bg-[green]");
    //  btn text color
    const placeName = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    // setInnerText("selected-place-container", placeName);
    const selectPlaceContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = placeName;
    const p2 = document.createElement("p");
    p2.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    // total Total Budget: 900

    const budget = document.getElementById("budget").innerText;
    const numberBudget = parseFloat(budget);
    //  if else check to budget
    if (numberBudget - parseFloat(price) < 0) {
      allBtn.classList.add("bg-[red]");
      alert("earn more");
      return;
    }

    document.getElementById("budget").innerText =
      numberBudget - parseFloat(price);

    selectPlaceContainer.appendChild(li);
    setInnerText("cart-count", count);
    //  total cost price start now
    totalCost("total-cost", parseFloat(price));
    // grand total
    // just call dite habe
    grandTotal();
  });
}

// inner text set all
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
/// total cost function
function totalCost(id, value) {
  const totalPrice = document.getElementById(id).innerText;
  const sum = parseFloat(totalPrice) + parseFloat(value);
  setInnerText(id, sum);
}
/// Grandtotal cost function
function grandTotal(category) {
  const totalPrice = document.getElementById("total-cost").innerText;
  const sum = parseFloat(totalPrice);
  setInnerText("grand-total", sum);
  if (category === "bus") {
    setInnerText("grand-total", sum + 100);
  } else if (category === "train") {
    setInnerText("grand-total", sum - 200);
  } else if (category === "flight") {
    setInnerText("grand-total", sum + 500);
  } else {
    setInnerText("grand-total", sum);
  }
}
