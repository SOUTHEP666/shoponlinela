import { Card, Button } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      < img 
        src={product.imageUrl} 
        alt={product.name}
        style={{ width: "100%", height: 200, objectFit: "cover" }}
      />
      <div style={{ padding: 16 }}>
        <h3>{product.name}</h3>
        <p>¥{product.price}</p >
        <Button 
          variant="contained" 
          onClick={() => console.log("Add to cart", product)}
        >
          加入购物车
        </Button>
      </div>
    </Card>
  );
}