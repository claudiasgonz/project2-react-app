import Select from "react-select";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBarPlantList() {
    const [plantList, setPlantList] = useState([]);
    const navigate = useNavigate ();
  
    // FUNCTION TO HANDLE ONCE PLANT IS SELECTED FROM DROPDOWN MENU
     function handleSelect(option) {
      navigate(`/plants/${option.value}`);
     }
  
    // GET PLANT LIST DATA
    useEffect(() => {
      const getPlantListToSearch = async () => {
        try {
          const response = await axios.get("https://project2-react-app-server.adaptable.app/plants")
          
          // UPDATE THE STATE WITH FETCHED PLANT DATE
          setPlantList(response.data);
        } catch (error) {
          console.log(error)
        }
      };
      getPlantListToSearch();
    }, []);
  
    // MAP PLANT DATA PARA QUE LA INFO SEA ADECUADA PARA SELECT COMPONENT
    const options = plantList.map((current) => {
      return {
        value: current.id,
        label: current.plantName,
      };
    });
    return (
        <div className="select-plant-list-pg">
          Explore
          <Select 
            options={options}
            onChange={handleSelect}
            placeholder="Search"
          />
        </div>
      )
    }
  

export default SearchBarPlantList