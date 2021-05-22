import App from './App.svelte';

const app = new App({
	target: document.body,
});

var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);

export default app;
