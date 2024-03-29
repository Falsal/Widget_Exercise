import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

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
	return (
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					label='Select a color'
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
		</div>
	)
}

export default App
