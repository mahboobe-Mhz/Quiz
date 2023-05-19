import * as yup from 'yup';
const registerSchema = yup.object().shape({
number: yup
.number()
.typeError('please write number')
.min(1, 'the minimum number is 1 question')
.max(10, 'the maximum number is 10 questions')
.required('number of questions is required'),
Category: yup.string().required('please select on of categories'),
Difficulty: yup.string().required('please select on of difficulties'),
});
export default registerSchema;