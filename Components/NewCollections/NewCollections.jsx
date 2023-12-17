import React from "react";
import "./NewCollections.css";
import new_colletion from "../Assets/new_collections";
import { Item } from "../Item/Items";

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_colletion.map((item, i) => {
          return (
            <Item
              Key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
