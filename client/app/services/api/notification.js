import { graphql } from "../gateway/graphql";

const getAll = () => graphql`
  query getNotifications {
    notifications(order: "reverse:createdAt") {
      id,
      message,
      type
    }
  }`();

export const NotificationApi = {
  getAll
};
