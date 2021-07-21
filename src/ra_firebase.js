import firebaseConfig from "./firebase";

import {
  FirebaseDataProvider,
} from "react-admin-firebase";

export const options = {
  logging: true,
  rootRef: "root_collection/some_document",
};
export const dataProvider = FirebaseDataProvider(firebaseConfig, options);
