<!-- lib/components/WelcomeHero.svelte -->
<script>
  import { fly } from 'svelte/transition';
</script>

<div class="hero">
  <div class="heading" in:fly="{{ y: 20, duration: 800, delay: 300 }}">
    <h1>Crypto Just<br />Got Easier!</h1>
    <p>Experience seamless trading and secure asset management</p>
  </div>
</div>

<style>
  .hero {
    padding-top: 1rem;
  }

  .time-display {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  .heading {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    color: #999;
    line-height: 1.6;
    margin: 0;
  }
</style>