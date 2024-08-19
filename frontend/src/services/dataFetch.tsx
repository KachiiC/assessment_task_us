import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useDataFetch = () => {
  const { region } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [resultsData, setResultsData] = useState({});

  const resetData = () => {
    setIsLoading(true);
    setHasError(false);
    setResultsData({});
  };

  useEffect(() => {
    const fetchUrl = `${process.env.REACT_APP_API_ENDPOINT}/${region}`;

    resetData()

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setResultsData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("useDataFetch error", err);
        setHasError(true);
        setIsLoading(false);
      });
  }, [region]);

  return {
    isLoading,
    hasError,
    resultsData
  };
};
