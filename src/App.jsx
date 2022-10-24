import { useState , useEffect } from "react";

import Card from "./components/UI/Card";
import "./App.css";

function App() {
  let [list,setList] = useState([]);

  async function getData() {
    const response = await fetch("./src/data.json");
    const data = await response.json();
    return data;
  }

  useEffect(()=>{
    getData().then(data=>setList(data))
  },[])


  return (
    <>
      <section className="top"></section>
      <main>
        {list.map(item=>(
            <Card
            logo={item.logo}
            company={item.company}
            new={item.new}
            featured={item.featured}
            position={item.position}
            postedAt={item.postedAt}
            contract={item.contract}
            location = {item.location}
            role={item.role}
            level={item.level}
            languages={item.languages}
            tools={item.tools}
          />
        ))}

      </main>
    </>
  );
}

export default App;
