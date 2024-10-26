import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({locals, request}) => {
        const body = Object.fromEntries(await request.formData()) as{
          email: string,
          password: string
      }

        try {
          await locals.pb.collection('users').authWithPassword(body.email, body.password);
              console.log(body);
        } 
        catch (e){
          console.error(e);
          throw e;
      }

      throw redirect (303, '/');
      console.log(body);
  },
    signup: async ({locals, request}) => {
        const body = Object.fromEntries(await request.formData())
        const passwordConfirm = body.password


        try {
            await locals.pb.collection('users').create({passwordConfirm, ...body});
        } catch (e){
            console.error(e);
            throw e
        }

        throw redirect (303, '/login');
    },
  logout: async ({ locals }) => {
    locals.pb.authStore.clear();
    throw redirect(303, '/login');
  }

}