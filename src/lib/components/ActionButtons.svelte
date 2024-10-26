<!-- lib/components/ActionButtons.svelte -->
<script>
  import { goto } from '$app/navigation';
</script>

<div class="actions">
  <a href="/register">
    <button class="btn primary" on:click={() => goto('/register')}>
      Get Started
    </button>
  </a>
  <a href="/login">
    <button class="btn secondary" on:click={() => goto('/login')}>
      Log In
    </button>
  </a>
</div>

<style>
  .actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 2;
  }

  .btn {
    width: 100%;
    padding: 1rem;
    border-radius: 0.75rem;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .primary {
    background-color: #f44336;
    color: white;
  }

  .secondary {
    background-color: transparent;
    color: white;
    border: 1px solid #333;
  }
</style>