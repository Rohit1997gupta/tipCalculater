
         function Pay(){
            let amount =document.getElementById('bill_amount').value;
            let per =document.getElementById('tip_per').value;
            let people=document.getElementById('b/w').value;
            let tip=amount *(per/100);
            let total=tip + Number(amount);
            let peopleBt=amount/people;

            document.getElementById('tip_amount').value=tip;
            document.getElementById('total_amount').value=total;
            document.getElementById('Amount_each').value=peopleBt;
            
        }
        