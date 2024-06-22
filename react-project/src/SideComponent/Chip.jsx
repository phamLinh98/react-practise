import Chip from "@mui/material/Chip";

export default function ChipComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { nameTitle } = props;
  return <Chip label={nameTitle} variant="outlined" />;
}
