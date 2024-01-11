import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

const MultiInput = ({ title, inputs, values, setValues, pageDisabled }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setValues({ ...values, [name]: checked });
    setValues({ ...values, [name]: value });
  };

  // useEffect(() => {
  //   setValues(values);
  // }, [values]);

  useEffect(() => {
    inputs.map(input => {
      if (input.type === 'select') {
       setValues({...values, [input.name]: input.options[0].value})
      }
    })
  }, [])

  return (
    <Grid container fullWidth pb={2}>
      <Grid item xs={12} mb={0}>
        <Typography fontSize={14} color="purple.main">
          {title?.toUpperCase()}
        </Typography>
      </Grid>

      <Grid container spacing={1} mt={1}>
        {inputs.map((input) => {
          switch (input.type) {
            case "checkbox":
              return (
                <Grid item xs={12} sm={input.size || 3}>
                  <FormGroup sx={{ pl: 0 }}>
                    <FormLabel>{input.label}</FormLabel>
                    <FormControlLabel
                      label={values[input.name] ? "Sim" : "Não"}
                      control={
                        <Switch
                          size="large"
                          name={input.name}
                          // checked={values[input.name]}
                          onChange={handleChange}
                          disabled={input.disabled || pageDisabled}
                          defaultChecked={values[input.name]}
                        />
                      }
                    />
                  </FormGroup>
                </Grid>
              );
            // case "datetime":
            //   return (
            //     <Grid item xs={12} sm={input.size || 3}>
            //       <FormGroup>
            //         <FormLabel>{input.label}</FormLabel>
            //         <DatePicker
            //           name={input.name}
            //           // defaultValue={formValues[input.name]}
            //           value={values[input.name]}
            //           onChange={(event) => {
            //             handleChange({
            //               target: { name: input.name, value: event },
            //             });
            //           }}
            //           disabled={input.disabled || pageDisabled}
            //           toolbarPlaceholder={input.placeholder}
            //           renderInput={(params) => (
            //             <TextField size="small" fullWidth {...params} />
            //           )}
            //         />
            //       </FormGroup>
            //     </Grid>
            //   );
            case "select":
              return (
                <Grid item xs={12} sm={input.size || 3}>
                  <FormGroup>
                    <FormLabel>{input.label}</FormLabel>
                    <Select
                      fullWidth
                      required={input.required}
                      name={input.name}
                      multiline={input.type === "multiline" ? true : false}
                      size="small"
                      placeholder={input.placeholder}
                      // defaultValue={formValues[input.name]}
                      value={values[input.name] ? values[input.name] : input.options[0].value}
                      onChange={handleChange}
                      disabled={input.disabled || pageDisabled}
                      // defaultValue={input.options[0].label}
                    >
                      {/* <MenuItem value=''>Selecione</MenuItem> */}
                      {input.options.map((option, index) => (
                        <MenuItem value={option.label}>{option.label}</MenuItem>
                      ))}
                    </Select>
                  </FormGroup>
                </Grid>
              );
            case "multiline":
              return (
                <Grid item xs={12} sm={input.size || 3}>
                  <FormGroup>
                    <FormLabel>{input.label}</FormLabel>
                    <TextField
                      required={input.required || false}
                      id={input.name}
                      name={input.name}
                      autoComplete={input.autoComplete}
                      autoFocus
                      multiline
                      variant="outlined"
                      size="small"
                      margin="dense"
                      minRows={4}
                      disabled={input.disabled || pageDisabled}
                      fullWidth
                      error={input.error}
                      helperText={input.error ? input.helperText : ""}
                      placeholder={input.placeholder}
                      value={values[input.name]}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: input.startAdornment,
                        endAdornment: input.endAdornment,
                      }}
                    />
                  </FormGroup>
                </Grid>
              );
            default:
              return (
                <Grid item xs={12} sm={input.size || 3}>
                  <FormGroup>
                    <FormLabel>{input.label}</FormLabel>
                    <TextField
                      required={input.required || false}
                      id={input.name}
                      name={input.name}
                      autoComplete={input.autoComplete}
                      autoFocus
                      variant="outlined"
                      size="small"
                      margin="dense"
                      type={input.type}
                      minRows={10}
                      disabled={input.disabled || pageDisabled}
                      fullWidth
                      error={input.error}
                      helperText={input.error ? input.helperText : ""}
                      placeholder={input.placeholder}
                      value={values[input.name]}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: input.startAdornment,
                        endAdornment: input.endAdornment,
                      }}
                    />
                  </FormGroup>
                </Grid>
              );
          }
        })}
      </Grid>
    </Grid>
  );
};

export default MultiInput;
