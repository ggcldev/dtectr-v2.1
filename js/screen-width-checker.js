function showBrowserWidth() {
	const width = window.innerWidth

	document.querySelector('h2').innerHTML = `Width: ${width}`
}

window.onload = showBrowserWidth
window.onresize = showBrowserWidth
