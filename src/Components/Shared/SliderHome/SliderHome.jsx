import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const SliderHome = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "800px",
  };
  const slideImages = [
    {
      url: "https://i.ibb.co/v379NL8/photo-1494976388531-d1058494cdd8-auto-format-fit-max-q-80-blend-000000-blend-alpha-10-blend-mode-nor.jpg",
      caption: "Your Journey, Our Magic",
    },
    {
      url: "https://i.ibb.co/1GgcnKz/eric-michael-KA9-W4k0p-On4-unsplash.jpg",
      caption: "Expect the Unexpected",
    },
    {
      url: "https://i.ibb.co/1mZGBxs/campbell-3-ZUs-NJhi-Ik-unsplash.jpg",
      caption: "Discover the Road Less Ordinary",
    },
  ];
  return (
    <div className="slide-container my-5">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SliderHome;
