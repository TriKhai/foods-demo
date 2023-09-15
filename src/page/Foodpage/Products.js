import { styled } from "styled-components";
import Detail from "./Detail";
import { useState } from "react";

function Products ({id, name, price, image, description}) {
    const [showOverlay, setShowOverlay] = useState(false);
    const openOverlay = () =>{
        setShowOverlay(true);
    }

    const closeOverlay = () => {
        setShowOverlay(false);
    }
    return (
        <>
            <Product>
                <img src={image} alt={name} 
                    style={{
                        width: "100%",
                    }}/>
                <div className="info-item">
                    <h3>{name}</h3>
                    <span className="price-item">Price: {price + ".000" + " vnđ"} </span>
                    <button 
                        onClick={openOverlay}
                        style={{
                            display: "block",
                            fontSize: "28px",   
                            margin: "20px auto 10px auto",
                            borderRadius: "8px",
                            fontSize: "16px",
                            // width: "10px",
                            }}>Detail
                    </button>
                </div>
            </Product>
            {showOverlay && (<Detail 
                key={name}
                name={name}
                price={price}   
                image={image}
                description={description}
                closeOverlay={closeOverlay}
            />)}
        </>
    );
}

export default Products;

const Product = styled.div`
    border: 4px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ccc;

    &:hover {
        border: 4px solid #A7727D;
    }

    .info-item {
        text-align: center;
        transform: translateY(65px);
        padding: 10px 0 16px 0;
        transition: transform 0.4s;
        // background: red;
        // color: white;    
        cursor: pointer;
        // box-shadow: 6px 2px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .info-item:hover{
        transform: translateY(-4px);
        // background: linear-gradient(90deg, #2ecc71, #3498db);
        // box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    }

    .info-item h3{
        margin-bottom: 10px; 
    }

    .price-item{
        font-size: 18px;
    }

    // span {
    //     // padding-bottom: 10px;
    //     margin: 10px 0 10px 0;
    // }
`