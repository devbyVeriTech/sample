<script>
  import { page } from '$app/stores';
  import { slide } from 'svelte/transition';
  import { Icon } from 'svelte-icons-pack';
  import { 
    FiHome,
    FiDatabase,
    FiPlusCircle,
    FiMinusCircle,
    FiUsers,
    FiCheckCircle
  } from "svelte-icons-pack/fi";


  let transPanel = false

  function toggle(){
    transPanel = !transPanel
  }

  export let isOpen = false;
  
  function closeMenu() {
    isOpen = false;
  }

  const nav =[
    {
    name:'Home',
    url:'/',
    icon:'/homepage.svg',
    iconSel:'/home-button.svg',
    },
    {
    name:'Assets',
    url:'/assets',
    icon:'/coin_currency.svg',
    iconSel:'/wallet_icon.svg',
    // icon:FiDatabase,
    },
    {
    name:'Transact',
    // url:'/deposit',
    class:'main-action',
    icon:'/gui_ex.svg',
    iconSel:'',
    // icon:FiPlusCircle,
    },
    // {
    // name:'Withdrawal',
    // url:'/withdrawal',
    // icon:FiMinusCircle,
    // },
    {
    name:'Copy',
    url:'/copy-expert',
    icon:'/teamwork.svg',
    iconSel:'/teamwork.svg',
    // icon:FiUsers,
    },
    {
    name:'Verify',
    url:'/verify',
    icon:'/verifyshield.svg',
    iconSel:'/verifyshield.svg',
    // icon:FiCheckCircle,
    },
  ]
</script>

<nav class="navigation">
  {#each nav as nav}
    <a href={nav.url}>
      <button class="nav-item  on:click={()=> toggle} {$page.route.id === nav.url && !nav.class ? "active" : ''} {nav.class}">
        <span>
          <!-- <Icon src={nav.icon}/> -->
           <img src={$page.route.id === nav.url ? nav.iconSel : nav.icon} alt="">
        </span>
        {!nav.class ? nav.name : ''}
      </button>
  </a>
  {/each}

  </nav>
  
  <style>

    .transact-card{
      display: flex;
      position: absolute;
      background: #272727;
      border: 1px solid #1a1a1a;
      left: 50%;
      translate: -50%;
      bottom: 71px;
      font-size: 12px;
      font-weight: bold;
      padding: 20px;
    }

    .navigation {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #1a1a1a;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1rem;
      max-width: 480px;
      margin: 0 auto;
    }
  
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0rem;
      background: none;
      border: none;
      color: #888;
      font-size: 0.6rem;
      font-weight: 400;
      cursor: pointer;
    }
  
    .nav-item.active {
      color: white;
    }
  
    .main-action {
      background-color: #ff5722;
      width: 40px;
      height: 40px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      rotate: -45deg;
      /* margin-top: -1rem; */
    }

    span img{
      width: 20px;
      /* height: 20px; */
      filter: invert();
    }
  
    .main-action span {
      margin: 0;
      rotate: 45deg;
    }
  </style>