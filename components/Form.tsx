import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";

type FormValues = {
  email: string;
  number: string;
};

const Form: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    email: "",
    number: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setValues({
      ...values,
      [event.target.name as keyof FormValues]: event.target.value as string,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedOption(event.target.value as string);
  };
  const handleSend = () => {
    console.log(values);
  };

  return (
    <form>
      <h2 className="text-lg font-semibold text-custom-bg p-2 underline">
        TRANSFER MONEY
      </h2>{" "}
      <br />
      <h4 id="select-option-label" className="font-semibold text-custom-bg">
        {" "}
        Select Platform
      </h4>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        label="Options"
        name="selectedOption"
      >
        <MenuItem value="Email">Email</MenuItem>
        <MenuItem value="Phone">Phone</MenuItem>
      </Select>
      <br />
      <br />
      <h4 id="select-option-label" className="font-semibold text-custom-bg">
        {" "}
        Receiver Information
      </h4>
      <TextField
        label={selectedOption == "Email" ? "Enter Email" : "Enter Phone"}
        type={selectedOption == "Email" ? "email" : "tel"}
        value={values.email}
        onChange={handleChange}
        name="email"
      />
      <br />
      <br />
      <h4 id="select-option-label" className="font-semibold text-custom-bg">
        {" "}
        Amount in USD Dollar
      </h4>
      <TextField
        label="Enter Amount"
        type="number"
        value={values.number}
        onChange={handleChange}
        name="number"
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </form>
  );
};

export default Form;
