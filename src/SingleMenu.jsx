import React from "react";

const SingleMenu = ({ img, title, price, desc }) => {
  return (
    <>
      <main>
        <div className="menu-item">
          <img src={img} alt={title} className="img" />
          <div className="item-info">
            <header>
              <h5>{title}</h5>
              <p className="item-price">{price}</p>
            </header>
          </div>
          <p>{desc}</p>
        </div>
      </main>
    </>
  );
};

export default SingleMenu;
