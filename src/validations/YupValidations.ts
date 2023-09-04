import * as Yup from 'yup';

export const signInSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export const addProjectSchema = Yup.object({
  name: Yup.string().required('Project Name is Required'),
  description: Yup.string().required('Project Description is Required'),
  tagname1: Yup.string().required('Tag(1) Name is Required'),
  tagname2: Yup.string().required('Tag(2) Name is Required'),
  tagname3: Yup.string().required('Tag(3) Name is Required'),
  imageUrl: Yup.string().required('Project Image is Required'),
  githubLink: Yup.string().required('Github Link is Required'),
  websiteLink: Yup.string().required('Website Link is Required'),
});

export const ContactFormSchema = Yup.object({
  name: Yup.string().required('Full Name is Required'),
  email: Yup.string()
    .email('Email is Invalid')
    .required('Your Email is Required'),
  subject: Yup.string(),
  description: Yup.string()
    .min(10, 'Minimum 10 Letters')
    .required('Your Description is Required'),
});
