import Catagories from "./components/Catagories";
import MenuList from "./components/MenuList";
import menu from "./data";
import { useState } from 'react'

function App() {

  const [item, setItem] = useState(menu)

  const allItem = () => {
    return setItem(menu)
  }
  const breakfastItem = () => {
    const newMenu = menu.filter((items => items.category === 'breakfast'))
    return setItem(newMenu)
  }
  const lunchItem = () => {
    const newMenu = menu.filter((items => items.category === 'lunch'))
    return setItem(newMenu)
  }
  const shakesItem = () => {
    const newMenu = menu.filter((items => items.category === 'shakes'))
    return setItem(newMenu)
  }

  return (
    <div className="bg-sky-50 min-h-screen py-12 ">
      <h1 className="text-[#102a42] text-[45px] font-bold text-center pt-9">Our Menu</h1>
      <div className="w-[5rem] h-1 bg-[#c59d5f] mx-auto my-1.5"></div>
      <Catagories all={allItem} breakfast = {breakfastItem} lunch={lunchItem} shakes={shakesItem} />
      <div className="md:w-[80%] mx-auto xl:grid grid-cols-2 xl:w-[90%]">
      {item.map((menuList) => 
      <MenuList key={menuList.id} {...menuList} />)}
      </div>
    </div>
  );
}

export default App;
