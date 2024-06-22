import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
export default function BoxComponent({ children }) {
  return (
    <>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        {children}
      </Box>
    </>
  );
}
