import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((e) => e.category))];
console.log(allCategories);
function App() {
	const [menu, setMenu] = useState(items);
	const [cata, setCata] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenu(items);
			return;
		}

		const newItems = items.filter((e) => e.category === category);
		setMenu(newItems);
	};

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>

				<Categories categories={cata} filterItems={filterItems} />

				<Menu items={menu} />
			</section>
		</main>
	);
}

export default App;
