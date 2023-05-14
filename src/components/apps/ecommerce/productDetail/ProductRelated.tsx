import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  CardContent,
  Grid,
  Rating,
  Skeleton,
} from "@mui/material";
import { useSelector, useDispatch } from "../../../../store/Store";
import { fetchProducts } from "../../../../store/apps/eCommerce/ECommerceSlice";
import Link from "next/link";
import BlankCard from "../../../shared/BlankCard";
import { ProductType } from "../../../../types/apps/eCommerce";

const ProductRelated = () => {
  const dispatch = useDispatch();

  // Get Product
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterRelatedProduct = (products: ProductType[]) => {
    if (products) return products.filter((t) => t.related);

    return products;
  };

  // Get Products
  const Relatedproducts = useSelector((state) =>
    filterRelatedProduct(state.ecommerceReducer.products)
  );

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Typography variant="h2" mb={2} mt={5}>
        Related Products
      </Typography>
      <Grid container spacing={3}>
        {Relatedproducts.map((product) => (
          <Grid
            item
            xs={12}
            lg={3}
            sm={4}
            display="flex"
            alignItems="stretch"
            key={product.title}
          >
            {/* ------------------------------------------- */}
            {/* Product Card */}
            {/* ------------------------------------------- */}
            <BlankCard sx={{ p: 0 }} className="hoverCard">
              <Typography
                component={Link}
                href={`/app/ecommerce/detail/${product.id}`}
              >
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={270}
                  ></Skeleton>
                ) : (
                  <img src={product.photo} alt="img" width="100%" />
                )}
              </Typography>
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography variant="h4" fontWeight={600}>
                  {product.title}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h4">${product.price}</Typography>
                    <Typography
                      color={"GrayText"}
                      ml={1}
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${product.salesPrice}
                    </Typography>
                  </Stack>
                  <Rating
                    name="read-only"
                    size="small"
                    value={product.rating}
                    readOnly
                  />
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductRelated;
