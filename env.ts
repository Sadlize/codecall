import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.resolve(import.meta.dirname, '.env'), quiet: true });

// These envs are only for server code

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const APP_PORT = Number(process.env.PORT) || 3000;
export const SERVER_PORT = IS_DEVELOPMENT ? 8080 : APP_PORT;
export const SERVER_PROXY = IS_DEVELOPMENT ? process.env.SITE_URL || `http://localhost:${SERVER_PORT}` : undefined;
