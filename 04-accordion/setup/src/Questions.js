import SingleQuestion from './Question';
import data from './data';
import React from 'react';

const Questions = () => {
	return (
		<main>
			<div className='container'>
				<h3>Questions and Answers</h3>
				<section className='info'>
					{data.map((e) => {
						return <SingleQuestion key={e.id} {...e} />;
					})}
				</section>
			</div>
		</main>
	);
};

export default Questions;
