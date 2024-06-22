import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonCheck from "../SideComponent/Button";
import TypographyTheme from "../SideComponent/Typhone";

export const CheckGrammaJapanese = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Câu Tiếng Việt"
          variant="outlined"
          size="large"
        />
        <ButtonCheck />
      </Box>
      <TypographyTheme />
    </>
  );
};

export default CheckGrammaJapanese;
