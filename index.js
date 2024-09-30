import {mount} from 'svelte';
//import SwitchController from './SwitchController.svelte';
import App from './App.svelte';

mount(
	App,
	{
		target: document.getElementById("app")
	}
);

//mount(
//	SwitchController,
//	{
//		target: document.getElementById("app")
//	}
//);