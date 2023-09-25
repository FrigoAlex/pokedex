import axios from "axios";
import { useState, useEffect } from "react";

const useMons = () => {
  const [mons, setMons] = useState([]);
  const getPokedata = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokedex/2/");

    setMons(data?.pokemon_entries);
  };
  useEffect(() => {
    getPokedata();
  }, []);

  return mons;
};

export default useMons;
