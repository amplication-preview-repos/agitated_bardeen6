import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AttendanceRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};