import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slide,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import albumApi from 'api/albumApi';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import AlbumProps from 'types/AlbumProps';
import ProductProps from 'types/ProductProps';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

//data type
const schema = yup.object({
  albumId: yup.number().required('Album is required'),
  id: yup.string().required('Id is required'),
  title: yup.string().required('Title is required').max(100, 'Title is too long').ensure().trim(),
});

function DialogForm({
  handleClose,
  open,
  onFinish,
}: {
  handleClose: () => void;
  open: boolean;
  onFinish: (data: ProductProps) => void;
}) {
  const [albums, setAlbums] = useState<AlbumProps[]>([]);
  const [albumId, setAlbumId] = useState<string>('');

  //declare form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ProductProps>({ resolver: yupResolver(schema) });

  //fetch albums api
  useEffect(() => {
    const getAlbums = async () => {
      const albumData = await albumApi.getAll();
      setAlbums(albumData);
    };

    getAlbums();

    //rerender when submit successful and reset all fields to default
    reset();
  }, [isSubmitSuccessful]);

  //handle submit
  const onSubmit = async (data: ProductProps) => {
    onFinish(data);
  };

  //handle selections onChange
  const handleChangeAlbum = (e: SelectChangeEvent<unknown>) => {
    setAlbumId(e.target.value as string);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{'Product'}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Album</InputLabel>
              <Select
                {...register('albumId')}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Album'
                value={albumId}
                onChange={(e) => handleChangeAlbum(e)}
              >
                {albums.map((album) => (
                  <MenuItem key={album.id} value={album.id}>
                    {album.id} : {album.title}
                  </MenuItem>
                ))}
              </Select>
              {errors.albumId && (
                <Typography variant='body2' sx={{ color: 'error.main' }}>
                  {errors.albumId.message}
                </Typography>
              )}
            </FormControl>
            <Stack>
              <TextField
                {...register('id')}
                fullWidth
                label='ID'
                variant='standard'
                margin='normal'
              />
              {errors.id && (
                <Typography variant='body2' sx={{ color: 'error.main' }}>
                  {errors.id.message}
                </Typography>
              )}
              <TextField
                {...register('title')}
                fullWidth
                label='Title'
                variant='standard'
                margin='normal'
              />
              {errors.title && (
                <Typography variant='body2' sx={{ color: 'error.main' }}>
                  {errors.title.message}
                </Typography>
              )}
            </Stack>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button type='submit'>Finish</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogForm;
