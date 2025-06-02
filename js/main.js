import {setSearchFocus,showClearButton,clearSearchText} from "./searchBar.js";
import {getSearchTerm, retrieveSearchResults} from "./dataFunctions.js";
import {buildSearchResults,setStatLine,clearStatLine,deleteSearchResults} from "./searchResults.js";


document.addEventListener('readystatechange',(event)=>{
    if (event.target.readyState === 'complete') {
        initApp();
        
    }
});

const initApp=()=>{
        
    setSearchFocus();
     let search=document.getElementById('search');
     search.addEventListener('input',showClearButton);

     let clear=document.getElementById('clear');
     clear.addEventListener('click',clearSearchText);

    const form=document.getElementById('searchBar');
    form.addEventListener('click',submitTheSearch);
}

const submitTheSearch=(event)=>{
    event.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setSearchFocus();
};


const processTheSearch=async () => {
    clearStatLine()
    const searchTerm= getSearchTerm();
    if (searchTerm==='') return;
    const resultArray=await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatLine(resultArray.length);
};

