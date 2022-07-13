import PropTypes from 'prop-types'
const imageCorona =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqZnTUOSdUFkWYjoVypByrSd6ZMT0cFjV2g&usqp=CAU";
function Card({country,totalcases,totaldeaths,totalRecovered}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
      <img className="w-full" src={imageCorona} alt="Country" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
            {country}
        </div>
        <p className="text-gray-800">
            Total Case :{totalcases}
        </p>
        <p className="text-gray-800">
            Total Deaths :{totaldeaths}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="rounded-full inline-block bg-gray-200 px-3 py-1 font-semibold text-sm text-gray-700 mr-2 mb-2">
            {totalRecovered} Recovered
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
    country: PropTypes.string,
    totalcases: PropTypes.string,
    totaldeaths: PropTypes.string,
    totalRecovered: PropTypes.string,
  };
  Card.defaultProps = {
    country: "",
    totalcases: "",
    totaldeaths: "",
    totalRecovered: ""
  };
export default Card;
