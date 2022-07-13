import { useState,useEffect } from "react";
import { API_TOKEN, API_URL } from "../../const";
import axios from "axios";
function TotalData() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const loadData= async()=>{
    setLoading(true)
    const resp=await axios.get(`${API_URL}totalData`,
    {
      headers: {
        authorization: API_TOKEN,
      },
    }
  );
  setData(resp.data.result)
  setLoading(false)
  console.log(resp);
  }
  useEffect(() => {
    loadData()
    
  }, []);
  return (
  <div className="flex flex-col items-center justify-center h-full mt-40">
    {loading ? <h1>Loading...</h1> : 
  <>
  <h1 className="text-6xl text-gray-500 mb-4">Total Case : {data?.totalCases}</h1>
  <h1 className="text-6xl text-gray-500 mb-4">Total Deaths : {data?.totalDeaths}</h1>
  <h1 className="text-6xl text-gray-500 mb-4">Total Recovered : {data?.totalRecovered}</h1>
  </>
  }
  </div>)
}
export default TotalData;
