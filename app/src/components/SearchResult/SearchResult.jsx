import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data: food }) => {
  return (
    <FoodCardContainer>
        <Container><FoodCards>
        {food?.map((food) => (
          <FoodCard key={food.name}>
            <div className="image_card">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
              <Button>${food.price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards></Container>
      
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  min-height: calc(100vh - 210px);
`;

const FoodCards = styled.div`

  display: flex;
  flex-wrap:wrap;
  padding-top: 40px;
  row-gap: 32px;
  column-gap: 20px;
  color: black;
`;

const FoodCard = styled.div`
  border-radius: 20px;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);

  display: flex;
  width: 340px;
  height: 167px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3{
        font-size: 16px;
        font-weight: 600;
        padding-top:16px ;
        padding-bottom: 8px;
    }

    p{
        font-size: 12px;
        font-weight: 400;
    }

    button{
        font-size: 14x;
        margin-right: 10px;
        margin-bottom: 10px;
    }
  }
`;
