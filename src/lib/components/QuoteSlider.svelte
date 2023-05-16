<script lang="ts">
	import type { AAQuotesType, BigBookQuotesType } from '$lib/types'
	import { onMount } from 'svelte'

	export let quotes: AAQuotesType[] | BigBookQuotesType[] = []
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
	let sliderRef: HTMLDivElement
	let width: number

	const quote = quotes[index]

	onMount(() => {
		console.log('width', width)
		const transition = () => {
			nextQuote()
			timeoutId = setTimeout(transition, speed)
		}

		if (width > 768 && quote.book_location) {
			sliderRef.style.setProperty('--slider-height', '200px')
		} else {
			sliderRef.style.setProperty('--slider-height', '150px')
		}

		return () => clearTimeout(timeoutId)
	})
</script>

<svelte:window bind:innerWidth={width} />

<div class="slider" bind:this={sliderRef}>
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
