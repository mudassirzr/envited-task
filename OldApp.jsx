import { Container, Hero, EventHeader, Invite } from "components";

function App() {
  return (
    <Container>
      <Hero imgUrl={"/cake.png"} imgAltText={"Birthday Cake"} />

      <div className="px-6">
        <EventHeader eventTitle={"Birthday Party"} hostedBy={"Mihaelo"} />
        <Invite responses={13} />
      </div>
    </Container>
  );
}

export default App;
