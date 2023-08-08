import React from "react";
import SingleMenu from "./SingleMenu";

const Menu = ({ menues }) => {
  return (
    <div className="section-center">
      {menues.map((menu) => {
        return <SingleMenu key={menu.id} {...menu} />;
      })}
    </div>
  );
};

export default Menu;
