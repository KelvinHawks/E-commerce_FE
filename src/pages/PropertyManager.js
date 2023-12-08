import CategoryNavbar from "../properties/components/CategoryNavbar";
import Category from "../properties/components/Category";
import PropertyNavbar from "../properties/components/PropertyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from "../properties/components/Searcbar";

const PropertyManager = () => {

    const categories = ['House', 'Apartment', 'Hotel', 'Villa', 'Cottage'];

    return(
        <section style={{backgroundColor:'antiquewhite'}}>

           < PropertyNavbar /> 
            < Searchbar />
            <div className="d-flex justify-content-center">
                {categories.map((category, index) => (
                    <CategoryNavbar key={index} category={category} />
                     ))};
            </div>
        </section>
    );
};

export default PropertyManager;