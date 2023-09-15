import { styled } from "styled-components";

function AboutP() {
    return (
        <section className="aboutp" style={{
            padding: '100px 100px 0 100px'
        }}>
            <Wrap 
                //  style={{
                //     display: "grid",
                //     gridTemplateColumns: "auto auto auto auto",
                //     textAlign: "center"
                //  }}
                >
                <div className="item">
                    <img src="//theme.hstatic.net/1000371035/1000475315/14/icon_01.png?v=441"/>
                    <h3 className="title" >Bánh Kem</h3>
                    <p className="text">Nếu bạn đang có dự định thưởng thức một bữa tiệc bánh ngọt ngập tràn trong 
                        các hương vị thiên nhiên. Hãy đến với POEME Bakery, tận hưởng giây phút nhẹ
                         nhàng, thư thả trong không gian ấm cúng, thân thương.</p>
                </div>
                <div className="item">
                    <img src="//theme.hstatic.net/1000371035/1000475315/14/icon_02.png?v=441"/>
                    <h3 className="title" >Bánh Mỳ, Cookies</h3>
                    <p className="text">Nhờ vào nguyên liệu tươi ngon và bàn tay chế biến khéo léo của đội ngũ đầu 
                    bếp, các sản phẩm bánh được ra lò thơm ngon, chất lượng. Chẳng những ngon miệng, đẹp mắt, giàu 
                    chất dinh dưỡng mà còn mang đến sự hứng thú cho người thưởng thức.</p>
                </div>
                <div className="item">
                    <img src="//theme.hstatic.net/1000371035/1000475315/14/icon_03.png?v=441"/>
                    <h3 className="title" >Bánh Gato</h3>
                    <p className="text">Là một loại bánh mang nhiều ý nghĩa quan trọng trong dịp kỷ niệm của mỗi 
                    chúng ta. Hãy dành tặng người thân yêu một chiếc bánh Gato thật đẹp kèm lời chúc ý nghĩa bạn nhé! 
                    POEME Bakery rất hận hạnh được thay bạn làm điều đó.</p>
                </div>
                <div className="item">
                    <img src="//theme.hstatic.net/1000371035/1000475315/14/icon_04.png?v=441"/>
                    <h3 className="title" >Nguyên Liệu</h3>
                    <p className="text">Sử dụng các nguyên liệu chế biến chất lượng, tươi mới, theo tiêu chuẩn quốc tế, 
                    được chọn lựa kỹ lưỡng từ các nhà cung cấp đáng tin cậy. Chúng tôi đảm bảo là sẽ đem đến cho khách 
                    hàng những chiếc bánh thơm ngon, chất lượng hảo hạng nhất.</p>
                </div>
            </Wrap>

        </section>
    );

}

export default AboutP;

// const styleTitle = {
//     fontSize: "25px"
// };

const Wrap = styled.div`
    // background-color: red;
    display: grid;
    grid-template-columns: auto auto auto auto;
    text-align: center;
    
    .item {
        margin: 0 10px 0 10px;
    }

    .title {
        font-size: 25px;
    }
    
    .text {
        word-spacing: 8px;
        font-size: 16px;
    }
`
