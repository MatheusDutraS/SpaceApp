import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;
  color: ${(props) => (props.$ativo ? "#7b78e5" : "#d9d9d9")};
  cursor: pointer;
  font-size: 24px;
  font-family: ${(props) =>
    props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  line-height: 29px;
  text-decoration: none;
  margin-bottom: 30px;
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
