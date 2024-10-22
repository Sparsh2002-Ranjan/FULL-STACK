function downloadBook(unzipped){
    setTimeout(()=>{
        //fetch url
        console.log("Download Book");
        unzipped();
    },5000)
}

function unzipped(){
    setTimeout(() => {
        console.log("Book Uzipped");
        setTimeout(() => {
            console.log("Book Parsed");
            setTimeout(()=>{
                console.log("Book Read and Analised Properly");
                setTimeout(()=>{
                    console.log("Book uploaded successfully")
                },3000)
            },2000)
        },3000)
    },2000)
}

downloadBook();