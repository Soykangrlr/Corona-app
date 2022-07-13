import PropTypes from "prop-types";

function Menuıtem({ title, onClick, active }) {
  return (
    <li>
      <a
        onClick={() => onClick(title)}
        className={`block cursor-pointer border-0 py-2 pr-4 pl-3 
        ${active ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 `}
      >
        {title}
      </a>
    </li>
  );
}
Menuıtem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
Menuıtem.defaultProps = {
  title: "Corona App",
  active: false,
  onClick: () => null,
};
export default Menuıtem;
