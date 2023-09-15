import { useLocation } from "react-router-dom";
import Products from "./Products";
import data from "../data/product.json"
import Detail from "./Detail";
import { useEffect } from "react";

function Items() {
    const location = useLocation();
    const myPath = location.pathname; // Lấy đường dẫn hiện tại
    // const segments = path.split("/"); // Tách đường dẫn thành các phần
    // const myPath = segments[segments.length - 1]; // Lấy phần cuối cùng của đường dẫn

    //handle types food
    let typeCake;
    if(myPath === "/cream") {
        typeCake = "cream";
    } else if(myPath === "/gato") {
        typeCake = "gato";
    } else if(myPath === "/bread") {
        typeCake = "bread";
    } else if(myPath === "/beverage") {
        typeCake = "beverage";
    }

    // useEffect(() => {
    //     if(myPath === "/beverage")
    //         alert("Trang đang bị lỗi");
    // }, []);

    return (
        <section style={{
            marginTop: "100px",
            width: "100%"
        }}>
            {/* <div>{path}</div> */}
            {/*      */}
            <div className="wrap-cream" 
            style={{
                display: "grid",
                width: "60%",
                gridTemplateColumns: "auto auto auto",
                gap: "16px",
                padding: "10px",
                marginLeft: "50px",
                marginTop: "150px",
            }}>
                {data[typeCake].map((creams) => (
                    <Products 
                        key={creams.name}
                        name={creams.name}
                        price={creams.price}
                        image={creams.image}
                        description={creams.description}
                    />    
                ))}
            </div>       
        </section>
    );
}

export default Items;