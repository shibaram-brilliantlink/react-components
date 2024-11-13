import styled from "styled-components";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import StarRating from "./components/star-rating/StarRating";
import QrGenerator from "./components/qr-generator/QrGenerator";

function App() {
  return (
    <>
      <h1>List of react components</h1>
      <Div componentName="01 Accordion">
        <Accordion />
      </Div>
      <Div>
        <ImageSlider />
      </Div>
      <Div>
        <StarRating />
      </Div>
      <Div>
        <LoadMoreData />
      </Div>
      <Div>
        <QrGenerator />
      </Div>
    </>
  );
}

export default App;

const Div = styled.div<{ componentName?: string }>`
  border-bottom: 1px solid white;
  text-align: left;
  padding: 40px;
  &::before {
    content: "${(props) => props.componentName}";
    color: white;
    width: 400px;
  }
`;
