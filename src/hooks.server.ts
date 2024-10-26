// import { getPocketBase } from '$lib/pocketbase';
// import { redirect } from '@sveltejs/kit';

// export const handle = async ({ event, resolve }) => {
//   event.locals.pb = getPocketBase();

//   // Get auth cookie
//   const pb = event.locals.pb;
//   pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
  
//   try {
  //     // Refresh auth if needed
//     if (pb.authStore.isValid) {
//       await pb.collection('users').authRefresh();
//     }
//   } catch (_) {
//     pb.authStore.clear();
//   }

//   event.locals.user = pb.authStore.model;

//   // Protected routes check
//   if (event.url.pathname.startsWith('/home') && !event.locals.user) {
  //     throw redirect(303, '/login');
//   }

//   const response = await resolve(event);

//   // Set auth cookie
//   response.headers.append('set-cookie', pb.authStore.exportToCookie());

//   return response;
// };


import { pb } from "$lib/pocketbase";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
    //before

    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
    if (pb.authStore.isValid){
        try{

            await pb.collection('users').authRefresh()
        } catch (_){
            pb.authStore.clear();
        }
    }

    event.locals.pb = pb;
    event.locals.user = structuredClone(pb.authStore.model);

    // Protected routes check
    // if (event.url.pathname.startsWith('/home') && !event.locals.user) {
    //     throw redirect(303, '/login');
    // }

     const response = await resolve(event);

     //after
     response.headers.set('set-cookie', pb.authStore.exportToCookie({httpOnly :false}))
     return response;
}
