
    var text = document.getElementById('input-search');
    var btn = document.getElementById('btn-search');
    btn.onclick = function() {
        text.style.display = 'inline-block';
        text.className = 'bounceInRight animated';
    }

    var detail = document.getElementById('detail-recommend-div');

    if(detail) {
    	var number = document.getElementById('number');
    	
    	 
    	detail.onclick = function() {
    		var val = parseInt(number.innerHTML);
    		number.innerHTML = val + 1;
    	}
    }


        

var box = document.getElementById('bgColor');

var btns = box.getElementsByTagName('a');

var body = document.getElementsByTagName('body')[0];

for(var i = 0; i < btns.length; i++) {

    btns[i].onclick = function() {

        var name = this.className;

        if(name == 'black') {

            body.style.background = 'black';

        }

        if(name == 'white') {

            body.style.background = '#f4f4f4';

        }

        if(name == 'gray') {

            body.style.background = 'gray';

        }
    }
}
        
   