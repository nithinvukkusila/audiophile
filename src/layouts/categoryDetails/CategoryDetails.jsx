import { useEffect, useState } from "react";
import "./CategoryDetails.scss";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import AboutCompany from "../../components/aboutCompany/AboutCompany";
import Categories from "../../components/categories/categories";

const CategoryDetails = () => {
  const params = useParams();

  const [name, setName] = useState("headphones");

  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    setProductCategory(
      allProducts.filter((product) => {
        return product.category === params.name;
      })
    );
  }, [params]);



  return (
    <div className="categoryDetails">
      <h1 className="title">Head Phones</h1>
      {productCategory.map((product) => {
        return (
          <div key={product.id} className="category">
            <img src={product.image.mobile} alt="ear phones" />
            <p className="tag">new product</p>
            <h1 className="name">{product.name}</h1>
            <p className="desc">{product.description}</p>
            <div className="button">
              <PrimaryButton color="white" />
            </div>
          </div>
        );
      })}
      <Categories />
      <AboutCompany />
    </div>
  );
};

export default CategoryDetails;
