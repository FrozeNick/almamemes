import { Routes, Route } from "react-router-dom";
import Layout from "./lib/Layout";
import Home from "./routes/home";
import Article from "./routes/article";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}