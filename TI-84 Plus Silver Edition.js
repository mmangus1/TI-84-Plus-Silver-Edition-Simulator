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


//TODO: Find Every Multiple Beyond 16 of charcters and add a line break for every 16 characters.
function countcharacters(screencommands){
    var screenlength = screencommands.length;
    if (screenlength >= 16){
        
    }
            
}


function statplot1onofffun(statplot1onoff){
    if (statplot1onoff === true){
        return "On";
        }
    else{
        return "Off";
        }
}

function ScreenOutput(value){
    
    
    // Negate Value of 2nd Key On Click Of 2nd Key:
    if (value === "2nd"){
        secondonoff=!secondonoff;
    }
    
    
    // Negate Value of Alpha Key On Click Of Alpha Key:
    if (value === "ALPHA"){
        alphaonoff=!alphaonoff;
    }
    
  
    
    
    // Alpha Key On and Second Key Off OR Alpha Key On and Second Key On; Alpha Takes Presedence
    if (((alphaonoff === true) && (secondonoff === false)) || ((alphaonoff === true) && (secondonoff === true))) {
        switch (value){
            
            
            // Incase value String Is Not Set
            case "undefined":
                value = "";
                break;
                
                
            // Top Row Keys, Left To Right:
            
            
            // F1 Key Code:
            case "Y=":
                break;
                
            // F2 Key Code:
            case "WIN":
                break;
                
            // F3 Key Code:
            case "ZOOM":
                break;
                
            // F4 Key Code:
            case "TRACE":
                break;
            
            // F5 Key Code:
            case "GRAPH":
                break;
                
            
            // First Column Keys, From Top To Bottom:
            
            
            // "A" Variable Key Code:
            case "MATH":
                break;
                
            // "D" Vatiable Key Code:
            case "POWERNEGONE":
                break;
                
            // "I" Variable Key Code:
            case "SECPOW":
                break;
                
            // "N" Variable Key Code:
            case "LOG":
                break;
                
            // "S" Variable Key Code:
            case "LN":
                break;
                
            // "X" Variable Key Code:
            case "STO":
                break;
                
            
            // Second Column Keys, From Top To Bottom:
            
            
            // "B" Variable Key Code:
            case "APPS":
                break;
                
            // "E" Variable Key Code:
            case "SIN":
                break;
                
            // "J" Variable Key Code:
            case "COMMA":
                break;
                
            // "O" Variable Key Code:
            case "7":
                break;
                
            // "T" Variable Key Code:
            case "4":
                break;
                
            // "Y" Variable Key Code:
            case "1":
                break;
                
            // Space "_" Key Code:
            case "0":
                break;
                
                
            // Third Column Key Codes, From Top To Bottom:
            
            
            // "C" Variable Key Code:
            case "PRGM":
                break;
                
            // "F" Variable Key Code:
            case "COS":
                break;
                
            // "K" Variable Key Code:
            case "(":
                break;
                
            // "P" Variable Key Code:
            case "8":
                break;
                
            // "U" Variable Key Code:
            case "5":
                break;
                
            // "Z" Variable Key Code:
            case "2":
                break;
                
            // Colon Key Code:
            case ".":
                break;
                
            
            // Fourth Column Key Codes, From Top To Bottom:
            
            
            // "G" Variable Key Code:
            case "TAN":
                break;
                
            // "L" Variable Key Code:
            case ")":
                break;
                
            // "O" (Letter) Variable Key Code:
            case "9":
                break;
                
            // "V" Variable Key Code:
            case "6":
                break;
                
            // Empty Set Key Code:
            case "3":
                break;
                
            // Minkowski's Question Mark Function Key Code:
            case "HYPHEN":
                break;
                
           
            // Fifth Column Key Codes, From Top To Bottom:
            
            
            // "H" Variable Key Code:
            case "**":
                break;
                
            // "M" Variable Key Code:
            case "/":
                break;
                
            // "R" Variable Key Code:
            case "*":
                break;
                
            // "W" Variable Key Code:
            case "-":
                break;
                
            // Quotation Mark Key Code:
            case "+":
                break;
                
            // SOLVE Key Code:
            case "ENTER":
                break;
               
               
            // Directional Arrow Key Codes:
            
            
            // Up Arrow Key Code:
            case "UP":
                break;
                
            // Down Arrow Key Code:
            case "DOWN":
                break;
                
            // Right Arrow Key Code:
            case "RIGHT":
                break;
                
            // Left Arrow Key Code:
            case "LEFT":
                break;
        }
    }
    
    // Second Key On, Alpha Key Off
    if ((secondonoff === true) && (alphaonoff === false)){
        switch (value){
            // Incase value isn't set
            case "undefined":
                value = "";
                break;
                
            //TOP ROW KEYS, LEFT TO RIGHT
            
           
            //STAT PLOT/Y=
            case "Y=":
                document.getElementById("ScreenOutput").innerHTML = '<div class="statplotmenu"><p class="statplotmenu">STATPLOTS</p>' + '<br/>' + '<a href="">1:</a>Plot1...' + statplot1onofffun(statplot1onoff) + '<br />' + '<img src="" alt=""/>' + '<p>L1</p>';
                break;
                
            //TBLSET Function
            case "WIN":
                document.getElementById("ScreenOutput").innerHTML = '<div class="tblset"><p class="tblset">TABLE SETUP</p> </div>';
                break;
                
            //FORMAT function
            case "ZOOM":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            //CALC function
            case "TRACE":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            //TABLE function
            case "GRAPH":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // FIRST COLUMN KEYS, TOP TO BOTTOM
            
            
            // TEST BUTTON CODE
            case "MATH":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // MATRIX BUTTON CODE
            case "POWERNEGONE":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // SQUARE ROOT CODE
            case "SECPOW":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // TEN TO THE POWER OF CODE
            case "LOG":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // EULER'S NUMBER TO THE POWER OF/ THE NATURAL NUMBER TO THE POWER OF CODE
            case "LN":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // RECALL CODE
            case "STO":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // OFF CODE
            case "ONOFF":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
                
            // SECOND COLUMN KEYS, TOP TO BOTTOM
            
            
            // QUIT CODE
            case "MODE":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // LINK CODE
            case "VAR":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // ANGLE CODE
            case "APPS":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // INVERSE SINE CODE
            case "SIN":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // ENTER EXPONENT CODE
            case "COMMA":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // u CODE TODO: FIND WHAT THIS BUTTON DOES
            case "7":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // L4 LIST CODE
            case "4":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // L1 LIST CODE
            case "1":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                                         
            // CATALOG function
            case "0":
                document.getElementById("ScreenOutput").innerHTML = '<div class="catalogmenu"><p class="catalogheader">CATALOG</p><br/><a href="#home">abs(</a><br/><a href="#news">and</a><br/><a href="#contact">Contact</a><br/><a href="#about">About</a></div>';
                break;
                
            
            // THIRD COLUMN KEY CODES, FROM TOP TO BOTTOM
            
            
            // INSERT MODE KEY CODE
            case "DEL":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // LIST MANIPULATION MENU KEY CODE
            case "STAT":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // DRAW MANIPULATION MENU KEY CODE
            case "PGRM":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // INVERSE COSINE KEY CODE
            case "COS":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // LEFT BRACE KEY CODE
            case "(":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // v CODE TODO: FIND OUT WHAT THIS KEY DOES
            case "8":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // L5 LIST KEY CODE
            case "5":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // L2 LIST KEY CODE
            case "2":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // IMAGINARY NUMBER KEY CODE
            case ".":
                screencommands+="i";
                document.getElementById("ScreenOutput").innerHTML = screencommands;
                javascriptcommands+="math.i";
                break;

            
            // FOURTH COLUMN KEYS, TOP TO BOTTOM
            
            
            // DISTROBUTION MENU KEY CODE
            case "VARS":
                document.getElementById("ScreenOutput").innerHTML = screencommands;
                break;
                
            // INVERSE TANGENT KEY CODE
            case "TAN":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // RIGHT BRACE KEY CODE
            case ")":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // w KEY CODE TODO: FIND WHAT THIS KEY DOES
            case "9":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // L6 LIST KEY CODE
            case "6":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // L3 LIST KEY CODE
            case "3":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // ANSWER KEY CODE
            case "HYPHEN":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
           
            // FIFTH COLUMN KEYS, FROM TOP TO BOTTOM
            
            
            // PI KEY CODE
            case "**":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // EULER'S NUMBER/ THE NATURAL NUMBER
            case "/":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // LEFT BRACKET KEY CODE
            case "*":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // RIGHT BRacket KEY CODE
            case "-":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // MEMORY KEY CODE
            case "+":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // ENTRY KEY CODE
            case "ENTER":
                document.getElementById("ScreenOutput").innerHTML = '';
                break;
                
            // DIRECTIONAL ARROW KEY CODES
            
            
            // UP KEY CODE
            case "UP":
                break;
                
            // DOWN KEY CODE
            case "DOWN":
                break;
                
            // RIGHT KEY CODE
            case "RIGHT":
                break;
                
            // LEFT KEY CODE
            case "LEFT":
                break;
           
            
        }
        
    }
    
    
    // Second and Alpha Keys both Off
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
