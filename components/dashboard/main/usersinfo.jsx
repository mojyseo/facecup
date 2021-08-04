import styled from "styled-components";
import Input from "components/inputs/input";
import Upload from "components/inputs/upload";
import Image from "next/image";

export default function Index({ setstate }) {
  if ("empty data") {
    return (
      <div className="crow" style={{ alignSelf: "start", marginTop: 38 }}>
        <small style={{ marginLeft: 10 }}>افزودن عضو جدید</small>
        <Image
          src="/assets/icons/fab.svg"
          className="iconbtn"
          width={24}
          height={24}
          onClick={() => setstate(1)}
          alt="icon"
        />
      </div>
    );
  }

  return (
    <Container>
      <h5>اعضا</h5>
      <Item>
        <div>{"1"}- نام و نام خانوادگی</div>
        <Image
          width={24}
          height={24}
          src="/assets/icons/menu.svg"
          className="iconbtn"
          alt="icon"
        />
      </Item>
      <Image
        width={24}
        height={24}
        src="/assets/icons/fab.svg"
        className="iconbtn"
        style={{ marginTop: 12 }}
        onClick={() => setstate(1)}
        alt="icon"
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 215px;
  background: white;
  border: 1px solid gray;
  padding: 3px 14px 3px 4px;
  border-radius: 9px;
  font-size: 13px;
`;
