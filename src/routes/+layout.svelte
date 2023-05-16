<script lang="ts">
	import { AppBar, AppShell } from '@skeletonlabs/skeleton'
	// import '$lib/styles/global.css';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css'
	// Most of your app wide CSS should be put in this file
	import '../app.postcss'

	function scrollHandler(event: UIEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		console.log(event.currentTarget.scrollTop)
	}
</script>

<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<AppBar>
			<h1>Recovery APIs</h1>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block">Sidebar</div>
	</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">
		<div id="sidebar-right" class="hidden lg:block">Sidebar</div>
</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
