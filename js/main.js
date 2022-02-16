import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

console.log("sdfsdf")

const impuestoUno = new Impuesto();
impuestoUno.montoBrutoAnual = 2000000;
impuestoUno.deducciones = 600000;

const cliente1 = new Cliente("ClienteUNO", impuestoUno)
const resultadoCliente1 = cliente1.calcularImpuesto();
console.log(resultadoCliente1);