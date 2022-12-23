import { useMemo } from 'react';
import { useAppSelector } from './reduxHooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUserData = (data: any, slippiTag: string) => {
  const key = `getSlippiProfile("${slippiTag}")`;
  if (data[key]?.data?.data.getConnectCode === null) {
    return {};
  }

  const userData = {
    connectCode: data[key]?.data?.data.getConnectCode.user.connectCode.code,
    displayName: data[key]?.data?.data.getConnectCode.user.displayName,
    ...data[key]?.data?.data.getConnectCode.user.rankedNetplayProfile,
  };

  userData.ratingOrdinal = Math.round(userData.ratingOrdinal * 10) / 10;
  return userData;
};

const useUserData = () => {
  const slippiTag: any = useAppSelector((state) => state.slippiTagReducer.tag);
  const data = useAppSelector((state) => state.slippiApi.queries);
  console.log('data:', data);
  return useMemo(() => getUserData(data, slippiTag), [data, slippiTag]);
};

export default useUserData;
