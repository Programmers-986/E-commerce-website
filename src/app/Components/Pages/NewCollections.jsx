import React from "react";
import new_collection from '../Assets/new_collections'
import Item from './Item'

const NewCollections = () => {
  return(
    <>
    <div className="">
      <h1> </h1>
      <hr />
      <div className="">
        {new_collection.map((item,i) => {
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

        })}

      </div>
    </div>
    </>

  );

}