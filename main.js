let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
let dotClcked = false;


buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                dotClicked = false; 
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '.':
                if (!dotClicked) { 
                    display.innerText += e.target.innerText;
                    dotClicked = true; 
                }
                break;
            case '+':
                    display.innerText += e.target.innerText;
                    dotClicked = false; 
                break;
            case '-':
                    display.innerText += e.target.innerText;
                    dotClicked = false; 
                break;
            case '*':
                    display.innerText += e.target.innerText;
                    dotClicked = false; 
                break;
            case '/':
                    display.innerText += e.target.innerText;
                    dotClicked = false; 
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});