import { IconArrowLeft } from "@/assets/icon";
import { useRouter } from "next/navigation";
import { flex } from "@/utils";
import { color } from "@/styles";
import { styled } from "styled-components";

const Header = () => {
  const { back } = useRouter();
  return (
    <StyledHeader>
      <IconArrowLeft onClick={() => back()} width={24} height={24} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${color.white};
  width: 100%;
  height: 54px;
  border: 1px solid ${color.gray100};
  padding: 0 8px;
`;
