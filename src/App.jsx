 import { useState } from 'react';

const App = () => {
	// create a state to hold the currently active/focused input element
	const [currentlyFocusedInput, setCurrentlyFocusedInput] = useState(null);

	const buttonHandler = (e) => {
		setCurrentlyFocusedInput((currFoc) => {
			let val = currFoc.value + e.target.value;
			currFoc.value = val;
			return currFoc;
		});
		currentlyFocusedInput.focus();
	};

	 const deleteHandler = (e) => {
		 e[-1].parentNode.removeChild(e[-1])
	 }
   

	return (
		<div className='App'>
			<div className='login-form'>
				<h2>Login</h2>
				<input
					type='text'
					placeholder='enter username'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
				<input
					type='text'
					placeholder='enter password'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
			</div>

			<div className='keyboard-container'>
				<div className='key-row'>
					<button value='1' onClick={buttonHandler}>
						1
					</button>
					<button value='2' onClick={buttonHandler}>
						2
					</button>
					<button value='3' onClick={buttonHandler}>
						3
					</button>
					<button value='4' onClick={buttonHandler}>
						4
					</button>
					<button value='5' onClick={buttonHandler}>
						5
					</button>
					<button value='6' onClick={buttonHandler}>
						6
					</button>
					<button value='7' onClick={buttonHandler}>
						7
					</button>
					<button value='8' onClick={buttonHandler}>
						8
					</button>
					<button value='9' onClick={buttonHandler}>
						9
					</button>
					<button value='0' onClick={buttonHandler}>
						0
					</button>
					
				</div>
				<div className='key-row'>
					<button value='q' onClick={buttonHandler}>
						Q
					</button>
					<button value='w' onClick={buttonHandler}>
						W
					</button>
					<button value='e' onClick={buttonHandler}>
						E
					</button>
					<button value='r' onClick={buttonHandler}>
						R
					</button>
					<button value='t' onClick={buttonHandler}>
						T
					</button>
					<button value='y' onClick={buttonHandler}>
						Y
					</button>
					<button value='u' onClick={buttonHandler}>
						U
					</button>
					<button value='i' onClick={buttonHandler}>
						I
					</button>
					<button value='o' onClick={buttonHandler}>
						O
					</button>
					<button value='p' onClick={buttonHandler}>
						P
					</button>
				</div>
				<div className='key-row'>
					<button value='a' onClick={buttonHandler}>
						A
					</button>
					<button value='s' onClick={buttonHandler}>
						S
					</button>
					<button value='d' onClick={buttonHandler}>
						D
					</button>
					<button value='f' onClick={buttonHandler}>
						F
					</button>
					<button value='g' onClick={buttonHandler}>
						G
					</button>
					<button value='h' onClick={buttonHandler}>
						H
					</button>
					<button value='j' onClick={buttonHandler}>
						J
					</button>
					<button value='k' onClick={buttonHandler}>
						K
					</button>
					<button value='l' onClick={buttonHandler}>
						L
					</button>
				</div>
				<div className='key-row'>
					<button>Shift</button>
					<button value='z' onClick={buttonHandler}>
						Z
					</button>
					<button value='x' onClick={buttonHandler}>
						X
					</button>
					<button value='c' onClick={buttonHandler}>
						C
					</button>
					<button value='v' onClick={buttonHandler}>
						V
					</button>
					<button value='b' onClick={buttonHandler}>
						B
					</button>
					<button value='n' onClick={buttonHandler}>
						N
					</button>
					<button value='m' onClick={buttonHandler}>
						M
					</button>
					<button className='btn-large' onClick={deleteHandler}>
						Backspace
					</button>
				</div>
				<div className='key-row'>
					<button className='btn-full'></button>
				</div>
			</div>
		</div>
	);
};

export default App;
