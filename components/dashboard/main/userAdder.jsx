import styled from "styled-components";
import Input from "components/inputs/input";
import Upload from "components/inputs/upload";

export default function Index({ setstate }) {
  return (
    <AddnewContainer>
      <AddnewTitle>عضو جدید</AddnewTitle>
      <Input
        label="نام"
        onChange={(e) => console.log(e.target.value)}
        height="68px"
      />
      <Input
        label="نام خانوادگی"
        onChange={(e) => console.log(e.target.value)}
        height="68px"
      />
      <div className="row" style={{ alignItems: "center" }}>
        <span style={{ paddingLeft: 8 }}>رزومه : </span>
        <Upload />
      </div>
      <div className="crow" style={{ marginTop: 20 }}>
        <button
          className="btn"
          style={{
            border: "1px solid gray",
            borderRadius: 4,
            background: "#dedede",
          }}
        >
          ثبت
        </button>
        <button className="btn" onClick={() => setstate(0)}>
          لغو
        </button>
      </div>
    </AddnewContainer>
  );
}
const AddnewContainer = styled.div`
  border: 1px #6c6c76 dashed;
  color: #6c6c76;
  border-radius: 3px;
  padding: 20px;
  position: relative;
  margin-top: 38px;
`;

const AddnewTitle = styled.span`
  position: absolute;
  right: -22px;
  top: -15px;
  background: #f0f0f0;
  border-radius: 11px;
`;
