import Catagories from "./components/Catagories";
import MenuList from "./components/MenuList";
import menu from "./data";

function App() {
  return (
    <div className="bg-sky-50 min-h-screen py-12">
      <h1 className="text-[#102a42] text-[45px] font-bold text-center pt-9">Our Menu</h1>
      <div className="w-[5rem] h-1 bg-[#c59d5f] mx-auto my-1.5"></div>
      <Catagories />
      {menu.map((menuList) => 
      <MenuList key={menuList.id} {...menuList} />)}
    </div>
  );
}

export default App;
