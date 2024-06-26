import React, { useState } from 'react';
import optionsData from '../../assets/json/dropdown.json';
import Header from '../../componentMenu';

const MultiSelectWithSearch = () => {
    const [options] = useState(optionsData);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleToggleOption = (value) => {
        const selectedIndex = selectedOptions.findIndex((option) => option.value === value);

        if (selectedIndex > -1) {
            const updatedOptions = [...selectedOptions];
            updatedOptions.splice(selectedIndex, 1);
            setSelectedOptions(updatedOptions);
        } else {
            const optionToAdd = options.find((option) => option.value === value);
            setSelectedOptions([...selectedOptions, optionToAdd]);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className='MultiselectWithSearch'>
                <h3 onClick={toggleVisibility}>DropDown With Search Bar</h3>
                <div className={`optionList ${isVisible ? 'visible' : ''}`} >
                    <div className='selected'>
                        Selected:
                        {selectedOptions.map((option) => (
                            <span key={option.value}> {option.label}, </span>
                        ))}
                    </div>

                    <input
                        className="search_bar"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <ul>
                        {filteredOptions.map((option) => (
                            <li key={option.value}>
                                <input
                                    type="checkbox"
                                    value={option.value}
                                    checked={selectedOptions.some((item) => item.value === option.value)}
                                    onChange={() => handleToggleOption(option.value)}
                                    style={{ marginRight: '10px' }}
                                />
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MultiSelectWithSearch;
























































