/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var onoff = true; // on off boolean
var alphaonoff = false; // a alphaonoff value of 1 is for alpha key not being active, alphaonoff value of 2 is for alpha active - not locked, alphaonoff value of 3 is alpha key active and locked.
var secondonoff = false; // value of "Off" is second key not active, value of "On" means second key is active
var screencommands = ""; // Outputs to sreen as text, I set this to blank so nothing is on screen at start.
var javascriptcommands = ""; // a string meant to hold data and be excuted to by the eval function to return the answers.
var value = ""; // string that changes the execution based on buttons pushed.
var statplot1onoff = false;
var statplot1status = "Off";
//TODO: Reposition canvas correctly, so when ran buttons work.
//TODO: Find working way to make cursor blink on/off.




function ScreenOutput(value){
    
    if (value === "2nd"){
        secondonoff=!secondonoff;
    }
    
    if (value === "ALPHA"){
        alphaonoff=!alphaonoff;
    }
    
    //Alpha Key On, Second Key Off
    if ((alphaonoff === true) && (secondonoff === true)){
        
        switch(value){
            case "undefined":
                value="";
                break;
                
                
                
                
        }
        
    }
    
    
    //Alpha Key On, Second Key Off
    if ((alphaonoff === true) && (secondonoff === false)) {
    }
    
    //Second Key On, Alpha Key Off
    if ((secondonoff === true) && (alphaonoff === false)){
        switch (value){
            // Incase value isn't set
            case "undefined":
                value = "";
                break;
                
            //TOP ROW KEYS, LEFT TO RIGHT
            
            
            function statplot1onofffun(statplot1onoff){
                if (statplot1onoff === true){
                    return "On";
                }
                else{
                    return "Off";
                }
            }
            //STAT PLOT/Y=
            case "Y=":
                document.getElementById("ScreenOutput").innerHTML = '<div class=statplotmenu"><p class="statplotmenu">STATPLOTS</p>' + '<br/>' + '<a href="">1:</a>Plot1...' + statplot1onofffun(statplot1onoff) + '<br />' + '<img src="" alt=""/>' + '<p>L1</p>';
                break;
            
            // CATALOG function
            case "0":
                document.getElementById("ScreenOutput").innerHTML = '<div class="catalogmenu"><p class="catalogheader">CATALOG</p><br/><a href="#home">abs(</a><br/><a href="#news">and</a><br/><a href="#contact">Contact</a><br/><a href="#about">About</a></div>';
                break;
            // imaginary number
            case ".":
                screencommands+="i";
                document.getElementById("ScreenOutput").innerHTML = screencommands;
                javascriptcommands+="math.i";
                break;
            // First column keys upper left down
            
    
                
                
        }
        
    }
    //Second and Alpha Keys both Off or both On
    if ((secondonoff === false) && (alphaonoff === false)){
        
        // Take value variable that corresponds to keys and make the buttons do as they should.
        switch(value){
            
        // 
        case "undefined":
            value = "";
            break;
        case "0":
            screencommands+="0";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="0";
            break;
        case "1":
            screencommands+="1";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="1";
            break;
        case "2":
            screencommands+="2";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="2";
            break;
        case "3":
            screencommands+="3";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="3";
            break;
        case "4":
            screencommands+="4";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="4";
            break;
        case "5":
            screencommands+="5";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="5";
            break;
        case "6":
            screencommands+="6";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="6";
            break;
        case "7":
            screencommands+="7";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="7";
            break;
        case "8":
            screencommands+="8";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="8";
            break;
        case "9":
            screencommands+="9";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="9";
            break;
        case "+":
            screencommands+="+";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="+";
            break;
        case "-":
            screencommands+="-";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="-";
            break;
        case "*":
            screencommands+="*";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="*";
            break;
        case "/":
            screencommands+="/";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="/";
            break;
            
        // TODO: Have to add a history function by saving the last few values in strings from the javascriptcommands string. Have to find how many are saved in hisrtory also.
        case "CLEAR":
            screencommands="";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands="";
            break;
        case "**":
            screencommands+="^"; // TODO: find the appropriate power to text for the screen.
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="**";
            break;
            
        // TODO: Put answer to problem right aligned and one line down.
        case "ENTER":
            document.getElementById("ScreenOutput").innerHTML = (eval(javascriptcommands));
            break;
        case "2nd":
            if(secondonoff === "Off"){
                secondonoff = "On";
            }
            else{
                secondonoff = "Off";
            }
            break;
        case "ALPHA":
            if(alphaonoff === "Off"){
                alphaonoff = "On";
            }
            else{
                alphaonoff = "Off";
            }
            break;
        case "GRAPH":
            break;
        case "MATH":
            break;
        case "POWERNEGONE":
            screencommands+="^-1"; // TODO: find appropriate symbol for text on screen.
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="**-1";
            break;
        case "SECPOW":
            screencommands+="^2"; // TODO: find appropriate symbol for text on screen.
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="**2";
            break;
        case "LOG":
            screencommands+="Log(";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="Math.log(";
            break;
        case "LN":
            screencommands+="ln(";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="Math.LN(";
            break;
        case "STO":
            break;
        case "ONOFF":
            if (onoff===true){
                document.getElementById("ScreenOutput").style.display = "block";
            }
            else if (onoff===false) {
                document.getElementById("ScreenOutput").style.display = "none";
            }
            onoff = !onoff;
            break;
        case "MODE":
            break;
        case "APPS":
            break;
        case "SIN":
            screencommands+="sin(";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="Math.sin(";
            break;
        case "COMMA":
            screencommands+=",";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+=",";
            break;
        case "DEL":
            screencommands.slice(0, -1);
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands.slice(0, -1);
            //TODO: Add more code to remove whole mathematic functions in the javascriptcommands string.
            break;
        case "STAT":
            break;
        case "PGRM":
            break;
        case "COS":
            screencommands+="cos(";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="Math.cos(";
            break;
        case "(":
            screencommands+="(";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="(";
            break;
        case ".":
            screencommands+=".";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+=".";
            break;
        case "VARS":
            break;
        case "TAN":
            screencommands+="tan(";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="Math.tan(";
            break;
        case ")":
            screencommands+=")";
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+=")";
            break;
        case "HYPHEN":
            screencommands+="-"; //HYPHEN-MINUS
            document.getElementById("ScreenOutput").innerHTML = screencommands;
            javascriptcommands+="-";
            break;
        case "UP":
            break;
        case "DOWN":
            break;
        case "RIGHT":
            break;
        case "LEFT":
            break;
        case "Y=":
            break;
        case "WIN":
            break;
        case "ZOOM":
            break;
        case "TRACE":
            break;
        }
    }
}
