import { Box, Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Stack } from '@mui/system';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductProps from 'types/ProductProps';
import CardItem from './CardItem/CardItem';
import DialogForm from './Dialog/Dialog';
import SearchBar from 'components/Search/SearchBar';
import { set } from 'react-hook-form';

function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [searchProducts, setSearchProducts] = useState<ProductProps[]>([]);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        // _limit: 60,
        // _page: 1,
      };

      const dataRetrived: ProductProps[] = await productApi.getAll(params);
      setProducts(dataRetrived);
      setSearchProducts(dataRetrived);
    };

    fetchData();
  }, []);

  //remove
  const deleteProduct = async (id: string) => {
    await productApi.remove(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  //update
  const updateProduct = async (data: ProductProps) => {
    const newProduct = await productApi.update(data);
    // setProducts([...products, newProduct]);
    console.log(newProduct);
  };

  //add
  const addProduct = async (data: ProductProps) => {
    const newProduct = await productApi.add(data);
     
    console.log(data);
  };

  //search
  const handleSearch = (searchInput: string) => {
    console.log(searchInput);
    if (searchInput.length > 0) {
      setSearchProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setSearchProducts(products);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid2
      container
      maxWidth='lg'
      px={2}
      rowSpacing={{ lg: 1, md: 2 }}
      columnSpacing={{ lg: 2, md: 2 }}
      columns={{ lg: 12, md: 12 }}
    >
      <DialogForm handleClose={handleClose} open={open} onFinish={addProduct} />

      <Grid2 lg={12}>
        <Stack direction='row' alignItems='center' justifyContent='space-between' maxWidth='lg'>
          <Box>
            <Typography variant='h6'>Product List</Typography>
            <Typography variant='subtitle1'>{searchProducts.length} items</Typography>
          </Box>

          <SearchBar onSearch={handleSearch} />

          <Button onClick={handleClickOpen} size='small' variant='contained' color='primary'>
            New Product
          </Button>
        </Stack>
      </Grid2>

      <Grid2 container lg={12} maxWidth='lg'>
        {searchProducts.reverse().map((product, i) => (
          <Grid2 xs={4} key={i} display='flex' justifyContent='center' alignItems='center'>
            <CardItem product={product} handleDelete={deleteProduct} handleUpdate={updateProduct} />
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
}

export default Products;
