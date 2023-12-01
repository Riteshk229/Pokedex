import React, { useEffect, useState } from 'react'

export default function Form() {
    const [dexID, setDexID] = useState("");
    const [name, setName] = useState("");
    const [typing, setTyping] = useState({
        type1: "",
        type2 : "",
    });
    const [region, setRegion] = useState({
        region: "",
        form : "",
    });
    const [league, setLeague] = useState("");
    const [submitStatus, setSubmitStatus] = useState(true);

    const typings = [ "None",
        "Bug", "Dark", "Dragon",
        "Electric", "Fairy",
        "Fighting", "Fire", "Flying",
        "Ghost", "Grass", "Ground",
        "Ice", "Normal", "Poison",
        "Psychic", "Rock", "Steel", "Water"
    ];

    const regions = ["",
        "Kanto", "Jhoto", "Hoenn", "Sinnoh",
        "Sinnoh-Hisui", "Unova", "Kalos", "Alola",
        "Galar", "Paldea", "Paldea-KitaKami"
    ];

    const leagues = ["",
        "Great Leage", "Ultra League", "Master League",
        "Field Meta 1", "Field Meta 2"
    ];

    useEffect(() => { 
        console.log("reloading");
    }, []);

    const handleSubmit = () => {
        if (!typing.type1 && typing.type1 === "None") {
            alert("Type1 required");
            setSubmitStatus(false);
        }
        if (!name && !dexID && !region.region && !league) {
            setSubmitStatus(false);
        }

        if (!submitStatus) {
            alert("Please  fill the required fields");
            setDexID('');
            setName("");
            setLeague("");
            setRegion({ region: "", form: "" });
            setTyping({ type1: "", type2: "" });
            return;
        } else {
            const newPokemon = {
                pokedexID: dexID,
                name: name,
                typing: typing,
                region: region,
                league: league,
            }
            console.log("new", newPokemon);
        }

    }
  return (
      <div>
          <form>
              <div>
                  <label>PokedexID * </label>
                  <input type='number' onChange={(e) => setDexID(e.target.value)}/>
              </div>

              <div>
                <label>Name * </label>
                <input type='text' onChange={(e) => setName(e.target.value)}/>             
              </div>

              <div>
                  <div> Typing </div>
                  <label>Type 1* </label>
                  <select required onChange={(e) => setTyping({ ...typing, type1 : e.target.value })}>
                      {typings.map((type, index) => type != typing.type2 && <option key={index}> {type} </option>)}
                  </select>
                  <span> &nbsp;</span>
                <label> Type2 </label>
                  <select onChange={(e) => setTyping({...typing, type2 : e.target.value})}>
                      {typings.map((type, index) => type != typing.type1 && <option key={index}> { type} </option>)}
                  </select>
              </div>

              <div>
                  <div>Region * </div>
                  <select onChange={(e) => setRegion({ ...region, region : e.target.value })}>
                      {regions.map((region, index) => <option key={index}> {region} </option>)}
                 </select>
                  <div>
                      <label> Form </label>
                      <input onChange={(e) => setRegion({ ...region, form : e.target.value })}/>
                  </div>
              </div>

              <div>
                <label>League * </label>
                  <select onChange={(e) => setLeague(e.target.value)}>
                      {leagues.map((meta, index) => <option key={index}> {meta}</option>)}
                  </select>                
              </div>

              <button type='submit' onClick={handleSubmit}> Submit </button>
          </form>
    </div>
  )
}
