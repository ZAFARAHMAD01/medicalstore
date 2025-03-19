import React from 'react'
import { Button } from 'react-bootstrap';
import { GrAction } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

function Addproductvalue() {
	const dispatch = useDispatch();
    const name3 = useSelector((state) => state.cart);
    console.log(name3,'10');
	let length=name3.length;
	console.log(length,'11');
	let qu='';
	let objIndex = [...''];
	for (let index = 0; index < name3.length; index++) {
		const element = name3[index];
		console.log(element);
		// console.log(name3[index].id);
		// if (element.id===){
		// 	 element.quantity
		// 	 console.log();
		// }
		if (element.id===name3[index].id) {
	
			qu=element.quantity+1;
			console.log(name3);
			objIndex = name3.findIndex(obj => obj.id == name3[index].id);

//Log object to Console.
			console.log("Before update: ", name3[objIndex]);
			// name3[objIndex].name = "zafar";
			// name3[objIndex].name="zafar";
			
			console.log(name3[objIndex].price);
			
			
			console.log(name3[objIndex].name);
			

			//Log object to console again.
			console.log("After update: ", name3[objIndex])
			
			
			console.log(element.quantity);
			console.log(qu);
			
		}
		
	}
	



  return (
    <div>Addproductvalue
	<div>
		<div>
			<Button>Addcard</Button>
		</div>
	</div>
	</div>
  )
}

export default Addproductvalue