import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

import { CONFIG } from '@config';

import TodoPageContent from './_fragments/TodoPageContent';

function HomePage() {
  if (CONFIG.ENV === 'production') return null;
  return <HomeLayout content={<TodoPageContent />} />;
}

export default HomePage;
