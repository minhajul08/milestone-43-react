import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {price,name,features} =option;

    return (
        <div className='bg-blue-500 rounded-md p-4 flex flex-col  text-white my-6'>
           <h2 className='text-center'>
               <span className='text-3xl'>{price}</span>
               <span>/cm</span>
            </h2> 
            <h1 className='text-5xl text-center'>
             {name} </h1>
             <div className='pl-6 flex-grow'>
             {
                features.map ((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
             }
             </div>
             <button className='mt-12 btn bg-green-500 border-0 w-full'>Buy Now</button>
           
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;