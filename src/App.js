import React, { useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar'
import Categories from './Categories';
import items from './data';

const allCategories = ['כל המנות',...new Set(items.map((item) => item.category))]
console.log(allCategories)
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'כל המנות'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>

      <Navbar />
      <section className='menu section'>
        <div className= 'title'>
          <h1>ארל'ה פיצה</h1>
          <h2>התפריט שלנו</h2>
          <div className='underline'></div>       
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items ={menuItems}/>
      </section>
    </main>
  )
}

export default App;
