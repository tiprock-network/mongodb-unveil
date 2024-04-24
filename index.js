let list_arr = document.getElementsByClassName('listItem')

function appendClass(itemNumber){
    for(var i =0;i<list_arr.length;i++){
        list_arr[i].classList.remove('active')
    }
    list_arr[itemNumber].classList.add('active')
}

