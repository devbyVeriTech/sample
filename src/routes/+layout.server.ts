// import { redirect } from '@sveltejs/kit';


// export const actions = {
// logout: async ({ locals }) => {
//   locals.pb.authStore.clear();
//   throw redirect(303, '/login');
// }
// };
export const load = ({ locals }) => {
    return {
      user: locals.user ? {
        id: locals.user.id,
        email: locals.user.email,
        name: locals.user.name,
        username: locals.user.username,
        avatar: locals.user.avatar,
        created: locals.user.created,
        verified: locals.user.verified,
        updated: locals.user.updated,
        balance: locals.user.balance,
      } : null
    };
  };
