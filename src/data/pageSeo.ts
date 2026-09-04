import type { RouteKey } from "./siteRoutes";

type PageSeoSettings = {
  noindex?: boolean;
};

export const pageSeo: Partial<Record<RouteKey, PageSeoSettings>> = {
  home: {
    noindex: false,
  },

  servicesOverview: {
    noindex: false,
  },

  managedIt: {
    noindex: false,
  },

  cybersecurity: {
    noindex: false,
  },

  cloudMicrosoft365: {
    noindex: false,
  },

  backupDisasterRecovery: {
    noindex: false,
  },

  networkInfrastructure: {
    noindex: false,
  },

  coManagedIt: {
    noindex: false,
  },

  industries: {
    noindex: false,
  },

  serviceAreas: {
    noindex: false,
  },

  about: {
    noindex: false,
  },

  blog: {
    noindex: false,
  },

  contact: {
    noindex: false,
  },

  faq: {
    noindex: false,
  },
};
