<script lang="ts">
	import type { PageData } from '$lib/types'
	import { CodeBlock } from '@skeletonlabs/skeleton'
	import QuoteSlider from '$lib/components/QuoteSlider.svelte'
	// import { base_url } from '$lib/config';

	export let data: PageData

	const aa_quotes = data.aa_quotes
	const big_book_quotes = data.big_book_quotes
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="flex">
		<div class="slider-wrapper border border-primary-500/50">
			<h2>General AA Quotes</h2>
			<QuoteSlider quotes={aa_quotes} />
			<h3>Pagination Options</h3>
			<CodeBlock code={'base_url/api/aa_quotes?skip=5&limit=10'} />
		</div>
		<div class="slider-wrapper border border-primary-500/50">
			<h2>Big Book Quotes</h2>
			<QuoteSlider quotes={big_book_quotes} />
			<h3>Pagination Options</h3>
			<CodeBlock code={'base_url/api/big_book_quotes?skip=5&limit=10'} />
		</div>
	</div>
</div>

<style>
	.flex {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 2rem;
	}
	.slider-wrapper {
		margin: 2rem 1rem;
		padding: 1rem;
	}
</style>
