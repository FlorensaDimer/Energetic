
var array = [];
var arrayTotais = [];

function enviarVenda() {

	var cliente = document.getElementById('cliente').value; // pegando dados do input

	var qtd = document.getElementById('qtd').value;

	array.push({ //adicionando dados do input no array
		nomeCliente: cliente,
		quantidade: qtd,
		valorVenda: venda,
		valorIcms: icms,
		valorIpi: ipi,
		valorPis: pis,
		valorCofins: cofins,
	});

	var preco = 4.5;

	var venda = qtd * preco; //cálculos
	var icms = (venda * 18) / 100;
	var ipi = (venda * 4) / 100;
	var pis = (venda * 1.86) / 100;
	var cofins = (venda * 8.54) / 100;

	/*for (var i = 0; i < array.length; i++) { //percorrendo o array para calcular
		const element = array[i];*/




	document.getElementById('cliente').value = ''; //limpando o campo depois de enviar

	document.getElementById('qtd').value = '';

	console.log(array);

}

function mostrarRelatorio() {

	document.getElementById('resultado').innerHTML = ''; //limpando o paragrafo resultado

	for (var i = 0; i < array.length; i++) { //percorrendo o array para mostrar
		const element = array[i];

		var totalVenda = venda + icms + ipi + pis + cofins; //total da venda com imposto


		var dadosCliente = 'Cliente: ' + element.nomeCliente + ' ICMS: R$' + icms + ' IPI: R$'
			+ pis + ' COFINS: R$' + cofins + ' Total: R$' + totalVenda + '<br />'; //configurando os dados do cliente

		document.getElementById('resultado').innerHTML += dadosCliente; //monstradno os dados do cliente no paragrafo

	}



	arrayTotais.push({ //adicionando dados da variavel somaImp no array
		totalGeralImp: somaImp,
	});

	for (var i = 0; i < arrayTotais.length; i++) {
		const element = arrayTotais[i];
		console.log(arrayTotais);

	}

}

/*
function calcularImposto() {
	var preco = 4.5;

	var venda = qtd * preco;
	var icms = (venda * 18) / 100;
	var ipi = (venda * 4) / 100;
	var pis = (venda * 1.86) / 100;
	var cofins = (venda * 8.54) / 100;
	var total = venda + icms + ipi + pis + cofins;


}

/*
function mostrarRelatorio(){

	document.getElementById("resultado").innerHTML = 'Cliente:' + cliente + ' <br>ICMS: R$' + icms +
	 ' IPI: R$' + ipi + ' PIS: R$' + pis + ' COFINS: R$' + cofins + ' Total: R$' + total;

}

var x = 0;
var array = [];

function adicionarVenda() {

	for (var i = 0; i < array.length; i++) {
		var cliente = document.getElementById('cliente').value;
		var qtd = document.getElementById('qtd').value;

		var inputValue = document.getElementById('v' + i);
		array.push(inputValue.value);

	}
}
function mostrarRelatorio() {
	var no = document.getElementById('NoArrey').value;
	   document.getElementById("resulto").value = (array[no]);
	   return false;
}*/
