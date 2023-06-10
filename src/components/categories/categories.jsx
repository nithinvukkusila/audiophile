import { categories } from "../../data";
import "./categories.scss";
import earphones from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <div className="category">
            <div className="category-img">
              <img src={category.image}></img>
            </div>
            <p className="shadow">imagesdf</p>
            <h4 className="name">{category.name}</h4>
            <button>SHOP</button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
