import { useState } from "react";

import mockApi from "../api/mockApi";

export default () => {
  const [isLoading, setIsLoading] = useState(true);

  const updateItem = async (resource, body) => {
    try {
      const response = await mockApi.patch(resource, body);
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      window.alert("Something happened, try again later");
    }
  };

  return [updateItem, isLoading];
};
