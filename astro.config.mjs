import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'server',
    adapter: cloudflare({
        mode: 'directory',
        runtime: {
            mode: 'local',
            type: 'pages',
        }
    }),
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    }
});