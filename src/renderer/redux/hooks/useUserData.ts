import { useMemo } from 'react';
import { useAppSelector } from './reduxHooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUserData = (data: any) => {
  const key = Object.keys(data)[0];

  const userData = {
    displayName: data[key]?.data?.data.getConnectCode.user.displayName,
    ...data[key]?.data?.data.getConnectCode.user.rankedNetplayProfile,
  };

  userData.ratingOrdinal = Math.round(userData.ratingOrdinal * 10) / 10;
  return userData;
};

const useUserData = () => {
  const data = useAppSelector((state) => state.slippiApi.queries);
  return useMemo(() => getUserData(data), [data]);
};

export default useUserData;
