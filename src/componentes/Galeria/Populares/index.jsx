import styled from "styled-components";
import Titulo from "../../Titulo";

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const ColunaFotos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BotaoVerMais = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Populares = ({ fotos }) => {
  return (
    <section>
      <Titulo $alinhamento={"center"}>Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      <BotaoVerMais>Ver mais</BotaoVerMais>
    </section>
  );
};

export default Populares;
