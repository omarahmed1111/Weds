import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-left: 3rem;
  margin-top: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  position: relative;
  margin-right: 25px;
`;

const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FilterActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const FilterButton = styled.button`
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  line-height: inherit;
  background-color: ${(props) => (props.white ? "white" : "black")};
  color: ${(props) => (props.white ? "black" : "white")};
  vertical-align: middle;
  padding: 0;
  border: solid 1px #000;
  width: 55px;
  height: 21px;
  margin-left: 3px;
  font-size: 12px;
  text-align: center;
`;

const FilterSearchInput = styled.input`
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  width: 100%;
  border: 1px solid black;
  padding: 5px;
  margin-top: 1rem;
`;

const PhotosContainer = styled.div`
  width: 70%;
  margin-right: 0;
  display: flex;
  flex-wrap: wrap;
`;

const PhotosCard = styled.div`
  position: relative;
  min-height: 1px;
  float: left;
  width: 30%;
  padding: 5px;
`;

const PhotosCardImg = styled.img`
  color: #337ab7;
  width: 60%;
  height: 60%;
  vertical-align: middle;
`;

const PhotosCardTitle = styled.h3`
  font-family: inherit;
  color: #000;
  font-size: 17.3px;
  font-weight: bold;
  margin: 10px 0 15px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 25px;
  height: 50px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export {
  MainWrapper,
  FilterContainer,
  FilterForm,
  FilterActions,
  FilterButton,
  FilterSearchInput,
  PhotosContainer,
  PhotosCard,
  PhotosCardImg,
  PhotosCardTitle,
};
