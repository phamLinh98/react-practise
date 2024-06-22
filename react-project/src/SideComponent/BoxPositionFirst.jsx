import Box from "@mui/material/Box";
import card1 from "../cards/card6.webp";

export default function BoxPositionFirst() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <Box
        height={180}
        width={170}
        display="flex"
        alignItems="center"
        gap={1}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <img src={card1} style={{ height: 200, width: 150, margin: 1 }} />
      </Box>
      <Box
        height={180}
        width={170}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <img src={card1} style={{ height: 200, width: 150, margin: 1 }} />
      </Box>
      <Box
        height={180}
        width={170}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <img src={card1} style={{ height: 200, width: 150, margin: 1 }} />
      </Box>
      <Box
        height={180}
        width={170}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <img src={card1} style={{ height: 200, width: 150, margin: 1 }} />
      </Box>
      <Box
        height={180}
        width={170}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <img src={card1} style={{ height: 200, width: 150, margin: 1 }} />
      </Box>
      <Box
        height={180}
        width={170}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <img src={card1} style={{ height: 200, width: 150, margin: 1 }} />
      </Box>
      <Box
        height={180}
        width={170}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <img src={card1} style={{ height: 200, width: 150, margin: 1 }} />
      </Box>
    </Box>
  );
}
