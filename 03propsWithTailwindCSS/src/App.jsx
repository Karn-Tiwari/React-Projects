import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="text-4xl text-center bg-blue-200 pb-2 rounded-xl text-black">
        Testing tailwind
      </h1>
      <Card
        name={"Catty"}
        description={
          "Hi! I am a doctor in New Delhi in ortho surgery specialist"
        }
        profile={"Doctor"}
      />
      <Card name={"Danny"} />
    </>
  );
}

export default App;
