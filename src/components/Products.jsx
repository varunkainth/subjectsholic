import React,{useState} from "react";
import Products from "./Json/products_list";
import "./Products.css";
const About = ({handleAddProduct}) => {

  const [data, setdata] = useState(Products)
  return (
    <>
      <div className="products">
        {data.map((curentproduct,index)=>{
           return <>
              <div className="card" key={index}>
                <div>
                  <img
                    src={curentproduct.images.img1}
                    alt=""
                    className="product_image"
                  />
                </div>
                <div>
                  <h3 className="product_name">{curentproduct.name}</h3>
                </div>
                
                <div  className="product_price">
                  
                  
                  <span className="strike">{curentproduct.currency}</span><span className="strike">{curentproduct.mrp}</span>
                  &emsp;<span>{curentproduct.currency}</span>{curentproduct.price}
                </div>
                <div>
                  <button className="product_add_btn" onClick={()=>handleAddProduct(curentproduct)}>Add To Cart</button>
                </div>
              </div>
            </>
        
        })}
      </div>
    </>
  );
};

export default About;
