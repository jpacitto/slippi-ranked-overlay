import useUserData from '../../redux/hooks/useUserData';
import rankStyles from '../../utils/rankStyles';

const RankIcon = () => {
  const userData = useUserData();
  const styles = rankStyles(
    userData.ratingOrdinal,
    userData.wins,
    userData.losses,
    userData.dailyRegionalPlacement
  );

  return <img src={styles.rankIcon} alt={styles.rankName} />;
};

export default RankIcon;
