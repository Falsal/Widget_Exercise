import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
	const [term, setTerm] = useState('Programming')
	const [results, setResults] = useState([])

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				'https://en.wikipedia.org/w/api.php/allow-cors',
				{ mode: 'cors' },
				{
					params: {
						headers: { 'content-type': 'application/x-www-form-urlencoded' },
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: term
					}
				}
			)
			setResults(data.query.search)
		}
		if (term && !results.length) {
			search()
		} else {
			const timeoutId = setTimeout(() => {
				if (term) {
					search()
				}
			}, 1000)

			return () => {
				clearTimeout(timeoutId)
			}
		}
	}, [term, results.length])

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className='item'>
				<div className='right floated content'>
					<a
						className='ui button'
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						GO
					</a>
				</div>

				<div className='content'>
					<div className='header'>{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		)
	})
	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>Enter Search Name</label>
					<input
						value={term}
						className='input'
						onChange={(e) => setTerm(e.target.value)}
					></input>
				</div>
			</div>
			<div className='ui celled list'>{renderedResults}</div>
		</div>
	)
}

export default Search
