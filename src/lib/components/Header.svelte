<!-- <script>
  import { currentUser } from '$lib/pocketbase';
  import { Icon } from 'svelte-icons-pack';
  import { 
      FiUser,
  } from "svelte-icons-pack/fi";
  import SlidingMenu from '$lib/components/SlidingMenu.svelte';
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    }
    
    </script>
    
    
    <header class="app-header">
      <div class="header-content">
        <button
        class="menu-button"
        on:click={toggleMenu}
      >
      OPEN
      </button>
     
      <button class="profile-button">
        <Icon src={FiUser} size="20" />
        </button>
        </div>
        </header>
        
        <SlidingMenu bind:isOpen={isMenuOpen} />
        
        <style>
          
        .app-header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1a1d26;
    border-bottom: 1px solid #2d3038;
    z-index: 30;
    }
    
    .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    }
    
    .menu-button {
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
      color: white;
      transition: color 0.2s;
      }
      
      .menu-button:hover {
        color: #0077ff;
        }
        
        .profile-button {
          width: 32px;
          height: 32px;
          background-color: #2d3038;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8c8e92;
  }
  button{
    border: none;
    }
    
    :global(.profile-icon > svg) {
      color: inherit;
  }

  </style> -->

<script>
	import { getImgURL } from '$lib/utils/utils';

// @ts-nocheck

  // import { Icon } from 'svelte-icons-pack';
  // import { 
  //     FiUser,
  // } from "svelte-icons-pack/fi";
  const user = {
    name: 'Tyrone Tremblay',
    email: 'hello@tyrone.com',
    avatar: ''
  };

  export let data;
</script>

<header class="header">
  <div class="user-info">
    <img class="avatar" src={data?.user?.avatar ? getImgURL("_pb_users_auth_", data?.user?.id, data?.user?.avatar) : `https://via.placeholder.com/400x600/ffffff/?text=${data?.user?.name}`} alt=""/>
    <div class="user-details">
      <span class="name">{data.user?.name}</span>
      <span class="email">{data.user?.email}</span>
    </div>
  </div>
  <!-- <button class="notification">
    <span class="notification-dot"></span>
  </button> -->
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
  }

  .user-details {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: 600;
  }

  .email {
    font-size: 0.8rem;
    color: #888;
  }

  .notification {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #222;
    border: none;
    cursor: pointer;
  }

  .notification-dot {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 8px;
    height: 8px;
    background-color: #ff4444;
    border-radius: 50%;
  }
</style>