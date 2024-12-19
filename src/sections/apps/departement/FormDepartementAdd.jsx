import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material ui
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third party
import _ from 'lodash';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// project imports
import IconButton from 'components/@extended/IconButton';
import CircularWithPath from 'components/@extended/progress/CircularWithPath';
import AlertDepartementDelete from './AlertDepartementDelete';

import { openSnackbar } from 'api/snackbar';
import { insertCustomer, updateCustomer } from 'api/customer';

// assets
import { Trash } from 'iconsax-react';

// CONSTANT
const getInitialValues = (customer) => {
  const newLocation = {
    departement_name: '',
    departement_telp: '',
    departement_location: '',
    departement_company: ''
  };

  if (customer) {
    return _.merge({}, newLocation, customer);
  }

  return newLocation;
};

// ==============================|| CUSTOMER ADD / EDIT - FORM ||============================== //

export default function FormDepartementAdd({ customer, closeModal }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const CustomerSchema = Yup.object().shape({
    departement_name: Yup.string().max(255).required('Location Name is required')
  });

  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(!openAlert);
    closeModal();
  };

  const formik = useFormik({
    initialValues: getInitialValues(customer),
    validationSchema: CustomerSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        let newLocation = values;
        newLocation.name = newLocation.firstName + ' ' + newLocation.lastName;

        if (customer) {
          updateCustomer(newLocation.id, newLocation).then(() => {
            openSnackbar({
              open: true,
              message: 'Departement update successfully.',
              variant: 'alert',

              alert: {
                color: 'success'
              }
            });
            setSubmitting(false);
            closeModal();
          });
        } else {
          await insertCustomer(newLocation).then(() => {
            openSnackbar({
              open: true,
              message: 'Departement added successfully.',
              variant: 'alert',

              alert: {
                color: 'success'
              }
            });
            setSubmitting(false);
            closeModal();
          });
        }
      } catch (error) {
        // console.error(error);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  if (loading)
    return (
      <Box sx={{ p: 5 }}>
        <Stack direction="row" justifyContent="center">
          <CircularWithPath />
        </Stack>
      </Box>
    );

  return (
    <>
      <FormikProvider value={formik}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle>{customer ? 'Edit Departement' : 'New Departement'}</DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="location-name">Departement Name</InputLabel>
                        <TextField
                          fullWidth
                          id="departement_name"
                          placeholder="Enter Location Name"
                          {...getFieldProps('departement_name')}
                          error={Boolean(touched.departement_name && errors.departement_name)}
                          helperText={touched.departement_name && errors.departement_name}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="departement-location">Location</InputLabel>
                        <TextField
                          fullWidth
                          id="departement_location"
                          multiline
                          rows={2}
                          placeholder="Enter Location Address"
                          {...getFieldProps('departement_location')}
                          error={Boolean(touched.departement_location && errors.departement_location)}
                          helperText={touched.departement_location && errors.departement_location}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="departement-telp">telp</InputLabel>
                        <TextField
                          fullWidth
                          id="departement_telp"
                          placeholder="Enter Departement Telp"
                          {...getFieldProps('departement_telp')}
                          error={Boolean(touched.departement_telp && errors.departement_telp)}
                          helperText={touched.departement_telp && errors.departement_telp}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="departement-company">company</InputLabel>
                        <TextField
                          fullWidth
                          id="departement_company"
                          placeholder="Enter Company"
                          {...getFieldProps('departement_company')}
                          error={Boolean(touched.departement_company && errors.departement_company)}
                          helperText={touched.departement_company && errors.departement_company}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ p: 2.5 }}>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  {customer && (
                    <Tooltip title="Delete Customer" placement="top">
                      <IconButton onClick={() => setOpenAlert(true)} size="large" color="error">
                        <Trash variant="Bold" />
                      </IconButton>
                    </Tooltip>
                  )}
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button color="error" onClick={closeModal}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                      {customer ? 'Edit' : 'Add'}
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </DialogActions>
          </Form>
        </LocalizationProvider>
      </FormikProvider>
      {customer && <AlertDepartementDelete id={customer.id} title={customer.name} open={openAlert} handleClose={handleAlertClose} />}
    </>
  );
}

FormDepartementAdd.propTypes = { customer: PropTypes.any, closeModal: PropTypes.func };
