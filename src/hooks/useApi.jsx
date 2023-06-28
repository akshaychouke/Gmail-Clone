import API from "../services/api";
import { useState } from "react";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIdLoading] = useState(false);
  const call = async (payload) => {
    setResponse(null);
    setError("");
    setIdLoading(true);
    try {
      let res = await API(urlObject,payload);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIdLoading(false);
    }
  };

  return { call, response, error, isLoading };
};

export default useApi;
