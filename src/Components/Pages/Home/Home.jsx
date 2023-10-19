import Contact from "../../Shared/Contact/Contact";
import ChooseUS from "../../Shared/SliderHome/ChooseUS/ChooseUS";
import SliderHome from "../../Shared/SliderHome/SliderHome";
import Brand from "../Brand/Brand";

const Home = () => {
  return (
    <div>
      <SliderHome></SliderHome>
      <Brand></Brand>
      <ChooseUS></ChooseUS>
      <Contact></Contact>
    </div>
  );
};

export default Home;
