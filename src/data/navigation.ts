// src/data/navigation.ts

import type { RouteKey } from "./siteRoutes";

type NavItem = {
  labelKey: string;
  routeKey: RouteKey;
};

export const mainNavigation: NavItem[] = [
  {
    labelKey: "home",
    routeKey: "home",
  },
  {
    labelKey: "services",
    routeKey: "servicesOverview",
  },
  {
    labelKey: "industries",
    routeKey: "industries",
  },
  {
    labelKey: "serviceAreas",
    routeKey: "serviceAreas",
  },
  {
    labelKey: "about",
    routeKey: "about",
  },
  {
    labelKey: "blog",
    routeKey: "blog",
  },
  {
    labelKey: "contact",
    routeKey: "contact",
  },
  {
    labelKey: "faq",
    routeKey: "faq",
  },
];

export const servicesNavigation: NavItem[] = [
  {
    labelKey: "managedIt",
    routeKey: "managedIt",
  },
  {
    labelKey: "cybersecurity",
    routeKey: "cybersecurity",
  },
  {
    labelKey: "cloudMicrosoft365",
    routeKey: "cloudMicrosoft365",
  },
  {
    labelKey: "backupDisasterRecovery",
    routeKey: "backupDisasterRecovery",
  },
  {
    labelKey: "networkInfrastructure",
    routeKey: "networkInfrastructure",
  },
  {
    labelKey: "coManagedIt",
    routeKey: "coManagedIt",
  },
];
