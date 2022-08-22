let firstName = "Muhammad Bilal Iqbal";


// Alert Function
document.getElementById("alert").onclick = function () {
    alert("This is alert");
    document.getElementById("message").innerHTML = "alert('This is alert')"
    document.getElementById("result").innerHTML = "";
}

// Variable for String
document.getElementById("variablestring").onclick = function () {
    var name = "Muhammad Bilal Iqbal";
    alert(name);
    document.getElementById("message").innerHTML = "var name = 'Muhammad Bilal Iqbal';<p> alert(name)</p>"
    document.getElementById("result").innerHTML = "";
}

// Variable for Number
document.getElementById("variablenumber").onclick = function () {
    var number1 = 100;
    var number2 = 57;
    var sum = number1 + number2;
    alert(sum);
    document.getElementById("message").innerHTML = "    var number1 = 100;<p>var number2 = 57;</p><span>var some = number1 + number2;</span><p>alert(number1 + number2);</p> "
    document.getElementById("result").innerHTML = number1 + number2;
}

// Variable list 
document.getElementById("variablename").onclick = function () {
    let list = "<li>A variable name can't contain any spaces.</li><li>A variable name can't contain any spaces.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal.</li> <li>Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScriptfor the value assigned to <code>Rose</code>, you'll come up empty</li><li>I teach the camelCase naming convention. Why 'camelCase'? Because there is a hump or two(or three) in the middle if the name is formed by more than one word.A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump.If you form a variable name with only oneword, like <code>response</code>, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention.It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.</li > "
    document.getElementById("message").innerText = list;
    document.getElementById("result").innerHTML = list;
}

// Fimilar
document.getElementById("fimilar").onclick = function () {
    var num1 = 10;
    var num2 = 10;
    alert(num1 + num2)
    document.getElementById("message").innerHTML = "<p>var num1 = 10;</p><span>var num2 = 10;</span><p>alert(num1 + num2)</p>";
    document.getElementById("result").innerHTML = num1 + num2;
}

// Unfimilar
document.getElementById("unfimilar").onclick = function () {
    var num1 = 1;
    num1++
    alert(num1)
    document.getElementById("message").innerHTML = "<p>var num1 = 1;</p><span>num++</span><p>alert(num1)</p>";
    document.getElementById("result").innerHTML = num1;
}

// Eliminating
document.getElementById("eliminating").onclick = function () {
    var num1 = (2 * 4) * 4 + 2;
    alert(num1)
    document.getElementById("message").innerHTML = "<p>var num1 = (2 * 4) * 4 + 2;</p><span>alert(num1)</span>";
    document.getElementById("result").innerHTML = num1;
}