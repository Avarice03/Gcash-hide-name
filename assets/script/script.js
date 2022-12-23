function hideName() {

    const regexPattern = /^([A-Za-zÑñ]+\s)+[A-Za-zÑñ]+$/;

    let fullName = document.getElementById('textInput').value;
    let fullNameArr = fullName.split(' ');
    let hiddenName ='';

    if(regexPattern.test(fullName) === true) {
        console.log('Goods');
        for (i = 0; i < fullNameArr.length - 1; i++) {
            let name = fullNameArr[i];
            let hiddenChar = '';

            if(name.length > 3) {
                for (x = 2; x < name.length-1; x++) {
                    let char = name[x];
                    let replacedChar = char.replace(/\w/, '*');
                    hiddenChar = hiddenChar.concat(replacedChar);
                }
                hiddenName = hiddenName.concat(name[0], name[1], hiddenChar, name[name.length-1],'  ');
            } else if(name.length > 2) {
                for (x = 1; x < name.length-1; x++) {
                    let char = name[x];
                    let replacedChar = char.replace(/\w/, '*');
                    hiddenChar = hiddenChar.concat(replacedChar);
                }
                hiddenName = hiddenName.concat(name[0], hiddenChar, name[name.length-1],'  ');
            } else {
                hiddenName = hiddenName.concat(name, ' ');
            }
        }
        let fullHiddenName = hiddenName.concat(fullNameArr.pop().charAt(0), '.');
        console.log(fullHiddenName.toUpperCase());
        document.getElementById('displayName').innerHTML = fullHiddenName.toUpperCase();
    } else {
        document.getElementById('textInput').value = '';
        document.getElementById('displayName').innerHTML = 'Invalid Input';
        alert('Input provided is not a valid name.');
        console.log('Input provided is not a valid name.');
    }    
}

function clearName(){
    document.getElementById('textInput').value = '';
    document.getElementById('displayName').innerHTML = 'Your name here';
}



