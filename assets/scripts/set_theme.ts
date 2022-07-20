// theme-specific setup

const scheme = matchMedia('(prefers-color-scheme: dark)');

if (localStorage.getItem('theme') || scheme.matches) {
	document.body.classList.add('dark');
}

scheme.addEventListener('change', (ev: MediaQueryListEvent) => {
	if (ev.matches) {
		if (!document.body.classList.contains('dark')) {
			document.body.classList.add('dark');
			localStorage.setItem('theme', 'dark'); 
		}
	} else {
		if (document.body.classList.contains('dark')) {
			document.body.classList.remove('dark');
			localStorage.removeItem('theme');
		}
	}
});

window.onload = () => {
	const el = document.querySelector(".switcher") as HTMLElement;

	el.addEventListener('click', () => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', 'dark');
			document.body.classList.add('dark');
		} else {
			localStorage.removeItem('theme');
			document.body.classList.remove('dark');
		}
	});
};