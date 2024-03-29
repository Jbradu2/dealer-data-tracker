import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;
export const ADD_DEALER = gql`
mutation AddDealer($firstName: String!, $lastName: String!, $email: String!) {
  addDealer(firstName: $firstName, lastName: $lastName, email: $email) {
    firstName
    lastName
    email
  }
}
`;

export const REMOVE_DEALER = gql`
mutation removeDealer ($_id: ID!) {
  removeDealer(_id: $_id) {
    _id
    firstName
    lastName
    email
    createdAt
  }
}
`;

export const ADD_REPORT = gql`
mutation addReport($dealerId: String!, $handsDealt: Int!, $promotionTaken: Int!, $moneyTaken: Int!) {
  addReport(dealerId: $dealerId, handsDealt: $handsDealt, promotionTaken: $promotionTaken, moneyTaken: $moneyTaken) {
    dealerId
    handsDealt
    promotionTaken
    moneyTaken
  }
}
`;

export const SEND_EMAIL = gql`
mutation sendEmail($input: EmailInput!) {
  sendEmail(input: $input)
}
`