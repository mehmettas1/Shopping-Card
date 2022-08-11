import React from "react";
import list from "../data";
import Card from "./Card";
import "../styles/amazon.css"




const Amazon = ({handleClick}) => {

  return (
   <div className="container">
     <section>
        {list.map((item)=>(
                <Card key={item.id} item = {item} handleClick={handleClick}/>
            )
        )}
    </section>
   </div>
  )
}

export default Amazon