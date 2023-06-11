import { categories } from "../../data";
import "./categories.scss";
import earphones from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate()
  const goto = (name) => {
    navigate(`/category/${name}`)
  }
  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <div className="category" key={category.id} onClick={() => goto(category.id)} >
            <div className="category-img">
              <img src={category.image} alt="product category"></img>
            </div>
            <p className="shadow">imagesdfsdf</p>
            <h4 className="name">{category.name}</h4>
            <button>SHOP</button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
