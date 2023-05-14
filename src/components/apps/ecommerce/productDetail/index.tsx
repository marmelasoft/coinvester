import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// MUI Elements
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Rating,
  Divider,
  Stack,
  useTheme,
  ButtonGroup,
} from "@mui/material";

import { AppState, useSelector, useDispatch } from "../../../../store/Store";
import {
  fetchProducts,
  addToCart,
} from "../../../../store/apps/eCommerce/ECommerceSlice";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import AlertCart from "../productCart/AlertCart";
import { ProductType } from "../../../../types/apps/eCommerce";
import Image from "next/image";

const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const getTitle: string | any = router.query.id;
  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(getTitle);

  // Get Products
  const product: ProductType | any = useSelector(
    (state: AppState) => state.ecommerceReducer.products[getTitle - 1]
  );

  //set qty
  const [count, setCount] = useState(1);

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setCartalert(false);
  };
  return (
    <Box p={2}>
      {product ? (
        <>
          <Box display="flex" alignItems="center">
            {/* ------------------------------------------- */}
            {/* Badge and category */}
            {/* ------------------------------------------- */}
            <Chip label="In Stock" color="success" size="small" />
            <Typography
              color="textSecondary"
              variant="h5"
              ml={1}
              textTransform="capitalize"
            >
              {product?.category}
            </Typography>
          </Box>
          {/* ------------------------------------------- */}
          {/* Title, location and description */}
          {/* ------------------------------------------- */}
          <Typography fontWeight="600" variant="h3" mt={1}>
            {product?.title}
          </Typography>
          <Typography fontWeight="600" variant="subtitle1" mt={1}>
            {product?.location}
          </Typography>
          <Typography
            variant="subtitle1"
            mt={1}
            color={theme.palette.text.secondary}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex
            arcu, tincidunt bibendum felis.
          </Typography>
          {/* ------------------------------------------- */}
          {/* Price */}
          {/* ------------------------------------------- */}
          <Typography mt={2} variant="h3" fontWeight={600}>
            <Box
              component={"small"}
              color={theme.palette.text.secondary}
              sx={{ textDecoration: "line-through" }}
            ></Box>{" "}
            <Stack direction="row" alignItems="center">
              <Image src="/images/eth.svg" alt="eth" width={20} height={20} />
              {product.price}
            </Stack>
          </Typography>
          {/* ------------------------------------------- */}
          {/* Ratings */}
          {/* ------------------------------------------- */}
          <Stack direction={"row"} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating
              name="simple-controlled"
              size="small"
              value={product.rating}
              readOnly
            />
            <Link href="/" color="inherit">
              (236 reviews)
            </Link>
          </Stack>
          <Divider />
          {/* ------------------------------------------- */}
          {/* Qty */}
          {/* ------------------------------------------- */}
          <Stack direction="row" alignItems="center" pb={5}>
            <Typography variant="h5" mr={4}>
              QTY:
            </Typography>
            <Box>
              <ButtonGroup
                size="small"
                color="secondary"
                aria-label="small button group"
              >
                <Button
                  key="one"
                  onClick={() => setCount(count < 2 ? count : count - 1)}
                >
                  <IconMinus size="1.1rem" />
                </Button>
                <Button key="two">{count}</Button>
                <Button key="three" onClick={() => setCount(count + 1)}>
                  <IconPlus size="1.1rem" />
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />
          {/* ------------------------------------------- */}
          {/* Buttons */}
          {/* ------------------------------------------- */}
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="primary"
                size="large"
                fullWidth
                component={Link}
                variant="contained"
                href="/apps/eco-checkout"
                onClick={() => dispatch(addToCart(product))}
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
          {/* ------------------------------------------- */}
          {/* Alert When click on add to cart */}
          {/* ------------------------------------------- */}
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        "No product"
      )}
    </Box>
  );
};

export default ProductDetail;
