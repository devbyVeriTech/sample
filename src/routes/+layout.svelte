<!-- src/routes/+layout.svelte -->
<script>
  import '../styles.css'
	import Header from '$lib/components/Header.svelte';
  import Navigation from '$lib/components/Navigation.svelte';


  export let data;
</script>

<div class="app-container">
  <!-- {#if $currentUser} -->
    <!-- <Header/> -->
  <!-- {/if} -->
  <!-- Main Content -->
  <main class="main-content">
    <slot />
  </main>
  <!-- {#if data.user}     -->
    <Navigation/>
  <!-- {/if} -->
</div>

<style>
  .app-container {
    min-height: 100vh;
    /* background-color: #1a1a1a; */
  }

  .main-content {
    /* padding-top: 64px; */
  }

  /* Style for the menu icon */
  :global(.menu-icon) {
    width: 24px;
    height: 24px;
  }
</style>