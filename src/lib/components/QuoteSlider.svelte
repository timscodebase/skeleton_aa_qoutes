<script lang="ts">
	import type { AAQuotesType, BigBookQuotesType, JFTQuotesType } from '$lib/types'
	import { onMount } from 'svelte'

	type QuotesType = AAQuotesType[] | BigBookQuotesType[] | JFTQuotesType[]

	export let quotes: QuotesType = []
	export let speedIsSeconds: number = 5

	const speed = speedIsSeconds * 1000

	let index = 0

	function updateIndex(offset: number) {
		index = (index + offset + quotes.length) % quotes.length
	}

	function nextQuote() {
		updateIndex(1)
	}

	function prevQuote() {
		updateIndex(-1)
	}

	let timeoutId: string | number | NodeJS.Timeout | undefined

	const quote = quotes[index]

	onMount(() => {
		const transition = () => {
			nextQuote()
			timeoutId = setTimeout(transition, speed)
		}

		return () => clearTimeout(timeoutId)
	})
</script>

<div class="slider">
	<button class="variant-ghost-primary" on:click={prevQuote}>prev</button>
	<div class="quote">
		<p>{quote.quote}</p>

		<!-- <div class="meta">
			{#if quote.book_location}
				<p>{quote.book_location}</p>
			{/if}
			{#if quote.date}
				<p>{quote.date}</p>
			{/if}
		</div> -->
	</div>
	<button class="variant-ghost-primary" on:click={nextQuote}>next</button>
</div>

<style>
	.slider {
		--slider-height: 500px;

		min-width: var(--slider-height);
		height: 250px;
		display: grid;
		align-items: center;
		grid-template-columns: auto 1fr auto;
		padding-top: 2rem;
		gap: 1rem;
	}

	.quote {
		display: grid;
		place-items: center;
		gap: 1rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		width: 50px;
		height: 50px;
		margin: 1rem;
	}

	p {
		word-break: break-all;
	}

	@media (max-width: 768px) {
		button {
			display: none;
		}

		.slider {
			--slider-height: 200px;

			width: 100%;
			height: var(--slider-height);
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
	}
</style>
