const taxTypes = document.querySelectorAll('input[name="tax-type"]');
let selected = oldType.value;

let selectedTaxType = taxTypes.forEach((taxType) => {
    taxType.addEventListener('change', function() {
        taxTypeClassList = document.querySelector('#age').classList;
        if (taxType.checked) {
            selected = (taxType.value);
        }
        if(selected === 'newT'){
            taxTypeClassList.add('hidden');
            taxTypeClassList.remove('visible');
        }else{
            taxTypeClassList.remove('hidden');
            taxTypeClassList.add('visible');
        }
    });
});

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click',function(){
    const income = document.querySelector('input[name="income"]').value;
    const age = document.querySelector('input[name="age"]').value;
    
    if(!income || income < 0){
        document.querySelector('#result-statement').innerHTML = "Enter Valid Income";
        return;
    }

    if(selected === "newT"){
        const firstSalbTax = 0;
        const secondSlabTax = (300000) * 0.05;
        const thirdSlabTax = (300000) * 0.10;
        const forthSlabTax = (300000) * 0.15;
        const fifthSlabTax = (300000) * 0.20;

        if(income <= 300000){
            taxToPay = firstSalbTax;
        }else if(income <= 600000){
            taxToPay = firstSalbTax + ((income - 300000) * 0.05)
        }else if(income <= 900000){
            taxToPay = firstSalbTax + secondSlabTax + ((income - 600000) * 0.10)
        }else if(income <= 1200000){
            taxToPay = firstSalbTax + secondSlabTax + thirdSlabTax + ((income - 900000) * 0.15)
        }else if(income <= 1500000){
            taxToPay = firstSalbTax + secondSlabTax + thirdSlabTax + forthSlabTax + ((income - 1200000) * 0.20)
        }else {
            taxToPay = firstSalbTax + secondSlabTax + thirdSlabTax + forthSlabTax + fifthSlabTax + ((income - 1500000) * 0.30)
        }
        
    }else if(selected ==="oldT"){
        if(!age || age < 0){
            document.querySelector('#result-statement').innerHTML = "Enter Valid Age";
            return;
        }
        

        // for individuals below 60
        if(age < 60){

            const firstSalbTax = 0;
            const secondSlabTax = (250000) * 0.05;
            const thirdSlabTax = (500000) * 0.2;

            if(income <= 250000){
                taxToPay = firstSalbTax;
            }else if(income <= 500000){

                taxToPay = firstSalbTax + (income - 250000) * 0.05;
            
            }else if(income <= 1000000){
            
                taxToPay = firstSalbTax + secondSlabTax + ((income - 500000) * 0.2);

            }else{
            
                taxToPay = firstSalbTax + secondSlabTax + thirdSlabTax + ((income - 1000000) * 0.3);
            
            }
        }
        // for senior citizens i.e. above 60 and below 80
        else if( age < 80){

            const firstSalbTax = 0;
            const secondSlabTax = 200000 * 0.05;
            const thirdSlabTax = 500000 * 0.2;

            if(income <= 300000){
                taxToPay = firstSalbTax;
            }else if(income <= 500000){
                taxToPay = firstSalbTax + (income - 300000) * 0.05;
            }else if(income <= 1000000){
                taxToPay = firstSalbTax + secondSlabTax + ((income - 500000) * 0.2);
            }else{
                taxToPay = firstSalbTax + secondSlabTax + thirdSlabTax + ((income - 1000000) * 0.3);
            }
        }
        // for super senior citizens i.e. 80 and above
        else if(age >= 80){
            const firstSalbTax = 0;
            const secondSlabTax = 500000 * 0.2;
            if(income <= 500000){
                taxToPay = firstSalbTax;
            }else if(income <= 1000000){
                taxToPay = firstSalbTax + ((income - 500000) * 0.2);
            }else{
                taxToPay = firstSalbTax + secondSlabTax + ((income - 1000000) * 0.3);
            }
        }
    }
    document.querySelector('#result-statement').innerHTML = `You need to pay tax Rs. ${Math.round(taxToPay)}`;
    // if(taxToPay > 0){
    //     document.querySelector('#suggestion').innerHTML = `You can get education and health cess upto ${Math.round((taxToPay) *( 0.4))} if applicable.`;
    // }
});

