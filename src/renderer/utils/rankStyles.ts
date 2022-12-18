const rankStyles = (
  wins: number | null,
  losses: number | null,
  rating: number | string,
  regionalPlacement: number
) => {
  const iconPath = './src/res/ranked_icons/';
  let rankIcon = '';
  let rank = '';
  let color = null;

  if (rating === 1100 && wins === null && losses === null) {
    rankIcon = 'unranked';
    rank = 'NONE';
  } else if (rating < 766) {
    rankIcon = 'bronze_1';
    rank = 'BRONZE 1';
    color = 'rgba(224, 106, 54, 0.298)';
  } else if (rating < 914) {
    rankIcon = 'bronze_2';
    rank = 'BRONZE 2';
    color = 'rgba(224, 106, 54, 0.298)';
  } else if (rating < 1055) {
    rankIcon = 'bronze_3';
    rank = 'BRONZE 3';
    color = 'rgba(224, 106, 54, 0.298)';
  } else if (rating < 1189) {
    rankIcon = 'silver_1';
    rank = 'SILVER 1';
    color = 'rgba(181, 165, 183, 0.298)';
  } else if (rating < 1316) {
    rankIcon = 'silver_2';
    rank = 'SILVER 2';
    color = 'rgba(181, 165, 183, 0.298)';
  } else if (rating < 1436) {
    rankIcon = 'silver_3';
    rank = 'SILVER 3';
    color = 'rgba(181, 165, 183, 0.298)';
  } else if (rating < 1549) {
    rankIcon = 'gold_1';
    rank = 'GOLD 1';
    color = 'rgba(246, 165, 30, 0.298)';
  } else if (rating < 1654) {
    rankIcon = 'gold_2';
    rank = 'GOLD 2';
    color = 'rgba(246, 165, 30, 0.298)';
  } else if (rating < 1752) {
    rankIcon = 'gold_3';
    rank = 'GOLD 3';
    color = 'rgba(246, 165, 30, 0.298)';
  } else if (rating < 1843) {
    rankIcon = 'platinum_1';
    rank = 'PLATINUM 1';
    color = 'rgba(145, 232, 224, 0.298)';
  } else if (rating < 1928) {
    rankIcon = 'platinum_2';
    rank = 'PLATINUM 2';
    color = 'rgba(145, 232, 224, 0.298)';
  } else if (rating < 2004) {
    rankIcon = 'platinum_3';
    rank = 'PLATINUM 3';
    color = 'rgba(145, 232, 224, 0.298)';
  } else if (rating < 2074) {
    rankIcon = 'diamond_1';
    rank = 'DIAMOND 1';
    color = 'rgba(93, 223, 244, 0.298)';
  } else if (rating < 2137) {
    rankIcon = 'diamond_2';
    rank = 'DIAMOND 2';
    color = 'rgba(93, 223, 244, 0.298)';
  } else if (rating < 2192) {
    rankIcon = 'diamond_3';
    rank = 'DIAMOND 3';
    color = 'rgba(93, 223, 244, 0.298)';
  } else if (rating < 2275 && regionalPlacement === null) {
    rankIcon = 'master_1';
    rank = 'MASTER 1';
    color = 'rgba(104, 71, 186, 0.298)';
  } else if (rating < 2350 && regionalPlacement === null) {
    rankIcon = 'master_2';
    rank = 'MASTER 2';
    color = 'rgba(104, 71, 186, 0.298)';
  } else if (rating >= 2350 && regionalPlacement === null) {
    rankIcon = 'master_3';
    rank = 'MASTER 3';
    color = 'rgba(104, 71, 186, 0.298)';
  } else if (rating >= 2192 && regionalPlacement !== null) {
    rankIcon = 'grandmaster';
    rank = 'GRANDMASTER';
    color = 'rgba(229, 29, 19, 0.298)';
  } else if (rating === 'pending') {
    rankIcon = 'pending';
    rank = 'PENDING';
  }

  return {
    rankIcon: `${iconPath}${rankIcon}.svg`,
    rankName: rank,
    color,
  };
};

export default rankStyles;
