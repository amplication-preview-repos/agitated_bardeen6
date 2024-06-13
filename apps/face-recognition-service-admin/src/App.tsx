import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AttendanceRecordList } from "./attendanceRecord/AttendanceRecordList";
import { AttendanceRecordCreate } from "./attendanceRecord/AttendanceRecordCreate";
import { AttendanceRecordEdit } from "./attendanceRecord/AttendanceRecordEdit";
import { AttendanceRecordShow } from "./attendanceRecord/AttendanceRecordShow";
import { FaceDataList } from "./faceData/FaceDataList";
import { FaceDataCreate } from "./faceData/FaceDataCreate";
import { FaceDataEdit } from "./faceData/FaceDataEdit";
import { FaceDataShow } from "./faceData/FaceDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FaceRecognitionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AttendanceRecord"
          list={AttendanceRecordList}
          edit={AttendanceRecordEdit}
          create={AttendanceRecordCreate}
          show={AttendanceRecordShow}
        />
        <Resource
          name="FaceData"
          list={FaceDataList}
          edit={FaceDataEdit}
          create={FaceDataCreate}
          show={FaceDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
