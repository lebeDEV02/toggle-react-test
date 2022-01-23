import React from 'react';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import { useState } from 'react';
import Item from '../components/Item';
export default function ToggleElement({ buttons }) {
	const [selected, setSelected] = useState(buttons[0]);

	return (
		<AnimateSharedLayout>
			<ul>
				{buttons.map((item) => (
					<Item
						key={item}
						item={item}
						isSelected={selected === item}
						onClick={() => setSelected(item)}
					/>
				))}
			</ul>
		</AnimateSharedLayout>
	);
}
