interface Character {
  character: string;
  gameCount: number;
}

interface NetplayProfile {
  characters: Character[];
  continent: string;
  dailyGlobalPlacement: number;
  dailyRegionalPlacement: number;
  losses: number;
  wins: number;
  ratingUpdateRound: number;
  ratingOrdinal: number;
}

interface User {
  displayName: string;
  status: string;
  rankedNetplayProfile: NetplayProfile;
}

interface GetConnectCode {
  user: User;
}

interface Data {
  getConnectCode: GetConnectCode;
}

interface UserData {
  data: Data;
}

export default UserData;
