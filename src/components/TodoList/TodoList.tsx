import { yupResolver } from '@hookform/resolvers/yup';
import SendIcon from '@mui/icons-material/Send';
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ToDoProps from 'types/TodoProps';
import { TodoData } from 'utils/datas';
import * as yup from 'yup';
import Todo from './Todo/Todo';
import TodoListStyles from './TodoList.module.scss';

//declaration schema with yup
const schema = yup.object().shape({
  todoTitle: yup.string().required('Title is required').default('').ensure().trim(),
});

type InputTodo = {
  todoTitle: string;
};

//fake calling api
const getData = async (data: ToDoProps[]) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
    console.log('Fetching data...');
  });
  return data;
};

function TodoList() {
  const [todo, setTodo] = useState<ToDoProps[]>([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await getData(TodoData);
        setTodo(response);
      } catch (error) {
        console.log('Failed to fetch data: ', error);
      }
    };

    fetchTodo();
  }, []); //only render once when component mounted

  //declare form with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTodo>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InputTodo> = (data) => {
    const newTodo: ToDoProps = {
      id: todo.length + 1,
      title: data.todoTitle,
      date: new Date(),
    };

    setTodo([...todo, newTodo]);
    data.todoTitle = '';
  };

  return (
    <>
      <Grid container>
        <Grid container lgOffset={3} lg={6} columns={{ lg: 1 }} rowSpacing={{ lg: 2 }}>
          <Grid lg={1}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              spacing={{ lg: 2 }}
            >
              <Stack>
                <Typography variant='body1'>Today</Typography>
                <Typography variant='body2'>{todo.length} items</Typography>
              </Stack>
              <form className={`${TodoListStyles.addNewForm}`} onSubmit={handleSubmit(onSubmit)}>
                <Stack direction='row' spacing={2}>
                  <TextField
                    id='todoInput'
                    type='text'
                    fullWidth
                    placeholder='To do something'
                    {...register('todoTitle')}
                  />

                  <Button
                    variant='contained'
                    size='small'
                    endIcon={<SendIcon />}
                    type='submit'
                    className='btnAddNew'
                  >
                    Add new
                  </Button>
                </Stack>
                {errors.todoTitle && (
                  <Typography variant='body2' sx={{ color: 'error.main' }}>
                    {errors.todoTitle.message}
                  </Typography>
                )}
              </form>
            </Stack>
          </Grid>

          <Grid lg={1}>
            <Stack
              direction='column'
              justifyContent='space-between'
              alignItems='center'
              spacing={1}
            >
              {todo.sort(compareDates).map((item, index) => (
                <Todo
                  toDo={item}
                  handelTrashClick={() =>
                    setTodo(todo.filter((trashTodo) => trashTodo.id !== item.id))
                  }
                  key={index}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const compareDates = (a: ToDoProps, b: ToDoProps) => b.date.getTime() - a.date.getTime();

export default TodoList;
