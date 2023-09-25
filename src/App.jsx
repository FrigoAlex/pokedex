import "./App.css";
import useMons from "./hooks/useMons";

const App = () => {
  const mons = useMons()

  return (
    <h1>
      {mons.map((x) => {
        const specie = x.pokemon_species;
        return (
          <>
            <h1>{x.entry_number}</h1>
            <h2>{specie.name}</h2>
            <a href={specie.url}>link</a>
          </>
        );
      })}
    </h1>
  );
};
export default App;
