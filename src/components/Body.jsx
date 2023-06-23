import Menus from './Menus';
import Header from './Header'
import React from 'react';
import { useEffect, useState } from 'react';

function Body() {

  const [menus, setMenus] = useState([]);

  const baseBbUrl = "https://647a6c7ed2e5b6101db05858.mockapi.io/menu";

  const fetchMenus = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMenus(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenus(baseBbUrl);
  }, []);

  return (
    <>
       <Header/>
      <h1>Body</h1>

      <div>
        <section>
          <Menus menus={menus} />
        </section>
      </div>
    </>
  )
}

export default Body