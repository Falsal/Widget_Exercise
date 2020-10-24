import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
	{
		title: 'What is React?',
		content: ' It is a front-end library/framework for Javascript'
	},
	{
		title: 'Why use React',
		content: 'React is a favourite JS library for engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components'
	}
]
const options = [
	{ label: 'The color of Red', value: 'Red' },
	{ label: 'The color of Green', value: 'Green' },
	{ label: 'A shade of Blue', value: 'Blue' }
]
const App = () => {
	const [selected, setSelected] = useState(options[0])
	const [showDropdown, setShowDropdown] = useState(true)
	return (
		<div>
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			) : null}
		</div>
	)
}

export default App
