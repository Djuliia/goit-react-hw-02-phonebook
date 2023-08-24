import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';


const phoneBookSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
});

export const Phonebook = () => {
  return (
    <Formik>
      initialValues={{ name: '' }}
      validationSchema={phoneBookSchema}
      onSubmit=
      {(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
      <Form>
        <label htmlFor={nanoid()}>Name</label>
        <Field type="text" name="name" id={nanoid()} />
        <ErrorMessage name="name" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
