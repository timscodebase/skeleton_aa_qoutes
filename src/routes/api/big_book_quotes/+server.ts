import { getBigBookQuotes } from '$lib/data_utils';
import type { Request, Response } from '@sveltejs/kit';

export async function GET(request: Request): Promise<Response> {
	const quotes = await getBigBookQuotes();
	const res = new Response(JSON.stringify(quotes), {
		headers: {
			'content-type': 'application/json'
		}
	});
	return res;
}
