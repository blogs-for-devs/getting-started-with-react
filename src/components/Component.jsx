import { useState } from 'react';

const Component = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="component">
			<h1>My First React Component!</h1>
			<div>
				<button onClick={() => setCount((count) => count + 1)}>Counter</button>
				<p>Count: {count}</p>
			</div>
		</div>
	) 
}

export default Component;