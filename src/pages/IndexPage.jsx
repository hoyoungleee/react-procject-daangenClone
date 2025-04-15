import React, { useState } from 'react';
import MainNav from '../components/MainNav';
import styles from './IndexPage.module.scss';
import Module from '../components/hajoon/Module';
import SearchBar from '../components/hajoon/SearchBar';
import Category from '../components/hajoon/Category';
import Hometown from '../components/hajoon/Hometown';
import SelectLocationModal from '../components/hajoon/modal/SelectLocationModal';

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [town, setTown] = useState('서초동');

  const clickedTown = (townName) => {
    setTown(townName);
  };

  return (
    <>
      {isModalOpen && (
        <SelectLocationModal onClose={() => setIsModalOpen(false)} />
      )}
      <Module giveTownName={town} />
      <SearchBar />
      <Category />
      <Hometown setTown={clickedTown} />
    </>
  );
};

export default IndexPage;
