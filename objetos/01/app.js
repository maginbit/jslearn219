//creaer objetos

const persona = {

		nombre : 'Jose',
		apellido : 'Martinez',
		profesion : 'Banquero',
		email : 'martinez@worlbank.com',
		edad : 40,
		universidad : 'Yale',
		gustos : ['remo','parapente','coleccionista'],
		hogar : {
			 ciudad : 'California',
			 pais : 'U.S.A'
		},
		nacimiento: function(){
			return new Date().getFullYear() - this.edad;
		}
};


console.log(persona.gustos);