import { spring } from '../animations/spring';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

export default function Item({ item, isSelected, onClick }) {
	return (
		<button className={`item ${isSelected ? 'item-white' : 'item-black'}`} onClick={onClick}>
			{item}
			{isSelected && (
				<motion.div
					layoutId="outline"
					className="outline"
					initial={false}
					animate={{ borderColor: item }}
					transition={spring}></motion.div>
			)}
		</button>
	);
}
