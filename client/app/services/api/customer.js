import {graphql, handleMutation} from "../gateway/graphql"; import * as _ from "lodash";

const getAll = () => graphql`
  query getCustomers{
    customers(order: "reverse:createdAt") {
      id
      user {
        id
        email
        name
        surname
        referral
      }
    }
  }`();

const getById = (customerId) => graphql`
  query getCustomer($id: String!) {
    customer(id: $id) {
      id
      user {
        id
        email
        name
        surname
        referral
        
      }
      patients(order: "reverse:createdAt") {
        id
        birthDate
        gender
        mbr
        microchip
        name
        race
        type {
          name
          immunizations {
            id
            name
            description
          }
        }
        createdAt
        updatedAt
      }
    }
  }`({id: customerId});

//TODO rename to save
const saveCustomer = (customer) => handleMutation(graphql`
  mutation addCustomer($user: UserInput!){
    createCustomer(customer: {user: $user}) {
      errors {
        message
      }
      customer {
        id
        user {
          id
          email
          name
          surname
        }
      }
    }
  }
`({user: customer.user}), 'createCustomer');

const updateCustomer = (customer, customerId) => handleMutation(graphql`
  mutation updateCustomer($user: UserInput!, $customerId: String!){
    updateCustomer(customer: {user: $user}, customerId: $customerId) {
      errors {
        message
      }
      customer {
        id
        user {
          id
          email
          name
          surname
        }
      }
    }
  }
`({user: _.pick(customer.user, ['email', 'name', 'surname']), customerId: customerId}), 'updateCustomer');

const deleteCustomer = ({id}) => handleMutation(graphql`
  mutation deleteCustomer($customerId: String!) {
    
  }
`(), 'deleteCustomer');

export const CustomerApi = {
  getAll,
  saveCustomer,
  updateCustomer,
  getById
};
