import { gql } from "@apollo/client";

export const GET_ALL_COMMENTS = gql`
  query {
    getAllComments {
      id
      title
      description
      productID
    }
  }
`;
export const GET_PRODUCT_COMMENTS = gql`
  query getComment($productID: Int) {
    getComment(productID: $productID) {
      id
      title
      description
      productID
    }
  }
`;
export const CREATE_COMMENT = gql`
  mutation createComment($input: CommentInput) {
    createComment(input: $input) {
      title
      description
      productID
    }
  }
`;
