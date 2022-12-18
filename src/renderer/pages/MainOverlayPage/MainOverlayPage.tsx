import useUserData from '../../redux/hooks/useUserData';

const MainOverlayPage = () => {
  console.log('useUserData:', useUserData());
  return <div>Main Overlay Page</div>;
};

export default MainOverlayPage;
