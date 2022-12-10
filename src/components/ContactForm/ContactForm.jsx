import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations.js';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations.js';
import { selectContacts } from 'redux/contacts/selectors';
import * as yup from 'yup';
import { Notification, Toast } from 'components/Notification/Notification';

import {
  ContacFormButton,
  ContacFormInput,
  ContacFormBox,
  ContacFormText,
  ContacFormAvatar,
  ContacFormIcon,
  ContacFormBoxColum,
  ContacFormtContainer,
} from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      if (
        contacts.some(el => el.name.toLowerCase() === values.name.toLowerCase())
      ) {
        Notification();
        return;
      }
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <ContacFormtContainer component="main" maxWidth="xs">
      <ContacFormBoxColum>
        <ContacFormAvatar>
          <ContacFormIcon />
        </ContacFormAvatar>
        <ContacFormText component="h1" variant="h5">
          Add Contact
        </ContacFormText>
        <ContacFormBox
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <ContacFormInput
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            autoFocus
          />
          <ContacFormInput
            margin="normal"
            required
            fullWidth
            name="number"
            label="Number"
            type="text"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            id="number"
          />
          <ContacFormButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </ContacFormButton>
        </ContacFormBox>
        <Toast />
      </ContacFormBoxColum>
    </ContacFormtContainer>
  );
};
