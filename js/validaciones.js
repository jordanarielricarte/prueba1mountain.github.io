function validacion()
{
var parseRut = document.form.rut.value.replace(" ", "").replace("-", "").replace(".", "").toLowerCase();
var aux = 0;

//VALIDACION RUT
	var parseRut, rutSinDv, dv;
    parseRut = document.form.rut.value.replace(" ", "").replace("-", "").replace(".", "").toLowerCase();
   	rutSinDv = parseRut.substring(0,parseRut.length-1);
   	dv = parseRut.substr(-1);
   	if (parseRut.length==0 || parseRut.length<8 || parseRut.length>10) 
	{	
	document.getElementById('lblRut').innerHTML='El largo del rut ingresado no es valido';
	document.form.rut.focus();
	aux = 1;
	}
	if(isNaN(rutSinDv)==1)
	{
	document.getElementById('lblRut').innerHTML='El formato del rut ingresado no es valido';
	document.form.rut.focus();
	aux = 1;
	}
	if(dv=="k" ||(dv>0 && dv<10))
	{
	document.getElementById('lblRut').innerHTML='';
	}
	else
	{
	document.getElementById('lblRut').innerHTML='El digito verficiador no es valido';
	document.form.rut.focus();
	aux = 1;
	}
if(aux==0)
{
	document.form.submit();
}
}