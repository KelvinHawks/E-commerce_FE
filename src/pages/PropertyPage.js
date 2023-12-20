import CategoryNavbar from "../properties/components/CategoryNavbar";
import Category from "../properties/components/Category";
import PropertyNavbar from "../properties/components/PropertyNavbar";
import PropertyManager from "../properties/components/PropertyManager";
import 'bootstrap/dist/css/bootstrap.min.css';

const PropertyPage = () => {

    const categories = ['House', 'Apartment', 'Hotel', 'Villa', 'Cottage'];

    return(
        <section style={{backgroundColor:'antiquewhite'}}>

           < PropertyManager />

        </section>
    );
};

export default PropertyPage;