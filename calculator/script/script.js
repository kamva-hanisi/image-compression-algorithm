const $display = document.querySelector('input[type="text"]');
const $buttons = document.querySelectorAll('button');
$buttons.forEach($button => {
	$button.addEventListener('click', () => {
			const value = $button.value;

			if ($button.value === 'C') {
				$display.value = '';
				return;
			}

			if ($button.value === '='){
				const expre = $display.value.replace(/x/g, '*');
				$display.value = eval(expre);
				return;
			}
			$display.value += value;
		}
	);
});
