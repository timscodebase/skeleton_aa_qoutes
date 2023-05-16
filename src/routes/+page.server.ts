import { base_url } from '$lib/config'

export const load = async () => {
	const aa_quotesRes = await fetch(`${base_url}/api/aa_quotes`)
	const aa_quotes = await aa_quotesRes.json()
	const big_book_quotesRes = await fetch(`${base_url}/api/big_book_quotes`)
	const big_book_quotes = await big_book_quotesRes.json()
	return {
		aa_quotes,
		big_book_quotes
	}
}
