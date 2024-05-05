<script>
	import '../app.pcss';
  import Navbar from '$lib/Navbar.svelte';
</script>

<div class="flex flex-col h-screen w-screen">
  <Navbar/>
  <slot />
</div>
