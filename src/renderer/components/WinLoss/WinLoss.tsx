import useUserData from 'renderer/redux/hooks/useUserData';

const WinLoss = () => {
  const { wins, losses } = useUserData();
  return (
    <div>
      <p>{wins}</p>
      <p>/</p>
      <p>{losses}</p>
    </div>
  );
};

export default WinLoss;
