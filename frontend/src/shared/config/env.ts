import { z } from 'zod';

export const siteUrl = z
  .string()
  .url('Provided siteUrl env variable is not a url')
  .parse(import.meta.env.PUBLIC_SITE_URL);
