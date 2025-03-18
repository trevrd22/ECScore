import type React from "react";
import { useState } from "react";
import Answers from "./Answers";
import {
  Slide,
  Stack,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface RoomSelectionProps {
  answerTemp: Answers;
  imageSrc: string;
  radioOptions: { value: string; label: string }[]; // Array of radio options
  slideIn: boolean;
}

const RoomSelection: React.FC<RoomSelectionProps> = ({
  answerTemp,
  imageSrc,
  radioOptions,
  slideIn,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Handle image click
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ textAlign: "center", justifyContent: "center", marginBottom: "20px" }}>
      {/* Slide Title */}
      <Slide direction="right" in={slideIn} mountOnEnter unmountOnExit timeout={350}>
        <h2 style={{ marginTop: "20px" }}>What Room?</h2>
      </Slide>

      {/* Slide Image and Radio Group */}
      <Slide direction="left" in={slideIn} mountOnEnter unmountOnExit timeout={350}>
        <Stack
          direction="row"
          spacing={2}
          style={{
            width: "100%",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Image */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <img
            src={imageSrc}
            alt="Room"
            onClick={handleClick}
            style={{
              width: isExpanded ? "500px" : "200px",
              transition: "width 0.3s ease",
              cursor: "pointer",
            }}
          />

          {/* Radio Options */}
          <FormControl margin="none" size="small">
            <RadioGroup defaultValue={radioOptions[0]?.value} name="radio-buttons-group" onChange={(event) => {
                const eventTitle = event.target.value.trim(); // Get the input value
                answerTemp.setEventTitle(eventTitle); // Update the answer object
                toggleIndexPerm(1);
              }}>
              {radioOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>
      </Slide>

      {/* Slide Caption */}
      <Slide direction="up" in={slideIn} mountOnEnter unmountOnExit timeout={350}>
        <div style={{ textAlign: "left", paddingLeft: "10px" }}>
          <Typography variant="subtitle1" gutterBottom>
            brackets indicate capacity
          </Typography>
        </div>
      </Slide>
    </div>
  );
};

export default RoomSelection;
