import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('')
	const [debouncedText, setDebouncedText] = useState(text)

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text)
		}, 500)

		return () => {
			clearTimeout(timerId)
		}
	}, [text])

	const doTranslations = async () => {
		const { data } = await axios.post(
			'https://translation.googleapis.com/language/translate/v2/allow-cors',
			{ mode: 'cors' },
			{
				params: {
					q: debouncedText,
					target: language.value,
					key:
						'AIzaSyAc9mliXTzxcYQbmVzLh6sWx2tB1mDD6JsAIzaSyAc9mliXTzxcYQbmVzLh6sWx2tB1mDD6Js'
				},

				header: 'Access-Control-Allow-Origin'
			}
		)
		setTranslated(data.data.translations[0].translatedText)
	}

	useEffect(() => {
		doTranslations()
	}, [language, debouncedText])
	return (
		<div>
			<h1 className='ui header'>{translated}</h1>
		</div>
	)
}

export default Convert
