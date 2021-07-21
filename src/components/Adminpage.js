import React from "react";
import { Admin, Resource } from "react-admin";
import styled from "styled-components";
import {PostList} from "../posts";
import { dataProvider } from "../ra_firebase";

function Adminpage() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="snacks"
        list={PostList}
        //   show={PostShow}
        //   create={PostCreate}
        //   edit={PostEdit}
      /> 
    </Admin>
  );
}
const Component = styled.div;
export default Adminpage;
