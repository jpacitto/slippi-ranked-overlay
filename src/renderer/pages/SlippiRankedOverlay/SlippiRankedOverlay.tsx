import { useState } from 'react';

import MainOverlayPage from '../MainOverlayPage/MainOverlayPage';
import ConfigPage from '../ConfigPage';

import './SlippiRankedOverlay.css';

enum PageType {
  Main,
  Config,
}

const SlippiRankedOverlay = () => {
  const [pageType, setPageType] = useState<PageType>(PageType.Main);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageSwap = (e: any) => {
    e.preventDefault();
    if (pageType === PageType.Main) {
      setPageType(PageType.Config);
    } else {
      setPageType(PageType.Main);
    }
  };

  return (
    <div
      className="main-container"
      onContextMenu={handlePageSwap}
      role="presentation"
    >
      {pageType === PageType.Config ? <ConfigPage /> : <MainOverlayPage />}
    </div>
  );
};

export default SlippiRankedOverlay;
