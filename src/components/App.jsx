import { Routes, Route, NavLink } from "react-router-dom";
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";

export const App = () => {
  return (
    <div>
    <nav>
      <NavLink to='/'>HomePage</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
    </nav>
      <Routes>
      <Route path="/" element={<div>HP</div>}/>
      <Route path="/about" element={<div>about</div>}/>
      <Route path="/products" element={<div>products</div>}/>

      </Routes>
    </div>
  );
};
