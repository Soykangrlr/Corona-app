import { useState } from "react";
import PropTypes from "prop-types";
import Logo from "./logo";
import Menuıtem from "./menuıtem";

const Header = ({ activetitle, onMenuChange }) => {
  const [_activetitle, setActiveTitle] = useState(activetitle);
  const [menuıtem] = useState([
    {
      title: "Ülkelere Göre Corana Değerleri",
      value: 1,
    },
    {
      title: "Toplam Corana Değerleri",
      value: 2,
    },
    {
      title: "Kıtalara Göre Corana Değerleri",
      value: 3,
    },
  ]);
  return (
    <nav className="bg-gray-800 borde-gray-200 px-2 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <div className="w-auto block">
          <ul className="flex flex-row  font-semibold text-xs space-x-8 mt-0">
            {menuıtem.map((item) => {
              return (
                <Menuıtem
                  key={item.value}
                  title={item.title}
                  active={_activetitle === item.title}
                  onClick={title=>{
                    setActiveTitle(title)
                    onMenuChange(item.value)
                }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  activetitle: PropTypes.string,
  onMenuChange: PropTypes.func,
};
Header.defaultProps = {
  activetitle: "Ülkelere Göre Corana Değerleri",
  onMenuChange: () => null,
};
export default Header;
