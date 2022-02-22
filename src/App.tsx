import './App.css'
import React from 'react'
import { useData } from './Hooks/useData'

function App() {
	const [item, isLoading] = useData()

	if (isLoading) {
		return <h3> esta cargando </h3>
	}

	return item.map((item: any, i: any) => <li key={i}>{item.title}</li>)
}

export default App
