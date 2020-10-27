import React, {useState} from 'react';


	let number= " ";
	let val1= " ", val2= " ";
	var opr= " ", oprt= false, dott= true, operater= 0;
	var num= '0', total= '', i= 0, text= [];

const App = () => {

	const [numlng, setNumlng]= useState('50px');
	const [show, setShow]= useState();

	const Left = () => {

		if(i >= 1)
		{
			i--;
			setShow(text[i]);
		}

	}

	const Right = () => {

		if(i <= text.length- 2)
		{
			i++;
			setShow(text[i]);
		}
	}

	const Sum = () => {

		total+= val1;

		if(opr == '+')
		{
			val1= parseFloat(val1) + parseFloat(val2);
			number= " ";
			oprt= true;
		}

		if(opr == '-')
		{
			val1= parseFloat(val1) - parseFloat(val2);
			number= " ";
			oprt= true;
		}

		if(opr == '*')
		{
			val1= parseFloat(val1) * parseFloat(val2);
			number= " ";
			oprt= true;
		}

		if(opr == '/')
		{
			val1= parseFloat(val1) / parseFloat(val2);
			number= " ";
			oprt= true;
		}

		document.getElementById('p1').innerHTML= " ";
		total+= opr + val2 + '=' + ' ' + val1;
		text[num]= total;
		i= num;
		setShow(text[i]);
		num++;
		total= '';
	}

	const Calculat = (e) => {

		number+= e.target.value;

		if (dott == false && e.target.value == '.') 
		{
			number= number.substring(0, number.length - 1);
		}


		if(e.target.value == '.')
		{
			dott= false;

			if(number[1] == '.')
			{
				number= " ";
				number+= e.target.value= "0";
				number+= e.target.value= ".";
			}
		}

		if(number.length >= 17)
		{
			number= number.substring(0, number.length - 1);
		}


		if(e.target.id == 'C')
		{
			number= number.substring(0, number.length - 1);
		}


		if(e.target.id == 'AC')
		{
			number= " ";
			val1= " "; 
			val2= " ";
			opr= " "; 
			oprt= 0;
			dott= true;
			operater= 0;
			num= '0'; 
			total= ''; 
			i= 0; 
			text= [];
			document.getElementById('p1').innerHTML= " ";
			document.getElementById('p2').innerHTML= " ";
		}


		if(e.target.id == '+' || e.target.id == '-' || e.target.id == '*' || e.target.id == '/')
		{
			operater= operater + 1;

			if(number.charAt(number.length- 1) == '.')
			{
				number= number.substring(0, number.length - 1);
			}

			if(val1 != " " && val2 != " " && number != " " && operater <= 1)
			{
				val1= number;
				number= " ";
			}

			if(val1 == " " && val2 == " ")
			{
				val1= number;
				number= " ";
			}

			if(val1 == " " && number == " " && val2 == " ")
			{
				val1= "0";
				number= " ";
			}

			if(operater <= 1)
			{
				opr= e.target.id;
				dott= true;
			}

			document.getElementById('p1').innerHTML= val1 + " " + opr;


			if(operater >= 2)
			{
				if(number == " " && opr != " ")
				{
					opr= e.target.id;
					dott= true;

					document.getElementById('p1').innerHTML= val1 + " " + opr;
					return false;
				}

				if(val1 != " " && number != " " && val2 == " " && opr != " ")
				{
					val2= number;
					dott= true;
					number= " ";

					Sum();

					opr= e.target.id;
				}

				else
				{
					val2= number;
					dott= true;
					number= " ";
					Sum();

					opr= e.target.id;
					
				}


				document.getElementById('p1').innerHTML= val1 + " " + opr;
			}

		}


		if(e.target.id == '=' && val1 != " " && number == " " && val2 != " ")
		{
			operater= 0;
			Sum();
		}



		if(e.target.id == '=' && val1 != " " && number != " ")
		{
			operater= 0;
			val2= number;
			dott= true;

			Sum();
		}



		if(oprt == true)
		{
			if(val1.toString().length >= 7)
			{
				setNumlng(50 - (val1.toString().length + 8));
			}

			else
			{
				setNumlng(50);
			}

			document.getElementById('p2').innerHTML= val1;
			oprt= 0;
		}
		else
		{
			if(number.length >= 7)
			{
				setNumlng(50 - (number.length + 5));
			}

			else
			{
				setNumlng(50);
			}

			document.getElementById('p2').innerHTML= number;
		}
	}



	return(
			<div className= 'calculator container'>
				<div className= "row history">
					<div className= 'col-2 left'>
						<div onClick= {Left} style= {{marginLeft: '10px'}}>
							<svg height="13px" viewBox="0 0 16 16" className="bi bi-chevron-compact-left" fill="currentColo1" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
							</svg>
						</div>
					</div>

					<div className= 'col-8 his'>
						<p> {show} </p>
					</div>

					<div className= 'col-2 right'>
						<div onClick= {Right} style= {{marginLeft: '-10px'}}>
							<svg height="13px" viewBox="0 0 16 16" className="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
							</svg>
						</div>
					</div>
				</div>

				<div className= 'row'>
					<div className= 'result '>
						<p id= "p3"> </p>
						<p id= "p1"> </p>
						<p id= "p2" style= {{fontSize: numlng}}> </p>
					</div>
				</div>
	
				<div className= 'btn row'>
					<button onClick= {Calculat} value= '9' className= 'col-3'> 9 </button>
					<button onClick= {Calculat} value= '8' className= 'col-3'> 8 </button>
					<button onClick= {Calculat} value= '7' className= 'col-3'> 7 </button>
					<button onClick= {Calculat} id= '/' className= 'col-3'> / </button>

					<button onClick= {Calculat} value= '6' className= 'col-3'> 6 </button>
					<button onClick= {Calculat} value= '5' className= 'col-3'> 5 </button>
					<button onClick= {Calculat} value= '4' className= 'col-3'> 4 </button>
					<button onClick= {Calculat} id= '*' className= 'col-3'> * </button>

					<button onClick= {Calculat} value= '3' className= 'col-3'> 3 </button>
					<button onClick= {Calculat} value= '2' className= 'col-3'> 2 </button>
					<button onClick= {Calculat} value= '1' className= 'col-3'> 1 </button>
					<button onClick= {Calculat} id= '-' className= 'col-3'> - </button>

					<button onClick= {Calculat} value= '0' className= 'col-3'> 0 </button>
					<button onClick= {Calculat} value= '.' className= 'col-3'> . </button>
					<button onClick= {Calculat} id= '+' className= 'col-6 plus '> + </button>


					<button onClick= {Calculat} id= 'C' className= 'C col-3'> C </button>
					<button onClick= {Calculat} id= '=' className= 'equal col-6'> = </button>
					<button onClick= {Calculat} id= 'AC' className= 'AC col-3'> AC </button>
				</div>
			</div>
		)
}


export default App;