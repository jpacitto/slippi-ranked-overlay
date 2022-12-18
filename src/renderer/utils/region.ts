const getRegion = (region: string) => {
  if (region === 'NORTH_AMERICA') {
    return 'N. America';
  }
  if (region === 'EUROPE') {
    return 'EUROPE';
  }
  if (region === 'OCEANIA') {
    return 'Oceania';
  }
  if (region === 'SOUTH_AMERICA') {
    return 'S. America';
  }
  if (region === 'ASIA') {
    return 'Asia';
  }

  return 'null';
};

export default getRegion;
