import PocketBase from 'pocketbase';

export const pb = new PocketBase(`http://defii.pockethost.io`);
// export const getPocketBase = () => new PocketBase(`http://defii.pockethost.io`);
// export const getPocketBase = () => new PocketBase('http://defii.pockethost.io');

// export const getPocketBase = () => new PocketBase('http://127.0.0.1:8090');