document.querySelector('.action').addEventListener('click', function () {
	this.insertAdjacentHTML('afterend', '<div class="text">You hear \'click\'</div>');
});