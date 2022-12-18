import useUserData from '../../redux/hooks/useUserData';
import rankStyles from '../../utils/rankStyles';

const RankIcon = () => {
  const { ratingOrdinal, wins, losses, dailyRegionalPlacement } = useUserData();

  const styles = rankStyles(
    ratingOrdinal,
    wins,
    losses,
    dailyRegionalPlacement
  );

  console.log('iconPath:', styles.iconPath);

  return <img src={styles.iconPath} alt={styles.division} />;
};

export default RankIcon;
