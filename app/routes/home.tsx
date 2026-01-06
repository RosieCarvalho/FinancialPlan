import type { Route } from './+types/home';
import { Initial } from '../initial/initial';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Financy Plan APP' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return <Initial />;
}
