import React, { useContext } from 'react';
import '../Pages/CSS/Category.css';
import { Context } from '../Context/Context';
import Roles from '../Roles/Roles';
import Navbar from '../Navbar';

function Category({ Toggle = false, ...props }) {
  console.log(Toggle);
  console.log(props);
  const { all_details } = useContext(Context);
  return (
    <>
      <Navbar Toggle={Toggle} />
      <div className='item-category'>
        <div className='category-details'>
          {all_details.map((item, i) => {
            if (props.category === item.category) {
              return (
                <div className="role-card" key={i}>
                  <Roles
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    specialization={item.specialization}
                    email={item.email}
                    no={item.no}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
