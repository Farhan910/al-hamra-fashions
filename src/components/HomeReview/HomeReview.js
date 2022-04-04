import { Button} from "react-bootstrap";
import Card from "../Card/Card";
import useProducts from "../Hooks/Hooks";

import "./HomeReview.css";

const HomeReview = () => {
  const [products] = useProducts();
  const { name, id, img } = products;

  return (
    <div>
      {products.slice (0, 3).map((product) => (
        
        <>
          <>
            <h2>name: {product.name}</h2>
            <img src={product.img} alt="" />
          </>
          <h3>id: {product.id}</h3>
        </>
      ))}

      <h2>Review :{name} </h2>
    </div>
  );
};

export default HomeReview;
