import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import UserData from '../../types/userData';

const slippiEndpoint =
  'https://gql-gateway-dot-slippi.uc.r.appspot.com/graphql';

const profilePayload = (slippiId: string) => {
  return {
    operationName: 'AccountManagementPageQuery',
    variables: {
      cc: slippiId.toUpperCase(),
      uid: slippiId.toUpperCase(),
    },
    query: `fragment userProfilePage on User {
        displayName
        status
        rankedNetplayProfile {
          ratingOrdinal
          ratingUpdateCount
          wins
          losses
          dailyGlobalPlacement
          dailyRegionalPlacement
          continent
          characters {
            character
            gameCount
          }
        }
      }
      query AccountManagementPageQuery($cc: String!) {
        getConnectCode(code: $cc) {
          user {
            ...userProfilePage
          }
        }
      }`,
  };
};

export const slippiApi = createApi({
  reducerPath: 'slippiApi',
  baseQuery: fetchBaseQuery({ baseUrl: slippiEndpoint }),
  tagTypes: [],
  endpoints: (builder) => ({
    getSlippiProfile: builder.query<UserData, string>({
      query(slippiTag) {
        return {
          url: 'slippi',
          method: 'POST',
          body: profilePayload(slippiTag),
        };
      },
    }),
  }),
});

export const { useGetSlippiProfileQuery } = slippiApi;
