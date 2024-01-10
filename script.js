let input=document.querySelectorAll('.input')
const click=document.querySelectorAll('button')

const bclick=document.querySelector('table tbody')

bclick.addEventListener('click',(e)=>{
    // console.log(e.target.innerText);
    let item=e.target;
    e.stopPropagation;
    if(item.innerText>=0 && item.innerText<=9)
        input[0].value+=item.innerText;
    else if(item.innerText === '='){
        try{
        input[0].value=eval(input[0].value)
        }
        catch(e){
            console.log(e)
            input[0].value='Invalid Operand'
        }
    }
    else if(item.innerText === 'C')
        input[0].value=''
    else if(item.innerText === '«')
        input[0].value=input[0].value.slice(0,-1);
    else{
        let lastStr=input[0].value.charAt(input[0].value.length-1);
        if(lastStr>=0 && lastStr<=9)
            input[0].value+=item.innerText; 
        else if(lastStr === '*' && input[0].value.charAt(input[0].value.length-2) === '*')  
            input[0].value=input[0].value.slice(0,-2)+item.innerText;
        else
            input[0].value=input[0].value.slice(0,-1)+item.innerText;
    }
})

// let display=click.forEach((item)=>{item.addEventListener('click',()=>{
//     if(item.innerText>=0 && item.innerText<=9)
//         input[0].value+=item.innerText;
//     else if(item.innerText === '='){
//         try{
//         input[0].value=eval(input[0].value)
//         }
//         catch(e){
//             console.log(e)
//             input[0].value='Invalid Operand'
//         }
//     }
//     else if(item.innerText === 'C')
//         input[0].value=''
//     else if(item.innerText === '«')
//         input[0].value=input[0].value.slice(0,-1);
//     else{
//         let lastStr=input[0].value.charAt(input[0].value.length-1);
//         if(lastStr>=0 && lastStr<=9)
//             input[0].value+=item.innerText; 
//         else if(lastStr === '*' && input[0].value.charAt(input[0].value.length-2) === '*')  
//             input[0].value=input[0].value.slice(0,-2)+item.innerText;
//         else
//             input[0].value=input[0].value.slice(0,-1)+item.innerText;
//     }
// })})