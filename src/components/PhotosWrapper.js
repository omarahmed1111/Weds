import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  FilterContainer,
  MainWrapper,
  FilterForm,
  FilterActions,
  FilterButton,
  FilterSearchInput,
  PhotosContainer,
  PhotosCard,
  PhotosCardImg,
  PhotosCardTitle,
  PaginationContainer,
  PaginationList,
  PaginationListItem,
} from "../styled_components/photosWrapper";

let cardsCopy = []; // to save the original cards before filtering.

export default function PhotosWrapper(props) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/wedding_ideas");
      setCards(res.data.data);
      setLoading(false);
    };

    fetchCards();
    cardsCopy = [...cards];
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const search = (keyword) => {
    if (keyword === "") {
      return cardsCopy;
    }
    let filteredCards = [];
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].title.includes(keyword)) {
        filteredCards.push(cards[i]);
      }
    }
    return filteredCards;
  };

  return (
    <MainWrapper>
      <FilterContainer>
        <FilterForm>
          <FilterActions>
            <FilterButton
              white
              onClick={(e) => {
                e.preventDefault();
                setCards(search(""));
              }}
            >
              Clear
            </FilterButton>
            <FilterButton
              onClick={(e) => {
                e.preventDefault();

                const keyword =
                  e.target.parentNode.parentNode.parentNode.lastChild.value;
                setCards(search(keyword));
              }}
            >
              Apply
            </FilterButton>
          </FilterActions>
        </FilterForm>
        <FilterSearchInput placeholder="Search" />
      </FilterContainer>
      <PhotosContainer>
        {currentCards.map((card) => (
          <PhotosCard key={card.id}>
            <PhotosCardImg src={card.photo}></PhotosCardImg>
            <PhotosCardTitle>{card.title}</PhotosCardTitle>
          </PhotosCard>
        ))}
      </PhotosContainer>
      <PaginationContainer>
        <PaginationList>
          {pageNumbers.map((number) => (
            <PaginationListItem key={number}>
              <button onClick={() => setCurrentPage(number)}>{number}</button>
            </PaginationListItem>
          ))}
        </PaginationList>
      </PaginationContainer>
    </MainWrapper>
  );
}
