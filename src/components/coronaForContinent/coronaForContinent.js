import axios from "axios";
import { useState, useEffect } from "react";
import { API_TOKEN, API_URL } from "../../const";

function CoronaForContinent() {
  const [headers] = useState(
   [ {
      title: "Continent",
      value: "continent",
    },
    {
      title: "Active Cases",
      value: "activeCases",
    },
    {
      title: "New Cases",
      value: "newCases",
    },
    {
      title: "Total Cases",
      value: "totalCases",
    },
    {
      title: "Total Deaths",
      value: "totalDeaths",
    },
    {
      title: "New Deaths",
      value: "newDeaths",
    },
    {
      title: "Total Recovered",
      value: "totalRecovered",
    }]
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = async () => {
    setLoading(true);
    const resp = await axios.get(`${API_URL}continentData`, {
        headers: {
          authorization: API_TOKEN,
        },
      })
    setData(resp.data.result);
    console.log(resp.data.result);
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="flex flex-col">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <h1 className="mb-3 font-bold text-xl">Corona Table</h1>
          <div className="overflow-hidden shadow-md">
            <table className=" min-w-full">
              <thead className="bg-teal-800">
                <tr>
                  {headers.map((item) => {
                    return (
                      <th
                        key={item.title}
                        className="py-3 px-6 text-xs font-medium text-white text-left uppercase "
                      >
                        {item.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => {
                  return (
                    <tr key={i} className="bg-teal-600">
                      {headers.map((subItem) => {
                        return (
                          <td
                            key={subItem.value}
                            className="px-4 py-4 text-white font-medium text-sm whitespace-nowrap"
                          >
                            {item[subItem.value]}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
export default CoronaForContinent;
