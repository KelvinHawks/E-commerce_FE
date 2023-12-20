import React, { useState, useEffect, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from '../sampleData/houses.json'
import PropertyNavbar from './PropertyNavbar';
import Category from './Category';
import CategoryNavbar from './CategoryNavbar';
import Favourite from '../../pages/Favourite';
//import '../../styles/property.css'

export const DataContext = createContext({});

const PropertyManager = () => {

    const categories = ['House', 'Apartment', 'Hotel', 'Villa', 'Cottage'];

    const [filteredProperties, setFilteredProperties] = useState([]);
    
    const [searchWord, setSearchWord] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log("Search triggered:", searchWord)
            setSearchWord('');
        }
    }
    

    useEffect(() => {
        const searchWordLower = searchWord.toLowerCase();
        const filtereditems = jsonData.filter((item) => 
        (item.name && item.name.toLowerCase().includes(searchWordLower)) ||
        (item.category && item.category.toLowerCase().includes(searchWordLower))
        );
        setFilteredProperties(filtereditems)
        console.log("inside useffect",filteredProperties);

    },[searchWord]);

    return(
        <DataContext.Provider value={filteredProperties}>
            {/*<PropertyNavbar />*/}
            <div className="text-center" >
                <input 
                    type='text' 
                    className='searchbar' 
                    placeholder='Enter an address, neighborhood or city' 
                    onChange={(e) => setSearchWord(e.target.value)}
                    onKeyPress={handleKeyPress}
                    />
            </div>
            <div className="d-flex justify-content-center">
                {categories.map((category, index) => (
                    <CategoryNavbar key={index} category={category} />
                     ))};
            </div>
            <Category />
        </DataContext.Provider>
    );
};

export default PropertyManager;