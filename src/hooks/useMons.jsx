import axios from "axios";
import { useState, useEffect } from "react";

const useMons = () => {
  const [mons, setMons] = useState([]);
  const getPokedata = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokedex/1/");

    console.log(data.pokemon_entries.url);

    setMons(data?.pokemon_entries);
  };
  useEffect(() => {
    getPokedata();
  }, []);

  return mons;
};

export default useMons;
