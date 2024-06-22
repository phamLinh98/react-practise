import BoxPositionFirst from "./BoxPositionFirst";
import BoxPositionSecond from "./BoxPositionSecond";
import ChipComponent from "./Chip";

// eslint-disable-next-line react/prop-types
export default function TypographyTheme({ cards }) {
  const containerStyle = {
    display: "flex", // hiển thị các phần tử con theo chiều ngang
    flexDirection: "column", // sắp xếp các phần tử con theo chiều dọc
    justifyContent: "center", // căn giữa các phần tử con theo chiều ngang
    alignItems: "center", // căn giữa các phần tử con theo chiều dọc
    minHeight: "100vh", // chiều cao tối thiểu của container là 100% chiều cao của viewport
    gap: "20px", // khoảng cách giữa các phần tử con là 20px
  };

  const chipContainerStyle = {
    display: "flex", // hiển thị các ChipComponent theo chiều ngang
    gap: "5px", // khoảng cách giữa các ChipComponent là 5px
    alignItems: "center", // căn chỉnh các ChipComponent theo trục dọc (nếu cần)
  };

  const chipStyle = {
    margin: "5px", // khoảng cách 5px xung quanh mỗi ChipComponent
    padding: "10px", // ví dụ, có thể thêm padding nếu cần thiết
  };

  return (
    <div style={containerStyle}>
      <BoxPositionFirst className="box-position" cards={cards} />
      <BoxPositionSecond className="box-position" cards={cards} />
      <div style={chipContainerStyle}>
        <ChipComponent style={chipStyle} nameTitle={"STANDBY PHASE"} />
        <ChipComponent style={chipStyle} nameTitle={"DRAW PHASE"} />
        <ChipComponent style={chipStyle} nameTitle={"MAIN PHASE 1"} />
        <ChipComponent style={chipStyle} nameTitle={"BATTLE PHASE"} />
        <ChipComponent style={chipStyle} nameTitle={"MAIN PHASE 2"} />
        <ChipComponent style={chipStyle} nameTitle={"END PHASE"} />
      </div>
      <BoxPositionSecond className="box-position" cards={cards} />
      <BoxPositionFirst className="box-position" cards={cards} />
    </div>
  );
}
