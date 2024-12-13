import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar(){

    return (
        <div classNAme={styles.SearchBar}>
            <input placeholder="Enter A song, Album, or Artist" />
            <button clasName={styles.SearchButton}>SEARCH</button>
        </div>
    )
}

export default SearchBar;