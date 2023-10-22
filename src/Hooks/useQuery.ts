import { useQuery } from "@apollo/client";
import { GET_PRODUCT_COMMENTS } from "../api/QueryGQL/comment.js";
export const useCommentsQuery = (id: number) => {
  const queryData = useQuery(GET_PRODUCT_COMMENTS, {
    variables: {
      productID: +id,
    },
  });

  return queryData;
};
