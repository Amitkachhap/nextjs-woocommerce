interface ILinks {
  id: number;
  title: string;
  href: string;
}

const LINKS: ILinks[] = [
  {
    id: 0,
    title: '',
    href: '/',
  },
  {
    id: 1,
    title: 'Shop',
    href: '/Shop',
  },
  {
    id: 2,
    title: 'Categories',
    href: '/Categories',
  },
];

export default LINKS;
