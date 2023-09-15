function Detail({id, name, price, image, description, closeOverlay}) {
    return (
        <div className="overlay" 
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            // display: "none",
            // alignItems: "center",
            // justifyContent: "center",
        }}>
            <div className="overlay-ct"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60%",
                height: "60%",
                backgroundColor: "white",
                padding: "20px",
                border: "1px solid #000",
                borderRadius: "8px",
                display: "grid",
                gridTemplateColumns: "auto auto"
            }}> 
                <div className="img-item" style={{width: "70%", }}><img src={image} alt={name} style={{  maxWidth: "100%", maxHeight: "100%"}}></img></div>
                <div className="cts-items">
                    <span>{name}</span>
                    <span style={{display: "block"}}>Price : {price + ".000" + " vnđ"}</span>{/*votriqua */}
                    <p>{description}</p>
                    <button onClick={closeOverlay}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;