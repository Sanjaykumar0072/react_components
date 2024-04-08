import React, { useState, useEffect } from 'react';
import Dropdown from './singleSelectDropdown';
import Menu from '../../componentMenu';

export default function DropdownParent() {
    const [selectedData, setSelectedData] = useState({});

    const dropdowns = [
        {
            id: 0, data: [
                { id: 0, label: "Male" },
                { id: 1, label: "Female" }
            ],
            placeholder: "Gender",
            defaultItem: { id: 0, label: "Male" }
        },
        {
            id: 1, data: [
                { id: 0, label: "Web Developer" },
                { id: 1, label: "Software Engineer" },
                { id: 2, label: "Software Developer" },
                { id: 3, label: "Front End Developer" },
                { id: 4, label: "Network Engineer" },
                { id: 5, label: "Entry Level Software Developer" },
                { id: 6, label: "Java Developer" },
                { id: 7, label: "Entry Level Software Engineer" },
                { id: 8, label: "IOS Developer" },
                { id: 9, label: "Junior Web Developer" },
                { id: 10, label: "SQL Developer" },
                { id: 11, label: "Junior Developer" },
                { id: 12, label: "Entry Level Web Developer" },
                { id: 13, label: "Android Developer" },
                { id: 14, label: "Salesforce Developer" },
                { id: 15, label: ".NET Developer" },
                { id: 16, label: "Python Developer" },
                { id: 17, label: "Game Developer" },
                { id: 18, label: "Programmer" },
                { id: 19, label: "Data Engineer" }
            ],
            placeholder: "Position",
            defaultItem: { id: 0, label: "Web Developer" }
        }
    ];

    useEffect(() => {
        dropdowns.forEach(dropdown => {
            const defaultItem = dropdown.defaultItem;
            if (defaultItem) {
                handleDropdownChange(dropdown.id, defaultItem);
            }
        });
    }, []);

    const handleDropdownChange = (dropdownId, selectedItem) => {
        setSelectedData(prevData => ({
            ...prevData,
            [dropdownId]: selectedItem
        }));
    };

    return (
        <>
            <Menu />
            <div className="dropdownParent" id="dropdownParent">
                {dropdowns.map(dropdown => (
                    <div className="calculate-box" key={dropdown.id}>
                        <Dropdown
                            key={dropdown.id}
                            data={dropdown.data}
                            placeholder={dropdown.placeholder}
                            defaultItem={selectedData[dropdown.id]}
                            defaultDropdownItem={selectedData[dropdown.id]}
                            onSelectChange={(selectedItem) => handleDropdownChange(dropdown.id, selectedItem)}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
