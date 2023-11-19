import React from "react";

const MenuItemsList = ({ menuItems, increDecre }) => {
  const { _id, name, description, image, qty, price } = menuItems;
  return (
    <>
      <article key={_id}>
        <div className="card-3">
          <div className="card-image-3">
            <img src={`/images/${image}`} alt="Image" />
          </div>
          <div className="content-3">
            <div className="top-content-3">
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
            <div className="bottom-content-3">
              <div className="price-3">
                <h4>Price - ₹{price}</h4>
                <h4>total :{qty * price} </h4>
              </div>
              <div className="amount">
                <button onClick={() => increDecre(_id).decrementing()}>
                  -
                </button>
                <button onClick={() => increDecre(_id).incrementing()}>
                  +
                </button>
                <h4>{qty}</h4>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </article>
    </>
  );
};

export default MenuItemsList;
