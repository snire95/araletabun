import React from 'react';
import items from '../data';

function saveprudact(){
  console.log("test");
 items.push({
 id : items.length+1,
 title : "snir",
 category: "mhjhujkh mjhik",
 price: 56,
 img: './images/item-1.jpeg',
 desc: "kjhukhjo kjhoij kjhi",
})
console.log(items);
}

const ManagerPage = () => {
  return (
      <section className='menu section'>
        <div className= 'title'>
         <h1>העלת מוצר חדש</h1> 
          <input type="text" name="product name" id= "product-name"/>
          <label for="product name"> : שם מוצר </label><br></br>

          <input type="text" name="Product Description" id="Description"/>
          <label for="Product Description"> : תאור מוצר </label><br></br>

          {/* <select name = "categor">
            <option value="piza">פיצה</option>
            <option value="salad">סלטים</option>
            <option value="drink">שתיה</option>
         </select> */}
         {/* <label for="categor"> : בחר קטגוריה </label><br></br> */}

         <input type="text" name="new category" id="category"/>
         <label for="new category"> : הוסף קטגוריהה </label><br></br>

         <input type="text" name="price" id = "price"/>
         <label for="price">   :           מחיר </label><br></br>

         <label for="Upload photo"> :  העלת תמונה </label><br></br>
         <input type="file" name="Upload photo"/><br></br>
          <button type="submit" onClick= {()=> saveprudact()} >העלה</button>
        </div>
      </section>
  )
};

export default ManagerPage;