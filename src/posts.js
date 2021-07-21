import * as React from "react";

import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
} from "react-admin-firebase";
// import RichTextInput from "ra-input-rich-text";

//show post list
export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <RichTextField source="name" />
      <TextField source="image" />
      <TextField source="category" />
      <TextField source="reviews" />
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
      <TextField source="image" />
      <TextField source="category" />
      {/* <FileField source="file.src" title="file.title" /> */}
    </SimpleShowLayout>
  </Show>
);

// export default {};
