import React, { useState } from 'react';
import MainNav from '../components/MainNav';
import styles from './IndexPage.module.scss';
import Module from '../components/hajoon/Module';
import SearchBar from '../components/hajoon/SearchBar';
import Category from '../components/hajoon/Category';
import Hometown from '../components/hajoon/Hometown';

const IndexPage = () => {
  const [town, setTown] = useState('서초동');

  const clickedTown = (townName) => {
    setTown(townName);
  };

  return (
    <>
      <Module giveTownName={town} />
      <SearchBar />
      <Category />
      <Hometown setTown={clickedTown} />
    </>
  );
};

export default IndexPage;
