export const getSearchTerm=()=>{
    const rawSearchTerm=document.getElementById('search').value.trim();
    const regex=/[]{2,}/gi;
    const searchTerm=rawSearchTerm.replaceAll(regex," ");
    return searchTerm;
};

// `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=daschund&gsrlimit=20&prop=pageimages|extracts&exchars=130&exintro&explaintext&exlimit=max&format=json&origin=*`;

export const retrieveSearchResults=async(searchTerm)=>{
    const wikiSearchString= await getWikiSearchString(searchTerm);
    const wikiSearchResults=await requestData(wikiSearchString);
    let resultArray=[]
    if (wikiSearchResults.hasOwnProperty('query')){
        resultArray=processWikiResults(wikiSearchResults.query.pages)
        
    }
    return resultArray;
}

export const getWikiSearchString=async(searchTerm)=>{
    const maxChars=getMaxChars();
    const rawSearchString=`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const searchString=encodeURI(rawSearchString);
    return searchString;
}


function getMaxChars() {
    let width=window.innerWidth || document.body.clientWidth;
    
    let maxChars;

    if (width <414) maxChars=65;
    if (width >=414 && width<1400) maxChars=100;
    if (width >=1400) maxChars=130;
    return maxChars;
}

const requestData=async(searchString)=>{
    const response=await fetch(searchString);
    const data=await response.json();
    return data;
}

const processWikiResults=(results)=>{
    let resultArray=[];
    Object.keys(results).forEach((key)=>{
        const id=key
        const title=results[key].title
        const text=results[key].text
        const img=results[key].hasOwnProperty('thumbnail')?results[key].thumbnail.source:null;
        const items={
            id:id,
            title:title,
            text:text,
            img:img
        }

        resultArray.push(items)
    })

    return resultArray;

}

