import { graphql } from "../gateway/graphql";

const getAll = () => graphql`
  query getNotifications {
    notifications {
      id,
      message,
      type
    }
  }`();

export const NotificationApi = {
  getAll
};
