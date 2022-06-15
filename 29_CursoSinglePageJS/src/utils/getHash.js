const getHash = () => 
    location.hash.slide(1).toLocaleLowerCase().split('/') || '/'; // ['', '1', ''] 

    export default getHash;