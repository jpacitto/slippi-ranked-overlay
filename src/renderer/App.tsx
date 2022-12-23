import { useEffect } from 'react';
import SlippiRankedOverlay from './pages/SlippiRankedOverlay/SlippiRankedOverlay';
import { useGetSlippiProfileQuery } from './redux/slices/slippiSlice';
import { useAppSelector, useAppDispatch } from './redux/hooks/reduxHooks';

import './App.css';

const App = () => {
  const dispatch = useAppDispatch();

  const slippiTag: any = useAppSelector((state) => state.slippiTagReducer.tag);

  useEffect(() => {
    const previousUsedTag = localStorage.getItem('previousUsedTag');
    dispatch({ type: 'slippiTag/changeTag', payload: previousUsedTag });
  }, [dispatch]);

  useGetSlippiProfileQuery(slippiTag, {
    pollingInterval: 120000,
    skip: slippiTag === null,
  });

  return <SlippiRankedOverlay />;
};

export default App;
