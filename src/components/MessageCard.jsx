import { Box, Card, Typography } from "@mui/material";
import React from "react";

const MessageCard = (props) => {
  const { message, email, name, textColour, cardColour } = props;
  return (
    <Box>
      <Card
        style={{ backgroundColor: cardColour }}
        sx={{ maxWidth: 400, height: 150, wordWrap: "break-word" }}
      >
        <Typography color={textColour}>
          Hi Fateen,
          <br></br>
          <br></br>
          {message}
          <br></br>
          <br></br>
          From: {name} ({email})
        </Typography>
      </Card>
    </Box>
  );
};

export default MessageCard;
