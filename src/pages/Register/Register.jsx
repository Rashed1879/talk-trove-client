import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import regiserbg from '../../assets/images/register.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				const createdUser = result.user;
				updateUserProfile(data.name, data.photo)
					.then(() => {
						console.log(createdUser);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
		reset();
	};

	return (
		<>
			<div className="bg-base-200">
				<h2 className="text-center py-5 text-5xl font-bold text-black">
					Sign Up
				</h2>
				<div className="flex items-center flex-row-reverse m-16">
					<div className="card w-[500px] mx-auto mb-8 shadow-2xl bg-white border-2 border-black">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="card-body"
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-xl font-bold text-black">
										Name
									</span>
								</label>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									{...register('name', { required: true })}
									className="input border-2 border-black"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-xl font-bold text-black">
										Photo
									</span>
								</label>
								<input
									type="text"
									name="photo"
									placeholder="Your Photo Url"
									{...register('photo', { required: true })}
									className="input border-2 border-black"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-xl font-bold text-black">
										Email
									</span>
								</label>
								<input
									type="email"
									placeholder="email"
									name="email"
									{...register('email', { required: true })}
									className="input border-2 border-black"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-xl font-bold text-black">
										Password
									</span>
								</label>
								<input
									type="password"
									placeholder="password"
									name="password"
									{...register('password', {
										required: true,
										minLength: 6,
										pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
									})}
									className="input border-2 border-black"
								/>
								{errors.password?.type === 'minLength' && (
									<p className="text-red-600">
										Password must be 6 characters
									</p>
								)}
								{errors.password?.type === 'pattern' && (
									<p className="text-red-600">
										Password must have one Uppercase and one
										special character.
									</p>
								)}
								<label className="label"></label>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-xl font-bold text-black">
										Confirm Password
									</span>
								</label>
								<input
									type="password"
									placeholder="re-type your password"
									name="confirmPassword"
									{...register('confirmPassword', {
										required: true,
									})}
									className="input border-2 border-black"
									required
								/>
								<p className="mt-2 text-orange-600">
									Already have an account?{' '}
									<Link
										className="link link-hover font-bold text-blue-700"
										to="/login"
									>
										Please Login
									</Link>
								</p>
								<p className="text-error"></p>
							</div>
							<div className="form-control mt-6">
								<button className="btn bg-black text-white hover:text-black hover:bg-white rounded-full">
									Sign Up
								</button>
							</div>
						</form>
					</div>
					<div>
						<img className="w-[500px]" src={regiserbg} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
