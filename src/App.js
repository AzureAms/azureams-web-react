import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

const App = () => {
	return (
		<BrowserRouter>
			<Header/>
			<div className="h-screen"></div>
			<Footer/>
		</BrowserRouter>
	)
}

export default App
