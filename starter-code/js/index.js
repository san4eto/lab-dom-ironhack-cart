var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

function updateSubtot($product) {
  let itemPrice = $product.querySelector(".pu span").innerHTML;
  let quantity = $product.querySelector(".qty label input").value;
  let subtotal = itemPrice * quantity;
  $product.querySelector(".subtot span").innerHTML = subtotal;
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  let totalPrice = 0;

  document.querySelectorAll("#cart > tbody > tr").forEach(element => {
    console.log(element);
    totalPrice += updateSubtot(element);
  });

  document.querySelector("body > h2 > span").innerHTML = totalPrice;
  //push  calculated value in total html
  //run update subtotal for each product

  //sum subtotal
}

$calc.onclick = calcAll;

// iteration 4: Deleting a product
// Associate the "Delete" buttons to click events so that when you click one, it deletes that product from the list. Steps to follow:

// For each button, assign a click event that will:
// document.querySelectorAll(".cart > tbody > tr:nth-child(2) > td.rm > button").onclick = function(){

//   forEach(element => {
//     document.removeChild(".cart > tbody > tr:nth-child(1) > td.rm");
//   });
// };

// const deleteButton = document.querySelector(
//   ".cart > tbody > tr:nth-child(1) > td.rm"
// );
// console.log(deleteButton);

document
  .querySelector(".cart > tbody > tr:nth-child(2) > td.rm > button")
  .each(function(index) {
    this.onclick = function() {
      
      let deleteProduct = document.removeChild(
        ".cart > tbody > tr:nth-child(1) > td.rm";

        
      );
    };
  });





  function hide(product){
    e.currentTarget.style.visibility = 'hidden';
    console.log(e.currentTarget);
    // When this function is used as an event handler: this === e.currentTarget
  }
  
  var ps = document.getElementsByTagName('p');
  
  for(var i = 0; i < ps.length; i++){
    // Console: print the clicked <p> element 
    ps[i].addEventListener('click', hide, false);
  }
  // Console: print <body>
  document.body.addEventListener('click', hide, false);
// select the wrapper tr that contains all the HTML for the product that should be deleted,
// select the tbody parent that contains all of the product wrapper trs,
// use the method removeChild we already saw in the lesson

// 💡 You can use e.currentTarget to access the "Delete" button that was just clicked and select the parent node of an HTML element with parentNode.
