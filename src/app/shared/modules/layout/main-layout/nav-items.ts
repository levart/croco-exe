export const navItems: NavItem[] = [
  {
    title: 'SPORT',
    icon: '/assets/media/icons/sport.svg',
    url: ['/sport']
  },
  {
    title: 'live',
    icon: '/assets/media/icons/live.svg',
    url: ['/live']
  },
  {
    title: 'slots',
    icon: '/assets/media/icons/slots.svg',
    url: ['/slots']
  },
  {
    title: 'casino',
    icon: '/assets/media/icons/casino.svg',
    url: ['/casino']
  }
]

export interface NavItem {
  title: string;
  icon: string;
  url: string[];
}
