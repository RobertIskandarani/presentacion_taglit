import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    console.log('Strapi register function called');
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    console.log('Strapi bootstrap function called');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Database client:', process.env.DATABASE_CLIENT);
    console.log('Database URL exists:', !!process.env.DATABASE_URL);
  },
};
