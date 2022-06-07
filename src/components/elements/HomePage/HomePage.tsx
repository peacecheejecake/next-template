import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

import { CONFIG } from '@config';

import HomePageContent from './_fragments/HomePageContent';

function HomePage() {
  if (CONFIG.ENV === 'production') return null;
  return <HomeLayout content={<HomePageContent />} />;
}

export default HomePage;
