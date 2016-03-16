(function () { 
	livrariaModule = angular.module("livraria", ['ngRoute', 'ngResource']);

	livrariaModule.controller("LivrariaController", function (){
		var self = this;

		self.db = [
			{
				titulo: "O mínimo que você precisa saber para não ser um idiota",
				autores: ["Olavo de Carvalho"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O mínimo que você precisa saber para não ser um idiota",
				autores: ["Olavo de Carvalho"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			}
		]
	});
})();