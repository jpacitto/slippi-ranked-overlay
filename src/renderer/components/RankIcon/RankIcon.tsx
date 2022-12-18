import useUserData from 'renderer/redux/hooks/useUserData';
import rankStyles from 'renderer/utils/rankStyles';

import { ReactComponent as BronzeOneIcon } from 'renderer/assets/images/ranked_icons/bronze_1.svg';
import { ReactComponent as BronzeTwoIcon } from 'renderer/assets/images/ranked_icons/bronze_2.svg';
import { ReactComponent as BronzeThreeIcon } from 'renderer/assets/images/ranked_icons/bronze_3.svg';
import { ReactComponent as SilverOneIcon } from 'renderer/assets/images/ranked_icons/silver_1.svg';
import { ReactComponent as SilverTwoIcon } from 'renderer/assets/images/ranked_icons/silver_2.svg';
import { ReactComponent as SilverThreeIcon } from 'renderer/assets/images/ranked_icons/silver_3.svg';
import { ReactComponent as GoldOneIcon } from 'renderer/assets/images/ranked_icons/gold_1.svg';
import { ReactComponent as GoldTwoIcon } from 'renderer/assets/images/ranked_icons/gold_2.svg';
import { ReactComponent as GoldThreeIcon } from 'renderer/assets/images/ranked_icons/gold_3.svg';
import { ReactComponent as PlatinumOneIcon } from 'renderer/assets/images/ranked_icons/platinum_1.svg';
import { ReactComponent as PlatinumTwoIcon } from 'renderer/assets/images/ranked_icons/platinum_2.svg';
import { ReactComponent as PlatinumThreeIcon } from 'renderer/assets/images/ranked_icons/platinum_3.svg';
import { ReactComponent as DiamondOneIcon } from 'renderer/assets/images/ranked_icons/diamond_1.svg';
import { ReactComponent as DiamondTwoIcon } from 'renderer/assets/images/ranked_icons/diamond_2.svg';
import { ReactComponent as DiamondThreeIcon } from 'renderer/assets/images/ranked_icons/diamond_3.svg';
import { ReactComponent as MasterOneIcon } from 'renderer/assets/images/ranked_icons/master_1.svg';
import { ReactComponent as MasterTwoIcon } from 'renderer/assets/images/ranked_icons/master_2.svg';
import { ReactComponent as MasterThreeIcon } from 'renderer/assets/images/ranked_icons/master_3.svg';
import { ReactComponent as GrandmasterIcon } from 'renderer/assets/images/ranked_icons/grandmaster.svg';
import { ReactComponent as UnrankedIcon } from 'renderer/assets/images/ranked_icons/unranked.svg';
import { ReactComponent as PendingIcon } from 'renderer/assets/images/ranked_icons/pending.svg';

const RankIcon = () => {
  const { ratingOrdinal, wins, losses, dailyRegionalPlacement } = useUserData();

  const styles = rankStyles(
    wins,
    losses,
    ratingOrdinal,
    dailyRegionalPlacement
  );

  switch (styles.icon) {
    case 'bronze_1':
      return <BronzeOneIcon className="ranked-icon" />;
    case 'bronze_2':
      return <BronzeTwoIcon className="ranked-icon" />;
    case 'bronze_3':
      return <BronzeThreeIcon className="ranked-icon" />;
    case 'silver_1':
      return <SilverOneIcon className="ranked-icon" />;
    case 'silver_2':
      return <SilverTwoIcon className="ranked-icon" />;
    case 'silver_3':
      return <SilverThreeIcon className="ranked-icon" />;
    case 'gold_1':
      return <GoldOneIcon className="ranked-icon" />;
    case 'gold_2':
      return <GoldTwoIcon className="ranked-icon" />;
    case 'gold_3':
      return <GoldThreeIcon className="ranked-icon" />;
    case 'platinum_1':
      return <PlatinumOneIcon className="ranked-icon" />;
    case 'platinum_2':
      return <PlatinumTwoIcon className="ranked-icon" />;
    case 'platinum_3':
      return <PlatinumThreeIcon className="ranked-icon" />;
    case 'diamond_1':
      return <DiamondOneIcon className="ranked-icon" />;
    case 'diamond_2':
      return <DiamondTwoIcon className="ranked-icon" />;
    case 'diamond_3':
      return <DiamondThreeIcon className="ranked-icon" />;
    case 'master_1':
      return <MasterOneIcon className="ranked-icon" />;
    case 'master_2':
      return <MasterTwoIcon className="ranked-icon" />;
    case 'master_3':
      return <MasterThreeIcon className="ranked-icon" />;
    case 'grandmaster':
      return <GrandmasterIcon className="ranked-icon" />;
    case 'pending':
      return <PendingIcon className="ranked-icon" />;
    default:
      return <UnrankedIcon className="ranked-icon" />;
  }
};

export default RankIcon;
