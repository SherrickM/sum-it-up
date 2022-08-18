// import gql from 'graphql-tag';
import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

export function useGetSummary(data) {
    return useQuery(["getSummary", data], async () => {
      const { getSummary } = await graphQLClient.request(
        gql`
          query getSummary(text: String!, sentnum: Int) {
            getPost(text: $data: text) {
              test
              sentnum
            }
          }
        `,
        { postId }
      );
      return getPost;
    });
  }z