import React from 'react';
import styles from './IndexPage.module.scss';
import Module from '../components/hajoon/Module';
import SearchBar from '../components/hajoon/SearchBar';
import Category from '../components/hajoon/Category';
import Hometown from '../components/hajoon/Hometown';

const IndexPage = () => {
  return (
    <>
      <Module />
      <SearchBar />
      <Category />
      <Hometown />
    </>
  );
};

export default IndexPage;
