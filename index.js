
// -----------------Task 7.1----------------

const searchCandidatesByPhoneNumber = inphone => {
        let arrValidPhone = [];
        const inputPhone = inphone.replace(/\D/g, '').replace(/^1/, '');

        condidateArr.forEach((item) => {          
        const strPhone = item.phone.replace(/\D/g, '').replace(/^1/, '');
        if(strPhone.includes(inputPhone)) {
            arrValidPhone.push(item);
        }                
    })
    return console.log(arrValidPhone);            
    }

searchCandidatesByPhoneNumber('43')

// -----------------Task 7.2---------------- 

const getCandidateById = id => {
    condidateArr.forEach((item) => {          
        if(item._id == id) {
            let itemData = new Date(item.registered);
            item.registered = itemData.toLocaleDateString(itemData).replace(".","/").replace(".","/");           
            return console.log(item);           
        }
    })
}

getCandidateById('5e216bc9a6059760578aefa4') 


// -----------------Task 7.3---------------- 

const sortCandidatesArr = sortBy => { 
    const changedBalance = (item) => item.balance.replace(",","").replace(".","").slice(1);
        if(sortBy == 'asc') {
            condidateArr.sort(function(a, b) {
            return changedBalance(a) - changedBalance(b);
            }
            )}
        if(sortBy == 'desc') {
            condidateArr.sort(function(a, b) {
            return changedBalance(b) - changedBalance(a);
            } 
            )}
            return console.log(condidateArr)
    }

sortCandidatesArr('asc') 
// отсортирует по-возростанию и вернет отсортированный массив

// sortCandidatesArr('desc') 
// отсортирует по-убыванию и вернет отсортированный массив

// sortCandidatesArr() 
// не будет сортировать, а просто вернет первоначальный массив

//-----------------Task 7.4---------------- 
