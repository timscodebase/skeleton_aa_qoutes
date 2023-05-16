export type AAQuotesType = {
	quote: string
}

export type BigBookQuotesType = {
	quote: string
	book_location: string
}

export type PageData = {
	aa_quotes: AAQuotesType[]
	big_book_quotes: BigBookQuotesType[]
}

export type APIResponse = {
	body: string
	headers: {
		'Content-Type': string
		'max-age': string
	}
	status: 200
}
