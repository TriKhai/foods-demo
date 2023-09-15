function Infor () {
    return (
        <section className="Infor" style={{
            padding: '100px 100px 0 100px'
        }}>
            <div className="wrap-inf" style={{
                display: "flex",
            }}>
                <img style={{
                    width: "50%"
                }} src="//theme.hstatic.net/1000371035/1000475315/14/banner-1.jpg?v=441"/>
                <div className="context"
                     style={{
                        width: "50%",
                        textAlign: "center"
                     }}>
                    <h2 style={{
                        fontSize: "32px",
                     }}>BÁNH NGON VCL</h2>
                    <p style={{
                        fontSize: "20px",
                        lineHeight: "200%",
                        fontStyle: "italic",
                        wordSpacing: "10px",
                     }}>Menu của BÁNH NGON VCL có hơn 150 hương vị khác nhau.
                    Các loại hương liệu được nhập khẩu 100% từ Nhật Bản.
                    Công thức đặc biệt cắt giảm 1/3 calories so với bánh thông thường.
                    Bạn sẽ không mất cước phí điện thoại khi đặt bánh bằng hotline xxxxxx.</p>
                </div>
            </div>           
        </section>
    );

}

export default Infor;