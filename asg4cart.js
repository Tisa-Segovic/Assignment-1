/* asg4cart.js */

var obj= document.getElementById("bag1");
obj.addEventListener("change", total);

var obj2= document.getElementById("bag2");
obj2.addEventListener("change", total);

var obj3= document.getElementById("bag3");
obj3.addEventListener("change", total);

var sh = document.getElementById("shipp");
sh.addEventListener("change", total);

// Function #1
function total(){
	
	// For each bag individually
	var price = document.getElementById("price1").value;
	var qt1 = parseFloat(obj.value);
	total1 = qt1 * parseFloat(price);
	document.getElementById("subtotal1").innerHTML= "$" + total1 + " USD";
	
	var price2 = document.getElementById("price2").value;
	var qt2 = parseFloat(obj2.value);
	total2 = qt2 * parseFloat(price2);
	document.getElementById("subtotal2").innerHTML= "$" + total2 + " USD";
	
	var price3 = document.getElementById("price3").value;
	var qt3 = parseFloat(obj3.value);
	total3 = qt3 * parseFloat(price3);
	document.getElementById("subtotal3").innerHTML= "$" + total3 + " USD";
	
	// Cost associated with shipping
	var shippc = parseFloat(sh.value);
	
	// Grand total cost
	var grandTotal = parseFloat(total1 + total2 + total3 + shippc);
	document.getElementById("grandtotal").innerHTML= "$" + grandTotal + " USD";
	
}

// Function #2
var ob = document.forms[0];
ob.addEventListener("submit", function(receipt){
	receipt.preventDefault(); // Prevent from submitting a new page.

	var len = ob.elements.length;
	for (var i=0; i < len -2; i++) {
		
		if ((ob.elements[i].value == "")) {
				var k = ob.elements[i].name;
				alert("Please input " + k);
				ob.elements[i].focus();
				ob.elements[i].select();
				ob.elements[i].style.backgroundColor="yellow";
				return;
				
		} else if ((i == 3 ) && (ob.elements[i].value.length != 5)) {
			
				alert("Please input 5 digits for " + ob.elements[i].name);
				ob.elements[i].focus();
				ob.elements[i].select();
				ob.elements[i].style.backgroundColor="yellow";
				
		} else if ((i == 4 ) && (ob.elements[i].value.indexOf("@") == -1)){
			alert("Please inlcude an @ symbol " + ob.elements[i].name);
			ob.elements[i].focus();
			ob.elements[i].select();
			ob.elements[i].style.backgroundColor="yellow";
			
		} else if ((i == 4 ) && (ob.elements[i].value.indexOf(".") == -1)){
			alert("Please inlcude an . symbol " + ob.elements[i].name);
			ob.elements[i].focus();
			ob.elements[i].select();
			ob.elements[i].style.backgroundColor="yellow";
			
		}
	}
	
	/*************************************************/
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 
	today = mm + '/' + dd + '/' + yyyy;
	
	/*************************************************/
	var bag1 = document.getElementById("bag1").value;
	var bag2 = document.getElementById("bag2").value;
	var bag3 = document.getElementById("bag3").value;
	var out = "";
	
	if(bag1 > 0){
		out += "Massimo Dutti" + ", ";
	} 
	if (bag2 > 0){
		out += "Mango" + ", ";
	} 
	if (bag3 > 0){
		out += "Liebeskind Berlin";
	}
	
	/*************************************************/
	var quantity = parseFloat(bag1) + parseFloat(bag2) + parseFloat(bag3);
	var q = quantity.toString();
	
	/*************************************************/
	var b1t=  0; 
	var b2t=  0; 
	var b3t=  0; 
	
	if(bag1 > 0){
		b1t =  parseFloat(bag1) * 133;
	} 
	if (bag2 > 0){
		b2t =  parseFloat(bag2) * 156;
	} 
	if (bag3 > 0){
		b3t =  parseFloat(bag3) * 353;
	}
	
	var grandTotal = b1t + b2t + b3t;
	var gt = grandTotal.toString();
	
	/*************************************************/	
	var ccnumber = document.getElementById("ccnumber").value;
	var ccarr = ("" + ccnumber).split("");
	var newccarr = ccarr.reverse();
	var ccnumdisplay = "";
	var len = newccarr.length;

	for (var i=0; i < len; i++){
		if(i > 3){
			ccnumdisplay += "x"
		} else{
			ccnumdisplay += newccarr[i];
		}
	}
	
	var strsplit = ccnumdisplay.split("");
	strsplit.reverse();
	var strfinal = "";
	
	for (var i=0; i < len; i++){
		strfinal += strsplit[i];
	}	
	
	
	document.getElementById("output").innerHTML = "Today is " + today + "<br><br>" + 
	"The items you purchased are: " + out + " bags." + "<br>" + "The quantity purchased is: " + q + " bags."
	 + "<br>" + "The total spent is: $" + gt + " USD." + "<br>" + "Your last 4 digits of credit card are " + strfinal + ".";

});

