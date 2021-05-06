var ClickingUp = 0;
var ClickingDown = 0;

function increaseFontSize(){
	txt = document.getElementById('font-change');
	style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	currentSize = parseFloat(style);
	txt.style.fontSize = (currentSize + 3) +'px';
	ClickingUp++;
}

function decreaseFontSize () {
	txt = document.getElementById('font-change');
	style = window.getComputedStyle (txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 3) + 'px' ;
    ClickingDown++;
} 

function INClick(){
	if (ClickingUp<3){
		increaseFontSize();
		if (ClickingDown==3){
			ClickingDown=0;
		}
	}else if(ClickingDown==3){
		ClickingDown=0;
	}
}

function DEClick(){
    if (ClickingDown<3){
        decreaseFontSize();
		if(ClickingUp==3){
			ClickingUp=0;
		}
    }else if (ClickingUp==3){
        ClickingUp=0;
    }
}
	