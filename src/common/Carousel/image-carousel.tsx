import React from "react";
import Slider from "react-slick";
import { SvgIcon } from "../SvgIcon"; // Assuming your SvgIcon component works for local SVGs
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Using Ant Design icons

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Arrow
const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                left: "-0px",
                zIndex: 1,
                width: "40px",
                height: "40px",
                backgroundColor: "#18216d", // Dark background
                borderRadius: "50%",
            }}
            onClick={onClick}
        >

        </div>
    );
};

// Custom Next Arrow
const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: "-0px",
                zIndex: 1,
                width: "40px",
                height: "40px",
                backgroundColor: "#18216d", // Dark background
                borderRadius: "50%",
            }}
            onClick={onClick}
        >

        </div>
    );
};

// Slider settings
const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

// Main Component
const ImageCarousel = ({ images }: { images: string[] }) => {
    // If only one image, return SvgIcon directly
    if (images.length === 1) {
        return <SvgIcon src={images[0]} width="100%" height="100%" />;
    }

    // Else, return slider
    return (
        <Slider {...settings}>
            {images.map((src, idx) => (
                <div key={idx} >
                    <SvgIcon src={src} width="84%" height="600px" />
                </div>
            ))}
        </Slider>
    );

};

export default ImageCarousel;
