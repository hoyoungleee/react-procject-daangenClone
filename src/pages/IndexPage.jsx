import React from 'react';
import styles from './IndexPage.module.scss';
import Module from '../components/hajoon/Module';
import SearchBar from '../components/hajoon/SearchBar';
import Category from '../components/hajoon/Category';

const IndexPage = () => {
  return (
    <>
      <Module />
      <SearchBar />
      <Category />
    </>
  );
};

export default IndexPage;
