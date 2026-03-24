import React, { useState, useEffect } from 'react';
import ToggleBtn from '../BtnToogle/ToggleBtn';
import Menu from './Menu';

const Menus = ({searchText }) => {
  const [active, setActive] = useState(1);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleApi = async (api) => {
    try {
      setLoading(true);
      const res = await fetch(api);
      const data = await res.json();
      setMenuData(data.meals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleApi(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
    );
  }, []);

  useEffect(() => {
  if (!searchText) return;

  handleApi(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  );
}, [searchText]);

  return (
    <div>
      <ToggleBtn
        active={active}
        setActive={setActive}
        handleApi={handleApi}
      />

      {loading ? (
        <h1 className="text-center mt-10">Loading...</h1>
      ) : (
        <Menu dishes={menuData} />
      )}
    </div>
  );
};

export default Menus;