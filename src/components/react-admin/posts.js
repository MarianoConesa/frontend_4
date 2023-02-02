// in src/components/react-admin/posts.tsx
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput
  } from 'react-admin';

import { useRecordContext} from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user_id" label="User" reference="users" />
];

export const PostList = () => (
    <List filters={postFilters} >
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="user_id" reference="users" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  );

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="user_id" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
    </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
        <ReferenceInput source="user_id" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
    );
