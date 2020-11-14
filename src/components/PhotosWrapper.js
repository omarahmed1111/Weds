import React from "react";
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
} from "../styled_components/photosWrapper";

export default function PhotosWrapper(props) {
  return (
    <MainWrapper>
      <FilterContainer>
        <FilterForm>
          <FilterActions>
            <FilterButton>Clear</FilterButton>
            <FilterButton>Apply</FilterButton>
          </FilterActions>
        </FilterForm>
        <FilterSearchInput placeholder="Search" />
      </FilterContainer>
      <PhotosContainer>
        <PhotosCard>
          <PhotosCardImg src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png"></PhotosCardImg>
          <PhotosCardTitle>Irresistible appetizers’ corner</PhotosCardTitle>
        </PhotosCard>
        <PhotosCard>
          <PhotosCardImg src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png"></PhotosCardImg>
          <PhotosCardTitle>Irresistible appetizers’ corner</PhotosCardTitle>
        </PhotosCard>
        <PhotosCard>
          <PhotosCardImg src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png"></PhotosCardImg>
          <PhotosCardTitle>Irresistible appetizers’ corner</PhotosCardTitle>
        </PhotosCard>
        <PhotosCard>
          <PhotosCardImg src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png"></PhotosCardImg>
          <PhotosCardTitle>Irresistible appetizers’ corner</PhotosCardTitle>
        </PhotosCard>
      </PhotosContainer>
    </MainWrapper>
  );
}
