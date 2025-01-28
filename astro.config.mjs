import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import matomo from 'astro-matomo';

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
    },
    integrations: [
        matomo({
            enabled: true,
            host: "https://elliotech.matomo.cloud/",
            setCookieDomain: "localhostvillage.org",
            trackerUrl: "js/", // defaults to matomo.php
            srcUrl: "js/", // defaults to matomo.js
            siteId: 8,
            heartBeatTimer: 5,
            disableCookies: true,
            debug: false,
        }),
    ]

});