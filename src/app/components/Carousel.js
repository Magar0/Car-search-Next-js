import Carousel from 'react-bootstrap/Carousel';
import styles from "@/app/styles/card.module.css"
import Image from 'next/image';



const MyCarousel = (props) => {
    const { img, height, width, interval } = props
    console.log(img);
    return (
        <Carousel interval={interval} style={{ width: "fit-content" }} >

            {
                img.map((ele, ind) => {
                    return (
                        <Carousel.Item key={ind}>
                            {console.log("here", ele)}
                            <Image src={ele} className={styles.img} alt="img" height={height} width={width} />
                        </Carousel.Item>
                    )
                })
            }

            {/* 
            <Carousel.Item >
                <Image src={img[0]} className={styles.img} alt="img" height={height} width={width} />
            </Carousel.Item>
            <Carousel.Item >
                <Image src={img[1]} className={styles.img} alt="img" height={height} width={width} />
            </Carousel.Item> */}
        </Carousel>
    );
}

export default MyCarousel;