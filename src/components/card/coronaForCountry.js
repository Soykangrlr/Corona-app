import axios from "axios";
import { useState, useEffect } from "react";
import { API_TOKEN, API_URL } from "../../const";
import Card from "./card";

function CoronaForCountry() {
  const [data, setData] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
    setLoading(true);
    const response = await axios.get(
      `${API_URL}countriesData?country=${queryText}`,
      {
        headers: {
          authorization: API_TOKEN,
        },
      }
    );
    setData(response.data.result);
    setLoading(false);
    
  };
  useEffect(() => {
    loadData();
  }, [queryText]);
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          className="w-full shadow appearance-none border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-purple-600"
          placeholder="Ara..."
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {loading ? <p>Laoading....</p>:
        data.map((item ,i ) => {
          return (
            <Card key={i}
              country={item.country}
              totalcases={item.totalCases}
              totalRecovered={item.totalRecovered}
              totaldeaths={item.totalDeaths}
            />
          );
        })}
      </div>
    </>
  );
}
export default CoronaForCountry;
