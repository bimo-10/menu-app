import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
// console.log(allCategories);

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  console.log(menu);

  const filterItems = (category) => {
    console.log(category);

    if (category === "all") {
      setMenu(data);
      return;
    }

    const newMenu = data.filter((item) => {
      return item.category === category;
    });
    setMenu(newMenu);
  };

  return (
    <>
      <section className="menu">
        <Title title="MENU" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menues={menu} />
      </section>
    </>
  );
};
export default App;
