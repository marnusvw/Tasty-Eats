import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearSearchTerm, setSearchTerm } from '../../features/searchTerm/searchTermSlice';
import styles from './SearchBar.module.css'

const SearchBar = ({term}) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearch] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("Search :" + searchTerm)
        dispatch(setSearchTerm(searchTerm))
        console.log("Term: " + term)
        setSearch('');
    }
    const onClearSearch = () => {
        console.log("Clearing")
        dispatch(clearSearchTerm())
    }
  return (
    <div className={styles.searchContainer}>
    {term !== '' ?
     <div>
        <p>{term}</p>
        <button onClick={onClearSearch}>Button</button>
    </div>
    :
        <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
            <label className={styles.label} for="SearchBar">Search</label>
            <input id='SearchBar' onChange={e => setSearch(e.target.value)} type='text' value={searchTerm} />
        </form>
    </div>
    }
    </div>
  )
}

export default SearchBar