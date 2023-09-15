import { Link } from "react-router-dom";
import styled from "styled-components";
// https://poemecake.vn/collections/all
function Navbar () {
    return(
        <HeaderPane>
            <div className="menu-header">
                <div className="icon-header"><ion-icon name="disc"></ion-icon></div>
                <ul className="menu">
                    <li className="tab-menu"><Link to="/">Home</Link></li>
                    <li className="tab-menu tab-food">
                        <a>Food<ion-icon name="caret-down-outline"></ion-icon></a>
                        <ul className="sub-food">
                            <li><Link to="/cream" >Bánh Kem</Link></li>
                            <li ><Link to="/bread" >Bánh Mỳ</Link></li>
                            <li ><Link to="/gato" >Bánh Gato</Link></li>
                        </ul>
                    </li>
                    <li className="tab-menu"><Link to="/beverage">Beverage</Link></li>
                </ul>
            </div>
            <div className="login-icon" style={{
                paddingRight: "50px",
            }}>
                <span className="icon"><ion-icon name="search-outline"></ion-icon></span>
                <span className="icon"><ion-icon name="bag-outline"></ion-icon></span>
                <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
            </div>
        </HeaderPane>

    );
}

export default Navbar;

const HeaderPane = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    background-color: #A7727D;
    height: 50px;

    //home - food - Beverage 
    .menu{
        display: flex;
        list-style: none;
    }

    .menu li a{
        margin: 10px;
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    }

    .menu > li:hover > a {
        color: #F9F5E7;
    }

    .menu-header {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .login-icon {
        display: flex;
    }

    .login-icon span {
        margin: 4px;
        font-size: 28px;
        padding: 0 5px 0 5px;
    }

    .icon-header {
        font-size: 30px;
        margin-left: 50px;
    }

    // sub food
    .tab-menu {
        position: relative;
    }

    .sub-food {
        display: none;
        position: absolute;
        list-style: none;
        background-color: #A7727D;
        border: 3px solid #000;
        border-radius: 8px;
        padding: 0;
        width: 200px;
        top: 45px;
        left: 10px;
    }

    .sub-food li a{
        font-weight: 400;
        margin-bottom: 20px;
        padding: 4px 8px 4px 8px;
    }

    .tab-food:hover .sub-food{
        display: block;
    }

    .sub-food :hover a{
        color: #F9F5E7;
        font-weigth: 500;
        border: 2px solid #F9F5E7;
        border-radius: 8px;
    }
`