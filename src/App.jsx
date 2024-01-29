import "./App.css";
import Banner from "./componets/Banner";
import Nav from "./componets/Nav";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
    </Container>
  );
}
const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc() (3.5w + 5px);
`;
export default App;
