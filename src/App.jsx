import PokeCard from "./components/PokeCard";
import "./App.css";

const App = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-4xl font-bold uppercase">Pokedex</h1>
      <PokeCard />
    </div>
  );
};
export default App;
