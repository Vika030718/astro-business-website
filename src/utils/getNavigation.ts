import { getRoute, type Lang } from "../data/siteRoutes";

type RawNavItem = {
  labelKey: string;
  routeKey: Parameters<typeof getRoute>[0];
};

export function getNavigation(
  items: RawNavItem[],
  lang: Lang,
  labels: Record<string, string>,
) {
  return items.map((item) => ({
    label: labels[item.labelKey],
    href: getRoute(item.routeKey, lang),
  }));
}
