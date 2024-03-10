import { CheckBoxOutlineBlank } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type TodoItem = {
  done: boolean;
  text: string;
};

const DashboardView: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="sm" width="100%">
        <Card>
          <CardHeader
            title={
              <Typography variant="h1" align="center">
                Your Todo List
              </Typography>
            }
          />
          <CardContent>
            <Button
              fullWidth
              variant="contained"
              onClick={() => setOpenDialog(true)}
            >
              Add Item
            </Button>
            <List>
              {todoList.map((item, index) => (
                <MenuItem key={index} onClick={() => console.log('clicked')}>
                  <ListItemIcon>
                    {item.done ? <Checkbox /> : <CheckBoxOutlineBlank />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </MenuItem>
              ))}
            </List>
          </CardContent>
        </Card>
        <TodoItemDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          setTodoList={setTodoList}
        />
      </Box>
    </Box>
  );
};
export default DashboardView;

type TooltipItemDialog = {
  onClose: () => void;
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
} & Omit<DialogProps, 'onClose'>;

const TodoItemDialog: React.FC<TooltipItemDialog> = ({
  onClose,
  setTodoList,
  ...rest
}) => {
  const [value, setValue] = useState('');
  return (
    <Dialog onClose={onClose} {...rest} maxWidth="sm" fullWidth>
      <DialogTitle>Add Todo Item</DialogTitle>
      <DialogContent>
        <Stack pt={2}>
          <TextField
            label="Todo Item"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            setTodoList((prev) => [...prev, { done: false, text: value }]);
            setValue('');
            onClose();
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
