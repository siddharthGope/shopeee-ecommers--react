import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const productItem = ({ id, image, name, price }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/products/${id}`} className="text-gray-700 cursor-pointer">
      <div className="h-[300px] overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className=" font-medium text-sm">
        {currency} {price}
      </p>
    </Link>
  );
};

export default productItem;
