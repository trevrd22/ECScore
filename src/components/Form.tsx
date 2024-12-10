import Autocomplete from "@mui/material/Autocomplete";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Form() {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const names = [
    "Richard Luong",
    "Emily Nguyen",
    "Kelsey Wong",
    "Muskaan Trivedi",
    "Gabriel Valenzona",
    "Rachel Pham",
    "Zaid Azhar",
    "Raphael Co",
    "Matthew Dennis",
    "Siam Bhuiyan",
    "Duong Nguyen",
    "Hailey Bui",
    "Mi Mach",
    "Trevor Drummond",
    "Trieu Dinh",
  ];

  return (
    <div className="format">
      <h1>What is Your Name?</h1>
      <div>
        <Autocomplete
          id="nameInput"
          autoSelect
          options={names}
          sx={{ width: 300 }}
          
          value={selectedName} // Bind the input value to the state
          onChange={(event, newValue) => {
            setSelectedName(newValue); // Update the selected name
          }}
          
          renderInput={(params) => <TextField {...params} label="Name" />}
        />
         <p>Selected Name: {selectedName || ""}</p> {/* Display 'None' if no name is selected */}
      </div>
    </div>
  );
}
