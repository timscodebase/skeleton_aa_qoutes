import { base_url } from '$lib/config'

export const load = async () => {
	return {
		aa_quotes: await fetch(`${base_url}/api/aa_quotes`).then((res) => res.json()),
		big_book_quotes: await fetch(`${base_url}/api/big_book_quotes`).then((res) => res.json()),
		jft_quotes: await fetch(`${base_url}/api/jft_quotes`).then((res) => res.json())
	}
}
