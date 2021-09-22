const verbTransform = (verb, pronoun) => {

	switch (pronoun.toLowerCase()) {

		case 'я': 
			if ((verb.substring(verb.length - 3) === 'ить')) {
				return `${pronoun} ${verb.slice(0, -3)}лю`;
			} else if ((verb.substring(verb.length - 3) === 'ать') && !(verb.substring(verb.length - 4) === 'жать')) {
				return `${pronoun} ${verb.slice(0, -2)}ю`;
			} else if ((verb.substring(verb.length - 4) === 'жать')) {
				return `${pronoun} ${verb.slice(0, -4)}гаю`;
			} else if ((verb.substring(verb.length - 3) === 'еть')) {
				return `${pronoun} ${verb.slice(0, -4)}жу`;
			} 

		case 'ты':
			if ((verb.substring(verb.length - 3)) === 'ать') {
				return `${pronoun} ${verb.slice(0, -2)}ешь`;
			} else if ((verb.substring(verb.length - 3)) === 'ить') {
				return `${pronoun} ${verb.slice(0, -3)}ишь`;
			} else if ((verb.substring(verb.length - 3)) === 'еть') {
				return `${pronoun} ${verb.slice(0, -3)}ишь`;
			}
		
		case 'мы': 
			if ((verb.substring(verb.length - 3)) === 'ить') {
				return `${pronoun} ${verb.slice(0, -2)}ем`;
			} else if ((verb.substring(verb.length - 3)) === 'еть') {
				return `${pronoun} ${verb.slice(0, -2)}им`;	
			} else if ((verb.substring(verb.length - 3)) === 'ать') {
				return `${pronoun} ${verb.slice(0, -2)}ем`;
			}
			

		case 'они': 
			if ((verb.substring(verb.length - 3)) === 'ать' && !(verb.substring(verb.length - 3)) === 'жать') {
				return `${pronoun} ${verb.slice(0, -2)}ют`;
			} else if ((verb.substring(verb.length - 4)) === 'жать') {
				return `${pronoun} ${verb.slice(0, -1)}`;	
			} 

		case 'он':
		case 'она':
		case 'оно':
			if (!(verb.substring(verb.length - 4) === 'гaть')) {
				return `${pronoun} ${verb.slice(0, -4)}жит`;
			} else if (!(verb.substring(verb.length - 4) === 'жaть')) {
				return `${pronoun} ${verb.slice(0, -4)}жит`;
			} else if ((verb.substring(verb.length - 3) === 'aть')) {
				return `${pronoun} ${verb.slice(0, -3)}ит`;
			} else if (!(verb.substring(verb.length - 3) === 'еть')) {
				return `${pronoun} ${verb.slice(0, -3)}ит`;
			} else if ((verb.substring(verb.length - 4) === 'дать')) {
				return `${pronoun} ${verb.slice(0, -3)}ет`;
			} else {
				return `${pronoun} ${verb.slice(0, -2)}т`;
			}
			
		default: 
			return 'Error';
	}
};


console.log(verbTransform('бегать', 'он')); 


