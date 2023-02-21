// in src/components/react-admin/users.tsx
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EmailField } from 'react-admin';

export const SanitarianList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.username}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.especialidad}
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
