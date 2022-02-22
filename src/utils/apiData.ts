export const apiData = async (url: string) => {
	const peticion = await fetch(url)
	const res = await peticion.json()
	return res
}
