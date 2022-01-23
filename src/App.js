import './App.css';
import { useState } from 'react';
import ToggleElement from './components/ToggleElement';
export default function App() {
	return (
		<div>
			<ToggleElement buttons={buttons}></ToggleElement>
		</div>
	);
}

const buttons = ['Кнопка1', 'Кнопка2', 'Кнопка23874329749328743298742', 'Кнопка'];
