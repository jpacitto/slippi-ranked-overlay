import DefaultLayout from 'renderer/layouts/DefaultLayout';
import { useAppSelector } from 'renderer/redux/hooks/reduxHooks';
import NoTagSelectedPage from 'renderer/pages/NoTagSelectedPage';

const MainOverlayPage = () => {
  const slippiTag: any = useAppSelector((state) => state.slippiTagReducer.tag);

  if (!slippiTag) {
    return <NoTagSelectedPage />;
  }

  return <DefaultLayout />;
};

export default MainOverlayPage;
