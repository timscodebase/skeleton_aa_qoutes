import { aa_quotes } from '$lib/data/aa_quotes'
import { big_book_quotes } from '$lib/data/big_book_quotes'
import { jft_quotes } from '$lib/data/jft_quotes'
import type { AAQuotesType, JFTQuotesType } from './types'

export async function getAAQuotes(): Promise<AAQuotesType[]> {
	try {
		const res = new Response(JSON.stringify(aa_quotes), {
			headers: {
				'content-type': 'application/json'
			}
		})
		return await res.json()
	} catch (error: any) {
		const res = new Response(JSON.stringify({ message: error.message }), {
			status: 500,
			headers: {
				'content-type': 'application/json'
			}
		})
		return await res.json()
	}
}

export async function getBigBookQuotes(): Promise<AAQuotesType[]> {
	try {
		const res = new Response(JSON.stringify(big_book_quotes), {
			headers: {
				'content-type': 'application/json'
			}
		})
		return await res.json()
	} catch (error: any) {
		const res = new Response(JSON.stringify({ message: error.message }), {
			status: 500,
			headers: {
				'content-type': 'application/json'
			}
		})
		return await res.json()
	}
}

export async function getJFTQuotes(): Promise<JFTQuotesType[]> {
	try {
		const res = new Response(JSON.stringify(jft_quotes), {
			headers: {
				'content-type': 'application/json'
			}
		})
		return await res.json()
	} catch (error: any) {
		const res = new Response(JSON.stringify({ message: error.message }), {
			status: 500,
			headers: {
				'content-type': 'application/json'
			}
		})
		return await res.json()
	}
}
