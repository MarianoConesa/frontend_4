import { useState } from 'react';
import { Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import jsonapiClient from 'ra-jsonapi-client';

import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';
import { UserList } from 'components/react-admin/users';
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList } from 'components/react-admin/migrations';

import CustomerIcon from '@mui/icons-material/SupportAgent';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import MigrationIcon from '@mui/icons-material/Storage';

import { AdminLayout } from 'components/react-admin/adminLayout';

import { ArtworkList} from 'components/react-admin/artworks';
import ArtworkIcon from '@mui/icons-material/Palette';

import { default as AuthProvider } from 'components/react-admin/authProvider';

import { default as Login } from 'pages/login';

const dataProvider = jsonapiClient('http://encuentro.test/api'); //JsonServerProvider('http://encuentro.test/api/records'); https://jsonplaceholder.typicode.com

const RAdmin = () => {
  
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider)
  }

  const myLogin = <Login handleDataProvider={handleDataProvider} />

  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
  const [dataProvider, setDataProvider] = useState(null)

  if (!dataProvider) {
    handleDataProvider(jsonapiClient(API_URL))
  }
  return (
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    //layout={AdminLayout}
    authProvider={AuthProvider}
    loginPage={myLogin}
  >
    
    <Resource name="customers" list={CustomerList} 
              icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />

    <Resource name="migrations" list={MigrationList} 
              icon={MigrationIcon} recordRepresentation="migration" />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    <Resource name="artworks" list={ArtworkList} icon={ArtworkIcon} />
  </Admin>
  )}

export default RAdmin;
