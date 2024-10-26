<script lang="ts">
  import Login from "$lib/components/Login.svelte";
  let email='';
  let password = '';
</script>

<Login {email} {password}/>
<!-- 
<form action="?/signup" method="post">
<input type="email" name="email" bind:value={email}>
<input type="password" name="password" bind:value={password}>
<button>GO</button>
</form> -->
