import SlippiRankedOverlay from './pages/SlippiRankedOverlay/SlippiRankedOverlay';
import { useGetSlippiProfileQuery } from './redux/slices/slippiSlice';

import './App.css';

const App = () => {
  const slippiTag = 'hbox#305';

  useGetSlippiProfileQuery(slippiTag, {
    pollingInterval: 120000,
  });

  return <SlippiRankedOverlay />;
};

export default App;
