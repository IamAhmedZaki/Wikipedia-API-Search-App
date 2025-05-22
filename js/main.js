import {setSearchFocus} from "./searchBar.js";
import {getSearchTerm, retrieveSearchResults} from "./dataFunctions.js";


document.addEventListener('readystatechange',(event)=>{
    if (event.target.readyState === 'complete') {
        initApp();
        
    }
});

const initApp=()=>{
        //set the focus 
        // 3 listeners for clear
        setSearchFocus();

    const form=document.getElementById('searchBar')
    form.addEventListener('click',submitTheSearch)
}

const submitTheSearch=(event)=>{
    event.preventDefault();
    processTheSearch();
    setSearchFocus();
};


const processTheSearch=async () => {
    const searchTerm= getSearchTerm();
    if (searchTerm==='') return;
    const resultArray=await retrieveSearchResults(searchTerm);
};

