import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

//Creating genetic hook

interface FetchResponse <T>{
    count: number;
    results: T[];
}
const useData = <T>(endpoint:string, requestCofig?:AxiosRequestConfig, deps?: any[])=> {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {

        const contoller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchResponse<T>>(endpoint,{ signal: contoller.signal, ...requestCofig })
        .then((res) => {
            setData(res.data.results)
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });
           
              
          return () => contoller.abort();
        }, deps ? [...deps] : []);
    
    return {data, error, isLoading};
}

export default useData;