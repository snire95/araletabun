import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/צור-קשר',
    text: 'צור קשר',
  },
  {
    id: 2,
    url: '/קצת-עלינו',
    text: 'קצת עלינו',
  },
  {
    id: 3,
    url: '/התפריט-שלנו',
    text: 'התפריט שלנו',
  },
  {
    id: 4,
    url: '/',
    text: 'דף הבית',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/Araletabun',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://wa.me/972547855333?text=הי+אשמח+לבצע+הזמנה+',
    icon: <FaWhatsapp />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com/araletabun/',
    icon: <FaInstagram />,
  },
]


const menu = [
  {
    id: 1,
    title: 'פיצה מרגריטה אישית',
    category: 'פיצות',
    price: 22,
    img: './images/item-1.jpeg',
    desc: `רוטב עגבניות, מוצרלה`,
  },
  {
    id: 2,
    title: 'פיצה שום אישית',
    category: 'פיצות',
    price: 23,
    img: './images/item-2.jpeg',
    desc: `חמאת שום, מוצרלה, בולגרית, זעתר`,
  },
  {
    id: 3,
    title: 'פיצה חציל אישית',
    category: 'פיצות',
    price: 25,
    img: './images/item-3.jpeg',
    desc: `קרם חציל קלוי, בולגרית, מוצרלה`,
  },
  {
    id: 4,
    title: 'פיצה ביאנקה אישית',
    category: 'פיצות',
    price: 27,
    img: './images/item-4.jpeg',
    desc: `ראגו פורטבלו בארומת כמהין, רוטב שמנת, מוצרלה `,
  },
    {
    id: 5,
    title: 'פיצה מרגריטה משפחתית',
    category: 'פיצות',
    price: 40,
    img: './images/item-1.jpeg',
    desc: `רוטב עגבניות, מוצרלה`,
  },
  {
    id: 6,
    title: 'פיצה שום משפחתית',
    category: 'פיצות',
    price: 40,
    img: './images/item-2.jpeg',
    desc: `חמאת שום, מוצרלה, בולגרית, זעתר`,
  },
  {
    id: 7,
    title: 'פיצה חציל משפחתית',
    category: 'פיצות',
    price: 44,
    img: './images/item-3.jpeg',
    desc: `קרם חציל קלוי, בולגרית, מוצרלה`,
  },
  {
    id: 8,
    title: 'פיצה ביאנקה משפחתית',
    category: 'פיצות',
    price: 50,
    img: './images/item-4.jpeg',
    desc: `ראגו פורטבלו בארומת כמהין, רוטב שמנת, מוצרלה `,
  },

  {
    id: 9,
    title: 'סלט יווני',
    category: 'סלטים',
    price: 39,
    img: './images/item-5.jpeg',
    desc: `מלפפון, שרי, חסה, בצל סגול, זיתי קלמטה, בולגרית`,
  },
  {
    id: 10,
    title: 'סלט טונה',
    category: 'סלטים',
    price: 39,
    img: './images/item-6.jpeg',
    desc: `חסה, מלפפון, בצל סגול, פלפלים, זיתי קלמטה, טונה, ביצה`,
  },
  {
    id: 11,
    title: 'סלט טוסט',
    category: 'סלטים',
    price: 39,
    img: './images/item-7.jpeg',
    desc: `חסה, עגבניה, מלפפון, כרוב סגול, פלפים, בולגרית, קוביות טוסט`,
  },
  {
    id: 12,
    title: 'קולה/קולה זירו',
    category: 'שתיה',
    price: 12,
    img: './images/item-8.jpeg',
    desc: `                                                       ליטר 1.5`,
  },
  {
    id: 13,
    title: 'קולה/זירו זכוכית',
    category: 'שתיה',
    price: 9,
    img: './images/item-9.jpeg',
    desc: `                                                               `,
  },
    {
    id: 14,
    title: 'קולה/זירו פחית',
    category: 'שתיה',
    price: 8,
    img: './images/item-9.jpeg',
    desc: ``,
  },
];
export default menu;
