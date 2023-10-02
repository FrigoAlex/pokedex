import useMons from "../../hooks/useMons";

const PokeCard = () => {
  const mons = useMons();
  return (
    <div>
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
    </div>
  );
};
export default PokeCard;
