import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductProps from 'types/ProductProps';

function CardItem({
  product,
  handleDelete,
  handleUpdate,
}: {
  product: ProductProps;
  handleDelete: (id: string) => void;
  handleUpdate: (product: ProductProps) => void;
}) {
  return (
    <>
      <Card sx={{ height: '100%', width: '100%' }}>
        <CardMedia component='img' alt='green iguana' height='140' image={product.thumbnailUrl} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Product {product.id}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {product.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => handleUpdate(product)}>
            Update
          </Button>
          <Button size='small' onClick={() => handleDelete(product.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardItem;
