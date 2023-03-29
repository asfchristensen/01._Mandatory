function findMethod(event) {
    event.preventDefault();
    
    const input1 = document.getElementById('1').value;
    const input2 = document.getElementById('2').value;
    const input3 = document.getElementById('3').value;
    const input4 = document.getElementById('4').value;
    const input5 = document.getElementById('5').value;
    const input6 = document.getElementById('6').value;
    
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    const result4 = document.getElementById('result4');
    const result5 = document.getElementById('result5');
    const result6 = document.getElementById('result6');


    if ( input1 === "forEach" ) { 
        result1.innerText = 'true'; 
    } else {
        result1.innerText = 'false';
    }

    if ( input2 === "map" ) { 
        result2.innerText  = 'true'; 
    } else {
        result2.innerText = 'false';
    }

    if ( input3 === "filter" ) { 
        result3.innerText = 'true'; 
    } else {
        result3.innerText = 'false';
    }

    if ( input4 === "find" ) { 
        result4.innerText = 'true'; 
    } else {
        result4.innerText = 'false';
    }

    if ( input5 === "map" ) { 
        result5.innerText = 'true'; 
    } else {
        result5.innerText = 'false';
    }

    if ( input6 === "filter" ) {
        result6.innerText = 'true'; 
    } else {
        result6.innerText = 'false';
    }
}