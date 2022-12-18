import useUserData from 'renderer/redux/hooks/useUserData';
import RankIcon from 'renderer/components/RankIcon/RankIcon';
import getRegion from 'renderer/utils/region';
import rankStyles from 'renderer/utils/rankStyles';

import './DefaultLayout.css';

const DefaultLayout = () => {
  const data = useUserData();

  console.log('data:', data);

  const rank = rankStyles(
    data.ratingOrdinal,
    data.wins,
    data.losses,
    data.dailyRegionalPlacement
  );

  return (
    <div id="content">
      <img
        className="background-design design-1"
        src="./src/res/slippi/WhiteMotifLarge.svg"
        alt="white motif"
      />
      <img
        className="background-design design-2"
        src="./src/res/slippi/WhiteMotifLarge.svg"
        alt="white motif"
      />

      <p id="player-tag">{data.displayName}</p>
      <p id="player-slippi-id">undefined#0</p>
      <RankIcon />
      <p id="player-rank">{rank.division}</p>
      <p id="player-rating">{data.ratingOrdinal}</p>

      <div className="more-info" id="more-info-left">
        <div id="more-info-section">
          <div id="more-info-title">Region</div>
          <div id="region">{getRegion(data.continent)}</div>
        </div>
      </div>
      <div className="more-info" id="more-info-right">
        <div id="more-info-section">
          <div id="more-info-title">Total sets played</div>
          <div id="total-sets">{data.wins + data.losses}</div>
        </div>
        <div id="more-info-section">
          <div id="more-info-title">Wins / Losses</div>
          <div id="wl-wrapper">
            <p id="w">{data.wins}</p>
            <p id="wl-slash">/</p>
            <p id="l">{data.losses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
