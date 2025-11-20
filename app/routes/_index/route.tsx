import { HomepageView } from 'pages/homepage.view';
import { homepageApi } from 'requests/homepage.fetch';

import { type Route } from './+types/route';

export const loader = async () => homepageApi.get();

export default function Home({ loaderData: data }: Route.ComponentProps) {
  return <HomepageView {...data} />;
}
