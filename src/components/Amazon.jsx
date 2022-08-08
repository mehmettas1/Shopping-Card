import React from "react";
import list from "../data";
import Card from "./Card";
import "../styles/amazon.css"




const Amazon = () => {

  return (
    <section>
        {list.map((item)=>(
                <Card key={item.id} item = {item}/>
            )
        )}
    </section>
  )
}

export default Amazon