import { useEffect, useState } from 'react'

export const useData = () => {
	const [item, setItem] = useState<any>({})
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => {
				setItem(data)
				setIsLoading(false)
			})
	}, [])

	return [item, isLoading]
}
