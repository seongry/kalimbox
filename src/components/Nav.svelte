<script lang="ts">
	import IconButton from "../components/common/IconButton.svelte";
	import KalimbaIcon from "./common/icon/KalimbaIcon.svelte";
	import MenuIcon from "./common/icon/MenuIcon.svelte";
	export let segment: string;
</script>

<style>
	.header {
		flex-shrink: 0;
		width: 100%;
		height: 72px;
		background-color: var(--colors-purple100);
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--colors-black);
		font-weight: 700;
		font-size: 16px;
		position: relative;
  	}
  	.header .button {
      position: absolute;
      right: 16px;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="header">
    <div class="title">칼림바 악보 생성기</div>
    <div class="button">
		{#if segment === undefined}
		<a aria-current="{segment === 'list' ? 'page' : undefined}" href="list">
			<IconButton label="악보집">
				<MenuIcon />
			</IconButton>
		</a>
		{/if}
		{#if segment === 'list'}
		<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
			<IconButton label="만들기">
				<KalimbaIcon/>
			</IconButton>
		</a>
		{/if}
    </div>
</nav>
