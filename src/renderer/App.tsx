import './App.css';

import SlippiRankedOverlay from './pages/SlippiRankedOverlay/SlippiRankedOverlay';
import { useGetSlippiProfileQuery } from './redux/slices/slippiSlice';

const pollingInterval = 120000;

const App = () => {
  const slippiTag = 'hbox#305';

  useGetSlippiProfileQuery(slippiTag, {
    pollingInterval,
  });

  return <SlippiRankedOverlay />;
};

export default App;
