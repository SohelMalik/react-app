import { useNavigate } from "react-router-dom";


const ProductCard = (props) => {
  const { title, price, thumbnail , id  } = props;
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/${id}/view`);
  }
  return (
    <div className="p-5 bg-amber-400 rounded-xl max-w-200" onClick={handleViewProduct}>
      <p>{title}</p>
      <p>Rs. {price * 85}</p>
      <img src={thumbnail} />
    </div>
  );
};

export { ProductCard }; // ✅ Named export
