import { useState } from "react";
import * as yup from "yup";
import Container from "./shared/Container";
import H2 from "./shared/type/H2";
import P from "./shared/type/P";

const formSchema = yup.object().shape({
	email: yup.string().email("Must be a valid email address.").required("Email is required"),
});

const SignIn = () => {
	const [formState, setFormState] = useState({
		email: "",
	});

	const [errors, setErrors] = useState({
		email: "",
	});

	const validateChange = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: "",
				});
			})
			.catch((err) => {
				setErrors({
					...errors,
					[e.target.name]: err.errors[0],
				});
			});
	};

	const inputChange = (e) => {
		e.persist();
		const newFormData = {
			...formState,
			[e.target.name]: e.target.value,
		};
		validateChange(e);
		setFormState(newFormData);
	};

	return (
		<Container className='signIn'>
			<H2 className='signIn'>Get early access today</H2>
			<P className='signIn'>
				It only takes a minute to sign up and our free starter tier is extremely generous. If you
				have any questions, our support team would be happy to help you.
			</P>
			<Container className='signInForm'>
				<form>
					<label htmlFor='email'>
						<input
							autoComplete='email'
							type='email'
							name='email'
							value={formState.email}
							onChange={inputChange}
						/>
					</label>
				</form>
			</Container>
		</Container>
	);
};

export default SignIn;
