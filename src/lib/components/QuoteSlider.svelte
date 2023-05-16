<script lang="ts">
	import type { AAQuotesType, BigBookQuotesType } from '$lib/types';
	import { onMount } from 'svelte';

	export let quotes: AAQuotesType[] | BigBookQuotesType[] = [];
	export let speedIsSeconds: number = 5;

	const speed = speedIsSeconds * 1000;

	let index = 0;

	function updateIndex(offset: number) {
		index = (index + offset + quotes.length) % quotes.length;
	}

	function nextQuote() {
		updateIndex(1);
	}

	function prevQuote() {
		updateIndex(-1);
	}

	let timeoutId: string | number | NodeJS.Timeout | undefined

	onMount(() => {
		const transition = () => {
			nextQuote();
			timeoutId = setTimeout(transition, speed);
		};
		timeoutId = setTimeout(transition, speed);

		return () => clearTimeout(timeoutId);
	});
	$: quote = quotes[index];
</script>

<div class="slider">
	<button class="variant-ghost-primary" on:click={prevQuote}>prev</button>
	<div class="quote">
		<p>{quote.quote}</p>
		{#if quote.book_location}
			<p>{quote.book_location}</p>
		{/if}
	</div>
	<button class="variant-ghost-primary" on:click={nextQuote}>next</button>
</div>

<style>
	:root {
		--slider-height: 500px;
	}

	.slider {
		width: var(--slider-height);
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

	button {
		width: 50px;
		height: 50px;
		margin: 1rem;
	}

	p {
		word-break: break-all;
	}
</style>
