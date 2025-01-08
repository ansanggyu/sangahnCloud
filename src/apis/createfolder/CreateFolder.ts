
export const createFolder = async (
    folderName: string
): Promise<string> => {
    try{
        axios.post("http://localhost:3000/create-folder", { folderName })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.error(error);
            })
    }catch(error){
        if(error){
            console.log(error);
        }
        throw new Error("Error creating folder");
    }
}