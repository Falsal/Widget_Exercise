import React, { useState } from 'react'

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null)

	const onTitleClick = (index) => {
		setActiveIndex(index)
	}
	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : ''

		return (
			<React.Fragment key={item.title}>
				<div onClick={() => onTitleClick(index)} className={`title ${active}`}>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		)
	})
	return <div className='ui styled accordion'>{renderedItems}</div>
}

export default Accordion

// Simple first version:
// const Accordion = ({ items }) => {
// 	return items.map((item) => {
// 		return (
// 			<>
// 				<h1>{item.title}</h1>
// 				<div>{item.content}</div>
// 			</>
// 		)
// 	})
// }
