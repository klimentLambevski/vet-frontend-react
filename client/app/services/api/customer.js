import { graphql } from "../gateway/graphql";

const getAll = () => graphql`{
  customers(limit: 10) {
    user {
      id
      email
      name
      surname
    }
  }
}`();

//TODO rename to save
const saveCustomer = (customer) => graphql`
  mutation addCustomer($user: UserInput){
    createCustomer(customer: {user: $user}) {
      errors {
        message
      }
      customer {
        user {
          id
          email
          name
          surname
        }
      }
    }
  }
`({ user: customer });

export const CustomerApi = {
  getAll,
  saveCustomer
};
