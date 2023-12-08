import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../styles/property.css'

const Searchbar = () => {
    return(
    <div className="text-center" >
        <input type='text' className='searchbar' placeholder='Enter an address, neighborhood or city' />
    </div>
    );
};

export default Searchbar;