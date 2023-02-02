// in src/components/react-admin/users.tsx
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  TextInput
} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const userFilters = [
  <TextInput source="q" label="Search" alwaysOn />
  
];

export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={userFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};
