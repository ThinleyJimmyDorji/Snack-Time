import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateTimeInput,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  NumberInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const PostList = (props) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="category" />
      <TextField source="image" />
      <TextField source="price" />
      <TextField source="uploaded on" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="category" />
      <TextField source="image" />
      <TextField source="price" />
      <TextField source="reviews" />
      <TextField source="uploaded on" />
      <TextField source="last update" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <TextInput source="id" /> */}
      <TextInput source="name" />
      <TextInput source="category" />
      <TextInput source="image" />
      <NumberInput source="price" />
      <NumberInput source="reviews" />
      <RichTextInput source="description" />
      <DateTimeInput source="uploaded on" />
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateTimeInput disabled source="uploaded on" />
      <DateTimeInput source="last update" />
      <TextInput source="name" />
      <TextInput source="category" />
      <TextInput source="image" />
      <NumberInput source="price" />
      <NumberInput source="reviews" />
      <RichTextInput source="description" />
      {/* <ReferenceInput
        label="User"
        source="user_id"
        reference="users"
        // filter={{ isAdmin: true }}
      >
        <SelectInput label="User" optionText="name" />
      </ReferenceInput> */}
    </SimpleForm>
  </Edit>
);
