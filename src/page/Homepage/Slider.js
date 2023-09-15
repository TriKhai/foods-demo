import styled from "styled-components";

function Slider () {
    return (
        <section className="slider" style={{
            position: "relative",
            width: "100%",
        }}>
            <div className="bg" style={
            {
                backgroundImage : 'url(//theme.hstatic.net/1000371035/1000475315/14/parallax1.png?v=441)',
                backgroundSize: 'cover',
                height: '600px',
                width: '100%',
                // xử lí cái chữ ra ở trong
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }
            } >
                <h1 style={{
                    marginBottom: 0,
                    fontSize: '48px',
                    }}>Delicious Foods</h1>
                <span style={{
                    fontSize: '28px'
                }}>Promotion buy 1 get 1 free</span>
            </div>
        </section>  
    );
}
export default Slider;