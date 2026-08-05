const products = [
  // 🌿 Veg Pickles
  {
    category: "Veg",
    name: "🥭 Mango Pickle",
    image: "/images/mango-pickle.jpg",
    prices: {
      "250g": 1,
      "500g": 1,
      "1kg": 1,
    },
  },
  {
    category: "Veg",
    name: "🍏 Amla Pickle",
    prices: {
      "250g": 219,
      "500g": 349,
      "1kg": 699,
    },
  },
  {
    category: "Veg",
    name: "🍋 Lemon Pickle",
    prices: {
      "250g": 219,
      "500g": 399,
      "1kg": 729,
    },
  },
{
  category: "Veg",
  name: "🍃 Pulihora Gongura",
  image: "/images/pulihora-gongura.jpg",
  prices: { "250g": 189, "500g": 349, "1kg": 599 },
},
{
  category: "Veg",
  name: "🥒 Kakarakaya Pickle",
  image: "/images/kakarakaya.jpg",
  prices: { "250g": 189, "500g": 349, "1kg": 599 },
},
{
  category: "Veg",
  name: "🌶️ Gongura Pandu Mirchi",
  image: "/images/gongura-pandu-mirchi.jpg",
  prices: { "250g": 219, "500g": 399, "1kg": 699 },
},
{
  category: "Veg",
  name: "🍅 Tomato Pickle",
  image: "/images/tomato.jpg",
  prices: { "250g": 219, "500g": 399, "1kg": 729 },
},
{
  category: "Veg",
  name: "🌶️ Pandu Mirchi Pickle",
  image: "/images/pandu-mirchi.jpg",
  prices: { "250g": 219, "500g": 399, "1kg": 729 },
},
{
  category: "Veg",
  name: "🧄 Garlic Pickle",
  image: "/images/garlic.jpg",
  prices: { "250g": 189, "500g": 349, "1kg": 599 },
},
{
  category: "Veg",
  name: "🥬 Mulakaya Pickle",
  image: "/images/mulakaya.jpg",
  prices: { "250g": 189, "500g": 349, "1kg": 599 },
},
{
  category: "Veg",
  name: "🍆 Vankaya Pickle",
  image: "/images/vankaya.jpg",
  prices: { "250g": 159, "500g": 299, "1kg": 555 },
},
{
  category: "Veg",
  name: "🌿 Pudina Pickle",
  image: "/images/pudina.jpg",
  prices: { "250g": 219, "500g": 399, "1kg": 729 },
},
{
  category: "Veg",
  name: "🌱 Kothimeera Pickle",
  image: "/images/kothimeera.jpg",
  prices: { "250g": 189, "500g": 349, "1kg": 599 },
},
// 🍗 Non-Veg Pickles
{
  category: "NonVeg",
  name: "🍗 Chicken Boneless Pickle",
  prices: {
    "250g": 379,
    "500g": 729,
    "1kg": 1199,
  },
},
{
  category: "NonVeg",
  name: "🍗 Chicken Bone Pickle",
  prices: {
    "250g": 329,
    "500g": 629,
    "1kg": 1149,
  },
},
{
  category: "NonVeg",
  name: "🌿🍗 Gongura Chicken Pickle",
  prices: {
    "250g": 399,
    "500g": 769,
    "1kg": 1449,
  },
},
{
  category: "NonVeg",
  name: "🦐 Prawns Pickle",
  prices: {
    "250g": 499,
    "500g": 979,
    "1kg": 1879,
  },
},
{
  category: "NonVeg",
  name: "🐟 Fish Pickle",
  prices: {
    "250g": 349,
    "500g": 649,
    "1kg": 1199,
  },
},
{
  category: "NonVeg",
  name: "🥩 Mutton Pickle",
  prices: {
    "250g": 609,
    "500g": 1149,
    "1kg": 2199,
  },
},
{
  category: "NonVeg",
  name: "🌿🥩 Gongura Mutton Pickle",
  prices: {
    "250g": 639,
    "500g": 1199,
    "1kg": 2299,
  },
},
// 🥣 Podis
{
  category: "Podi",
  name: "🥣 Kandi Podi",
  prices: {
    "250g": 119,
    "500g": 399,
    "1kg": 749,
  },
},
{
  category: "Podi",
  name: "🌿 Karivepaku Podi",
  prices: {
    "250g": 119,
    "500g": 399,
    "1kg": 749,
  },
},
{
  category: "Podi",
  name: "🌱 Munagaku Podi",
  prices: {
    "250g": 269,
    "500g": 499,
    "1kg": 799,
  },
},
{
  category: "Podi",
  name: "🥜 Palli Podi",
  prices: {
    "250g": 269,
    "500g": 499,
    "1kg": 799,
  },
},
{
  category: "Podi",
  name: "🍲 Sambar Podi",
  prices: {
    "250g": 119,
    "500g": 399,
    "1kg": 749,
  },
},
{
  category: "Podi",
  name: "🌶️ Karam Podi",
  prices: {
    "250g": 219,
    "500g": 399,
    "1kg": 749,
  },
},
{
  category: "Podi",
  name: "💛 Pasupu Podi",
  prices: {
    "250g": 99,
    "500g": 199,
    "1kg": 399,
  },
},
// 🍘 Snacks
{
  category: "Snack",
  name: "🍘 Karam Gavvalu",
  prices: {
    "250g": 189,
    "500g": 299,
    "1kg": 549,
  },
},
{
  category: "Snack",
  name: "🥜 Karaboondi",
  prices: {
    "250g": 189,
    "500g": 319,
    "1kg": 599,
  },
},
// 🍬 Sweets
{
  category: "Sweet",
  name: "🍬 Palli Laddu",
  prices: {
    "250g": 139,
    "500g": 279,
    "1kg": 579,
  },
},
{
  category: "Sweet",
  name: "🥜 Palli Patti",
  prices: {
    "250g": 139,
    "500g": 279,
    "1kg": 579,
  },
},
{
  category: "Sweet",
  name: "🍡 Rava Laddu",
  prices: {
    "250g": 199,
    "500g": 349,
    "1kg": 619,
  },
},
{
  category: "Sweet",
  name: "🍯 Ariselu",
  prices: {
    "250g": 199,
    "500g": 349,
    "1kg": 599,
  },
},
{
  category: "Sweet",
  name: "🥜🍯 Dry Fruit Laddu",
  prices: {
    "250g": 389,
    "500g": 699,
    "1kg": 1299,
  },
},
];
export default products;
