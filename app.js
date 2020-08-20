// function call()
// {

//     alert("this function call");
// }
// function hello(greet)
// {
// alert(greet);
// }
// function getName()
// {
//     var name = document.getElementById("stdname");
//     alert(name.value);
//     name.value = "";
// }

function getNumber(num)
{
    var result = document.getElementById("result");
    result.value += num;

}

function clearResult()
{
    var result = document.getElementById("result");
    result.value = ""

}

function getResult()
{
    var result = document.getElementById("result");
    result.value = eval(result.value);
  


}
