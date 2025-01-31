import { useState } from "react";
import states from "../State";

const useDistricts = () => {
  const [districts, setDistricts] = useState([]);

  const updateDistricts = (selectedState) => {
    const stateData = states.states.find((state) => state.state === selectedState);
    setDistricts(stateData ? stateData.districts : []);
  };

  return { districts, updateDistricts };
};

export default useDistricts;
