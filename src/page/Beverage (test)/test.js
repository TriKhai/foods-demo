import { useLocation } from "react-router-dom";
import datajs from "./tesst.json"


function Test() {
    const location = useLocation();
    const path = location.pathname; // Lấy đường dẫn hiện tại
    const segments = path.split("/"); // Tách đường dẫn thành các phần
    const d = segments[segments.length - 1]; // Lấy phần cuối cùng của đường dẫn
    let x;
    // Dùng biến d để làm gì đó với dữ liệu
    if(d==="beverage2") {
        x = "mang1";

    }else if(d==="beverage") {
        x = "mang2";
    }
  
    return (
      <div style={{marginTop: "100px"}}>
        {datajs[x].map((y, index) => (
            <div>
                <div>{y.name}</div>
            </div>
        ))}
      </div>
    );
  }

export default Test;