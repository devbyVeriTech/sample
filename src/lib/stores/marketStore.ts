// stores/marketStore.js
import { writable } from 'svelte/store';

export const marketData = writable([
  {
    name: 'S&P 500',
    symbol: 'ES1!',
    price: '0.00',
    change: 0,
    icon: '500',
    iconBg: '#ff4444'
  },
  {
    name: 'Euro',
    symbol: '6E1!',
    price: '0.00',
    change: 0,
    icon: '🇪🇺',
    iconBg: '#4444ff'
  },
  {
    name: 'Gold',
    symbol: 'GC1!',
    price: '0.00',
    change: 0,
    icon: '🏆',
    iconBg: '#ffd700'
  },
  {
    name: 'Crude Oil',
    symbol: 'CL1!',
    price: '0.00',
    change: 0,
    icon: '🛢️',
    iconBg: '#8B4513'
  },
  {
    name: 'Natural Gas',
    symbol: 'NG1!',
    price: '0.00',
    change: 0,
    icon: '🔥',
    iconBg: '#4169E1'
  }
]);