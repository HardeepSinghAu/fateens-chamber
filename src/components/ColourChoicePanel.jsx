import React from "react";
import { Box, Typography } from "@mui/material";

const ColourChoicePanel = (props) => {
    const {textColour, cardColour, setTextColour, setCardColour} = props;
    
  function handleChange(event) {
    let {name, value} = event.target;
    if(name === 'text-colour') {
        setTextColour(value);
    } else if (name === 'card-colour') {
        setCardColour(value);
    }
  }

  return (
    <Box>
      <Typography>Text Colour</Typography>
      <input name="text-colour" type="color" value={textColour} onChange={handleChange}  />

      <Typography>Card Colour</Typography>
      <input name="card-colour" type="color" value={cardColour} onChange={handleChange} />
    </Box>
  );
};

export default ColourChoicePanel;
