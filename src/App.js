import { Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="product/:id" element={<Product/>} />
    </Routes>
  );
}

function Home() {
  return (
    <h1>Home</h1>
  );
}

function About() {
  return (
    <h1>About</h1>
  );
}

function Product() {
  let {id} = useParams()
  return (
    <h1>{'product: ' + id}</h1>
  );
}

export default App;
