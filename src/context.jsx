import React, { createContext, useState, useContext } from 'react';

const FormDataContext = React.createContext();

export const useFormData = () => useContext(FormDataContext);
export const da= [
  {
    UserId: 1,
    event_name: "holy",
    data: "loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumvloremIpsum",
    time: `${new Date()}`,
    location: "lorens building",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSPrWJOUU-ggSOUzvEBvYddntHPAqnFiCVQ&usqp=CAU",
    is_liked: 'false' 
  },
  {
    UserId: 2,
    event_name: "diwali",
    data: "loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumvloremIpsum",
    time: `${new Date()}`,
    location: "lorens building",
    img: "https://www.nesco.in/assets/images/businesses/events/our-offerings/event-properties.jpg",
    is_liked: 'false' 
  },
  {
    UserId: 3,
    event_name: "chrismas",
    data: "loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumvloremIpsum",
    time: `${new Date()}`,
    location: "lorens building",
    img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Chicken_Tikka_Masala.jpg",
    is_liked: 'false' 
  },
  {
    UserId: 4,
    event_name: "music event",
    data: "loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumvloremIpsum",
    time: `${new Date()}`,
    location: "lorens building",
    img: "https://www.nesco.in/resources/images/events/offerings.jpg",
    is_liked: 'false' 
  }
]

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([...da]);
  const [sorted, setSorted] = useState();
  
  const addData = (newData) => {
     setFormData([...formData, newData]);
  };

  const sortedData =(data)=>{
    const filteredData = formData.filter(item =>
      item.event_name.toLowerCase().includes(data.toLowerCase())
    );
    setSorted(filteredData);
  }

  const resetFormData = () => {
    setFormData([]);
  };

  return (
    <FormDataContext.Provider value={{sorted, formData, sortedData, setFormData, addData, resetFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
