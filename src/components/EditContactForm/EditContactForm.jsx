import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { selectEditing, selectCurrentContact } from 'redux/contacts/selectors';
import { cancelEditContact } from 'redux/contacts/contactsSlice';
import { updateContact } from 'redux/contacts/operations';

import {
  ContacFormButton,
  ContacFormInput,
  ContacFormBox,
  ContacFormText,
  ContacFormAvatar,
  ContacFormIcon,
  ContacFormBoxColum,
  ContacFormtContainer,
} from 'components/ContactForm/ContactForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const EditContactForm = () => {
  const dispatch = useDispatch();

  const cancelEditing = useSelector(selectEditing);

  const pickedContact = useSelector(selectCurrentContact);

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6)
      .max(12)
      .required()
      .matches(
        nameRegExp,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ),
    number: yup
      .string()
      .required()
      .matches(
        phoneRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const editedValue = { ...values, id: pickedContact[0].id };

      dispatch(updateContact(editedValue));
      dispatch(cancelEditContact(!cancelEditing));
      resetForm();
    },
  });

  const handleCancelEdit = () => dispatch(cancelEditContact(!cancelEditing));

  return (
    <ContacFormtContainer component="main" maxWidth="xs">
      <ContacFormBoxColum>
        <ContacFormAvatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <ContacFormIcon />
        </ContacFormAvatar>
        <ContacFormText component="h1" variant="h5">
          Edit Contact
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
            defaultValue={pickedContact[0].name}
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
            defaultValue={pickedContact[0].number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            id="number"
          />
          <ContacFormBoxColum>
            <ContacFormButton type="submit" variant="contained">
              Accept edit
            </ContacFormButton>
            <ContacFormButton
              onClick={handleCancelEdit}
              type="button"
              variant="contained"
            >
              Cancel edit
            </ContacFormButton>
          </ContacFormBoxColum>
        </ContacFormBox>
      </ContacFormBoxColum>
    </ContacFormtContainer>
  );
};
