import { useState, useEffect } from "react";

import Card from "./components/UI/Card";
import Filter from "./components/UI/Filter";
import "./App.css";

function App() {
  let [list, setList] = useState([]);
  let [filters, setFilters] = useState([]);

  async function getData() {
    const response = await fetch("./src/data.json");
    const data = await response.json();
    return data;
  }
//Get Data
  useEffect(() => {
    getData().then((data) => setList(data));    
  }, []);

// To update data list
 function updateList(filterBasedOn){
    setList((prevList)=>{
      const filteredList = prevList.filter(item=>(
        item.role === filterBasedOn ||
        item.level === filterBasedOn ||
        item.languages.includes(filterBasedOn) ||
        item.tools.includes(filterBasedOn)
      ))
      return filteredList;
    });
  }

  let filterActions = {
    add : (event)=>{
      let selectedFilter = event.target.textContent;

      setFilters((prevFilters) => {
        if (prevFilters.length > 0 && prevFilters.includes(selectedFilter)) {
          return prevFilters;
        } else {
          let newFilters = [...prevFilters, selectedFilter];
          return newFilters;
        }
      });
    } ,
    remove : (event)=>{
      let filterToBeRemoved = event.target.parentElement.textContent;
      setFilters((prevFilters) => {
        return prevFilters.filter((fil) => fil !== filterToBeRemoved);
      });
    }
  }



  //update datalist after adding filters
  useEffect(()=>{
    filters.forEach(filter=>{
      updateList(filter);
    });
  },[filters]);







  function clearAllFilters() {
    setFilters([]);
    getData().then((data) => setList(data));  
  }




  
  return (
    <>
      <section className="top"></section>
      {filters.length > 0 && (
        <header>
          <div className="filters">
            {filters.map((filter) => (
              <Filter
                id={filter}
                name={filter}
                onRemoveFilter={filterActions.remove}
              />
            ))}
          </div>
          <div className="clear" onClick={clearAllFilters}>
            Clear
          </div>
        </header>
      )}
      <main>
        {list.map((item) => (
          <Card
            id={item.id}
            logo={item.logo}
            company={item.company}
            new={item.new}
            featured={item.featured}
            position={item.position}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
            role={item.role}
            level={item.level}
            languages={item.languages}
            tools={item.tools}
            onAddFilter={filterActions.add}
          />
        ))}
      </main>
    </>
  );
}

export default App;
