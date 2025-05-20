export const getSearchTerm=()=>{
    const rawSearchTerm=document.querySelector('.search').value.trim();
    const regex=/[]{2,}/gi;
    const searchTerm=rawSearchTerm.replaceAll(regex," ");
    return searchTerm;
};

// `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;

export const retrieveSearchResults=(searchTerm)=>{
    const wikiSearchString=getWikiSearchString(searchTerm)
}

export const getWikiSearchString=async(searchTerm)=>{
    const maxChars=getMaxChars();
    const rawSearchString=`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;

}


function getMaxChars() {
    let width=window.innerWidth || document.body.clientWidth;
    
    let maxChars;

    if (width <414) maxChars=65;
    if (width >=414 && width<1400) maxChars=100;
    if (width >=1400) maxChars=130;
    return maxChars;
}