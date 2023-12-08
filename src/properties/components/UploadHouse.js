import React, {useState} from "react";

const UploadHouse = () => {

    const [ checked, setChecked ] = useState(false);

    //initialize house data
    const [houseData, setHouseData] = useState({
        tittle: '',
        category: ["house", "apartment", "hotel", "villa", "cottage"],
        description: '',
        price: '',
        features:[],
        type: ["for_sale", "rental"],
        images: [],
        video: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHouseData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (feature) => {
        setHouseData((prevData) => {
            const updatedFeatures = [...prevData.features];
    
            if (updatedFeatures.includes(feature)) {
                // If feature is already in the array, remove it
                const index = updatedFeatures.indexOf(feature);
                if (index !== -1) {
                    updatedFeatures.splice(index, 1);
                }
            } else {
                // If feature is not in the array, add it
                updatedFeatures.push(feature);
            }
    
            return {
                ...prevData,
                features: updatedFeatures,
            };
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setHouseData((prevData) => ({
            ...prevData,
            images: prevData.images.concat(files),
        }));
    };

    const handleVideoChange = (e) => {
        const { value } = e.target;
        setHouseData((prevData) => ({
            ...prevData,
            video: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(houseData);
    };

    return (
        <div className="container">
            <div>
                <h2>Upload House</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <b>Tittle:</b>
                        <input
                            type="text"
                            name="tittle"
                            value={houseData.tittle}
                            onChange={handleInputChange}
                            />
                    </label>
                </div>
                <br />
                <div>
                    <label >
                        <b>Category:</b>
                        <div>
                            <input
                                type="radio"
                                name="category"
                                value="house"
                                checked={houseData.category === 'house'}
                                onChange={handleInputChange}
                                />
                                <span>House</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="category"
                                value="apartment"
                                checked={houseData.category === 'apartment'}
                                onChange={handleInputChange}
                                />
                                <span>Apartment</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="category"
                                value="hotel"
                                checked={houseData.category === 'hotel'}
                                onChange={handleInputChange}
                                />
                                <span>Hotel</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="category"
                                value="villa"
                                checked={houseData.category === 'villa'}
                                onChange={handleInputChange}
                                />
                                <span>Villa</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="category"
                                value="cottage"
                                checked={houseData.category === 'cottage'}
                                onChange={handleInputChange}
                                />
                                <span>Cottage</span>
                        </div>
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        <b>Description:</b>
                        <textarea
                            name="description"
                            value={houseData.description}
                            onChange={handleInputChange}
                            />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        <b>Price:</b>
                        <input
                            type="text"
                            name="price"
                            value={houseData.price}
                            onChange={handleInputChange}
                            />
                    </label>
                </div>
                <br />
                <div>
                    <label >
                        <b>Type:</b>
                        <div>
                            <input
                                type="radio"
                                name="type"
                                value="for_sale"
                                checked={houseData.type === 'for_sale'}
                                onChange={handleInputChange}
                            />
                            <span>For Sale</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="type"
                                value="rental"
                                checked={houseData.type === 'rental'}
                                onChange={handleInputChange}
                                />
                                <span>Rental</span>
                        </div>
                    </label>
                </div>
                <br />
                <div>
                    <label for="features">
                        <b>Select features</b>
                            <div>
                                <Checkbox 
                                    label="Electricity"
                                    checked={houseData.features.includes('electricity')}
                                    onChange={() => handleCheckboxChange('electricity')}
                                />
                            </div>
                            <div>
                                <Checkbox 
                                    label="Water"
                                    checked={houseData.features.includes('water')}
                                    onChange={() => handleCheckboxChange('water')}
                                />
                            </div>
                            <div>
                                <Checkbox 
                                    label="Road"
                                    checked={houseData.features.includes('road')}
                                    onChange={() => handleCheckboxChange('road')}
                                />
                            </div>
                            <div>
                                <Checkbox 
                                    label="Shopping Center"
                                    checked={houseData.features.includes('shopping_center')}
                                    onChange={() => handleCheckboxChange('shopping_center')}
                                />
                            </div>
                            <div>
                                <Checkbox 
                                    label="Police Post"
                                    checked={houseData.features.includes('police_post')}
                                    onChange={() => handleCheckboxChange('police_post')}
                                />
                            </div>
                            <div>
                                <Checkbox 
                                    label="Primary SChool"
                                    checked={houseData.features.includes('primary_school')}
                                    onChange={() => handleCheckboxChange('primary_school')}
                                />
                            </div>
                            <div>
                                <Checkbox 
                                    label="Secondary School"
                                    checked={houseData.features.includes('secondary_school')}
                                    onChange={() => handleCheckboxChange('secondary_school')}
                                />
                            </div>
                            <div>
                                <Checkbox 
                                    label="Hospital"
                                    checked={houseData.features.includes('hospital')}
                                    onChange={() => handleCheckboxChange('hospital')}
                                />
                            </div>
                        </label>
                </div>
               
                <br />
                <div >
                    <label>
                        <b>Images</b>
                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        <b>Video URL</b>
                        <input type="text"
                        name="video"
                        value={houseData.video}
                        onChange={handleVideoChange}
                    />
                    </label>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default UploadHouse;