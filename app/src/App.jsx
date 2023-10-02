import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null);
  const [filterData, setfilterData] = useState(null);
  const [loading, setloading] = useState(false);
  const [selectedbtn, setselectedbtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setloading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setdata(json);
        setfilterData(json);
        setloading(false);
      } catch (error) {
        seterror("unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  // filter btn

  const filterBtn = (type) => {
    if (type == "all") {
      setfilterData(data);
      setselectedbtn("all");
      return;
    }

    const filter = data.filter((value) =>
      value.type.toLowerCase().includes(type)
    );
    setfilterData(filter);
    setselectedbtn(type)
  };

  const type = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  console.log(data);

  // search food
  const searchFood = (e) => {
    const searchValue = e.target.value;

    const filter = data.filter((value) =>
      value.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setfilterData(filter);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>{loading}</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div>
            <img src="logo.svg" alt="logo" />
          </div>

          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food...."
            />
          </div>
        </TopContainer>

        <FilterButton>
          {type.map((value) => (
            <Button 
            isSelected = {selectedbtn == value.type}
            key={value.name} onClick={() => filterBtn(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterButton>
      </Container>
      <SearchResult data={filterData} />
    </>
  );
}

export default App;

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search input {
    border: 1px solid red;
    width: 285px;
    height: 40px;
    padding: 0 10px;
    background-color: transparent;
    color: white;
    font-size: 16px;
    border-radius: 5px;

  }

  
  .search ::placeholder{
      color: white;
    }
`;

const FilterButton = styled.section`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background:${({isSelected}) => (isSelected ? "green" : " red")};
  padding: 6px 12px;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;
