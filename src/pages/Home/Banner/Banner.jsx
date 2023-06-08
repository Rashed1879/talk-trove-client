import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import slide1 from '../../../assets/images/slide1.jpg';
import slide2 from '../../../assets/images/slide2.jpg';
import slide4 from '../../../assets/images/slide4.jpg';

const Banner = () => {
	return (
		<div className="mb-20">
			<AwesomeSlider animation="cubeAnimation">
				<div
					data-src={slide1}
					className="relative w-full h-full flex items-center justify-center"
				>
					<div className="absolute inset-0 bg-black opacity-50"></div>

					<div className="z-10 text-center">
						<h2 className="text-3xl md:text-7xl text-white mb-5">
							Unlimited classes <br />
							Unlimited learning!
						</h2>
						<p className="text-white text-base md:text-2xl">
							Start speaking confidently - with live classes{' '}
							<br />
							taught by world-class instructors.
						</p>
					</div>
				</div>
				<div
					data-src={slide2}
					className="relative w-full h-full flex items-center justify-center"
				>
					<div className="absolute inset-0 bg-black opacity-50"></div>

					<div className="z-10 text-center">
						<h2 className="text-3xl md:text-7xl text-white mb-5">
							Language Immersion Program <br />
							Language-rich Environment!
						</h2>
						<p className="text-white text-base md:text-2xl">
							Immerse yourself in a language-rich environment.
							<br />
							Accelerate your learning with our intensive language
							immersion program.
						</p>
					</div>
				</div>
				<div
					data-src={slide4}
					className="relative w-full h-full flex items-center justify-center"
				>
					<div className="absolute inset-0 bg-black opacity-50"></div>

					<div className="z-10 text-center">
						<h2 className="text-3xl md:text-7xl text-white mb-5">
							Customized Language Courses <br />
							Learn in a way you like!
						</h2>
						<p className="text-white text-base md:text-2xl">
							Tailor your language learning experience with our
							customized courses. <br />
							Personalized approach will help you achieve your
							language goals.
						</p>
					</div>
				</div>
			</AwesomeSlider>
		</div>
	);
};

export default Banner;
