import PriceOption from "./PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$49.99/month",
          "features": [
            "Access to all Basic Membership features",
            "Group fitness classes included",
            "Personal trainer consultation"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$79.99/month",
          "features": [
            "Access to all Standard Membership features",
            "Access to sauna and spa facilities",
            "Discounts on merchandise and supplements"
          ]
        }
      ]
    return (
        <div>
            <h2 className="text-3xl text-center my-4 md:text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6 mx-3 my-3">
           {
                priceOptions.map (option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;