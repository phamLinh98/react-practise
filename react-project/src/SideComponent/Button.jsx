import Button from "@mui/material/Button";

export default function ButtonCheck({ name, onClickHandle }) {
  return (
    <>
      <Button variant="contained" size="large" onClick={onClickHandle}>
        {name}
      </Button>
    </>
  );
}
