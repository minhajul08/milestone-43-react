import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner';


const Phones = () => {

    const [phone,SetPhone] = useState ([]);
    const [loading,SetLoading] =useState (true);

      useEffect (() => {
        axios.get ('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then (res => res.json ())
        .then (data => {
            const phoneData =data.data.data;
            const phonesWithFakeData = phoneData.map (phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt (phone.slug.split ('-')[1] )
                }
                return obj;

            })
            console.log (phonesWithFakeData);
            SetPhone (phonesWithFakeData);
            SetLoading (false);
  });
      } ,[])


    return (
        <div className='mx-3'>
            {
               loading && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            }
            <h2 className="text-3xl"> Phones:
               {phone.length}
             </h2>
        <BarChart width={400} height={300} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        
        </div>
    );
};

export default Phones;