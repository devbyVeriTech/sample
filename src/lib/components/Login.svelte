<!-- src/routes/login/+page.svelte -->

<script lang="ts">
  import { Icon } from 'svelte-icons-pack';
  import { 
    FiMail, 
    FiLock,
    FiEyeOff,
    FiEye,
   } from 'svelte-icons-pack/fi';
  

  export let email = '';
  export let password = '';
  let showPassword = false;
  let errors = {
      email: '',
      password: ''
    };

  // Email regex pattern
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  // Password regex pattern (min 8 chars, at least 1 uppercase, 1 lowercase, 1 number)
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  function validateEmail() {
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address';
    } else {
      errors.email = '';
    }
  }

  function validatePassword() {
    if (!password) {
      errors.password = 'Password is required';
    } else if (!passwordPattern.test(password)) {
      errors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
    } else {
      errors.password = '';
    }
  }

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

  function handleSubmit() {
    validateEmail();
    validatePassword();
    
    if (!errors.email && !errors.password) {
      console.log('Login attempted with:', { email, password });
      // Add your login logic here
    }
  }

</script>

<div class="container">
  <div class="form-card">
    <div class="form-header">
      <h1>Defi-Exchange</h1>
      <p>Sign in to start trading crypto, forex and stocks.</p>
    </div>

    <!-- <form on:submit={handleSubmit}> -->
    <form action="?/login" method="POST">
      <!-- Email -->
      <div class="form-group">
        <label>Email</label>
        <div class="input-wrapper">
          <span class="icon">
          <Icon src={FiMail} size="17" />
            
            <!-- <Fi icon="fiMail" size="20" /> -->
          </span>
          <input
            type="email"
            name="email"
            id="email"
            on:blur={validateEmail}
            bind:value={email}
            class:error={errors.email}
            placeholder="Enter your email"
            required
          />
        </div>
        {#if errors.email}
          <span class="error-message">{errors.email}</span>
        {/if}
      </div>

      <!-- Password -->
      <div class="form-group">
        <label>Password</label>
        <div class="input-wrapper">
          <span class="icon">
          <Icon src={FiLock} size="17" />
            
            <!-- <Fi icon="fiLock" size="20" /> -->
          </span>
          <input
            type='password'
            name="password"
            id="password"
            bind:value={password}
            on:blur={validatePassword}
            class:error={errors.password}
            placeholder="Enter your password"
            required
          />
          <!-- <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            on:blur={validatePassword}
            class:error={errors.password}
            placeholder="Enter your password"
            required
          /> -->
          <button
            type="button"
            class="password-toggle"
            on:click={() => showPassword = !showPassword}
          >
              {#if showPassword}
              <Icon src={FiEyeOff} />
              {:else}
              <Icon src={FiEye} />
              {/if}
            </button>
        </div>
        {#if errors.password}
          <span class="error-message">{errors.password}</span>
        {/if}
      </div>

      <!-- Register Button -->
      <button type="submit" class="submit-button">
        SIgn In
      </button>

      <!-- Sign In -->
      <div class="form-footer">
        <p>
          Don't have an account?
          <a href="/register" class="link">Sign Up</a>
        </p>
      </div>
    </form>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  }

  .container {
    min-height: 100vh;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .form-card {
    width: 100%;
    max-width: 500px;
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 0.5rem;
    color: #fff;
  }

  .form-header {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .form-header h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
  }

  .form-header p {
    color: #999;
    font-size: 13px;
    margin: 0;
  }

  .form-group {
    margin-bottom: 1.5rem;
    padding: 0 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #ccc;
    font-size: 0.9rem;
  }

  .input-wrapper {
    position: relative;
  }

  .icon {
    position: absolute;
    display: flex;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }

  input {
    width: 100%;
    padding: 10px 16px 10px 2.3rem;
    background-color: #2a2a2a;
    border: 1px solid #333;
    border-radius: 0.375rem;
    color: #fff;
    font-size: 12px;
    font-family: inherit;
    box-sizing: border-box;
  }

  input:focus{
    outline: none;
    border-color: #3b82f6;
  }
    
  input.error {
      border-color: #ff4444;
    }
  
    .error-message {
      color: #ff4444;
      font-size: 11px;
      margin-top: 4px;
      display: block;
    }

  .password-toggle {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 0;
  }

  .submit-button {
    width: calc(100% - 3rem);
    margin: 0 1.5rem 1.5rem;
    padding: 0.75rem;
    background-color: #4CAF50;
    /* background-color: #3b82f6; */
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .submit-button:hover {
    background-color: #36993a;
    /* background-color: #2563eb; */
  }

  .form-footer {
    padding: 0 1.5rem 1.5rem;
    text-align: center;
    font-size: 0.75rem;
    color: #999;
  }

  .form-footer p {
    margin: 0.5rem 0;
  }

  .link {
    color: #f44336;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  :global(.icon) {
    display: inline-block;
    vertical-align: middle;
  }

  @media (max-width: 640px) {
    .form-card {
      margin: 1rem;
    }
    
    .form-group {
      padding: 0 1rem;
    }
    
    .submit-button {
      width: calc(100% - 2rem);
      margin: 0 1rem 1rem;
    }
    
    .form-footer {
      padding: 0 1rem 1rem;
    }
  }
</style>