export const siteRoutes = {
  home: {
    en: "/",
    fr: "/fr/",
  },

  servicesOverview: {
    en: "/comprehensive-it-support-services/",
    fr: "/fr/comprehensive-it-support-services/",
  },

  managedIt: {
    en: "/managed-it-services/",
    fr: "/fr/managed-it-services/",
  },

  cybersecurity: {
    en: "/cybersecurity-services/",
    fr: "/fr/cybersecurity-services/",
  },

  cloudMicrosoft365: {
    en: "/cloud-microsoft-365/",
    fr: "/fr/cloud-microsoft-365/",
  },

  backupDisasterRecovery: {
    en: "/backup-disaster-recovery/",
    fr: "/fr/backup-disaster-recovery/",
  },

  networkInfrastructure: {
    en: "/network-infrastructure/",
    fr: "/fr/network-infrastructure/",
  },

  coManagedIt: {
    en: "/co-managed-it-consulting/",
    fr: "/fr/co-managed-it-consulting/",
  },

  industries: {
    en: "/industries/",
    fr: "/fr/industries/",
  },

  serviceAreas: {
    en: "/business-it-solutions-cambridge/",
    fr: "/fr/business-it-solutions-cambridge/",
  },

  about: {
    en: "/about/",
    fr: "/fr/about/",
  },

  blog: {
    en: "/blog/",
    fr: "/fr/blog/",
  },

  contact: {
    en: "/contact-us/",
    fr: "/fr/contact-us/",
  },

  faq: {
    en: "/faq/",
    fr: "/fr/faq/",
  },
} as const;

export type RouteKey = keyof typeof siteRoutes;
export type Lang = "en" | "fr";

export function getRoute(routeKey: RouteKey, lang: Lang) {
  return siteRoutes[routeKey][lang];
}
