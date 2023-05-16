import { getAAQuotes } from '$lib/data_utils';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const allQuotes = await getAAQuotes();
	const limit = Number(url.searchParams.get('limit') ?? 30);
	const skip = url.searchParams.get('skip') ?? 0;

	const quotes = allQuotes.slice(Number(skip), Number(skip) + limit);

	return json(quotes);
}
