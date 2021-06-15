import { useState } from "react";

import mockApi from "../api/mockApi";

export default () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState('');

  const getItems = async (resource) => {
    try {
      const response = await mockApi.get(resource);
      setIsLoading(false);
      setResults(response.data);
    } catch (error) {
      // setErrorMessage('Couldn\'t load resource');
      window.alert("Something happened, try again later");
      // setIsLoading(false);
    }
  };

  return [getItems, results, isLoading];
};
