import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://BusinessCompanysolutions.netlify.app",
  prefetch: false,
  trailingSlash: "always",
  integrations: [sitemap()],

  devToolbar: {
    enabled: false,
  },

  server: {
    host: "127.0.0.1",
    port: 4321,
  },

  vite: {
    server: {
      strictPort: true,
      hmr: {
        protocol: "ws",
        host: "127.0.0.1",
        clientPort: 4321,
      },
    },
  },

  redirects: {
    "/advanced-cybersecurity-solutions/": "/cybersecurity-services/",
    "/flexible-secure-cloud-services/": "/cloud-microsoft-365/",
    "/microsoft-365-solutions/": "/cloud-microsoft-365/",
    "/active-directory-services/": "/cloud-microsoft-365/",
    "/data-backup-recovery-services/": "/backup-disaster-recovery/",
    "/expert-it-systems-management/": "/network-infrastructure/",
    "/it-blog/": "/blog/",
    "/faq-camo-it-solutions/": "/faq/",
    "/trusted-it-partner-cambridge/": "/about/",
    "/testimonials/": "/",
    "/24-7-managed-it-support-services/": "/managed-it-services/",
    "/business-it-solutions-cambridge/": "/managed-it-services/",
    "/thank-you/": "/contact-us/",

    "/fr/advanced-cybersecurity-solutions/": "/fr/cybersecurity-services/",
    "/fr/flexible-secure-cloud-services/": "/fr/cloud-microsoft-365/",
    "/fr/microsoft-365-solutions/": "/fr/cloud-microsoft-365/",
    "/fr/active-directory-services/": "/fr/cloud-microsoft-365/",
    "/fr/data-backup-recovery-services/": "/fr/backup-disaster-recovery/",
    "/fr/expert-it-systems-management/": "/fr/network-infrastructure/",
    "/fr/it-blog/": "/fr/blog/",
    "/fr/faq-camo-it-solutions/": "/fr/faq/",
    "/fr/trusted-it-partner-cambridge/": "/fr/about/",
  },
});
