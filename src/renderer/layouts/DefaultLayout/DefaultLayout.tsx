import useUserData from 'renderer/redux/hooks/useUserData';
import RankIcon from 'renderer/components/RankIcon/RankIcon';
import getRegion from 'renderer/utils/region';
import rankStyles from 'renderer/utils/rankStyles';
import { ReactComponent as WhiteMotif } from 'renderer/assets/images/slippi/WhiteMotifLarge.svg';

import './DefaultLayout.css';

const DefaultLayout = () => {
  const data = useUserData();

  const rank = rankStyles(
    data.wins,
    data.losses,
    data.ratingOrdinal,
    data.dailyRegionalPlacement
  );

  const contentStyle = {
    backgroundImage: `linear-gradient(to right, transparent 30%, ${rank.color})`,
  };

  return (
    <div id="content" style={contentStyle}>
      <WhiteMotif className="background-design design-1" />
      <WhiteMotif className="background-design design-2" />

      <p id="player-tag">{data.displayName}</p>
      <p id="player-slippi-id">{data.connectCode}</p>
      <div id="ranked-icon">
        <RankIcon />
      </div>
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
