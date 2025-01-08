import axios from "axios";

const host = `http://localhost:8080`

export const createFolder = async (
    folderName: string
): Promise<string> => {
    try{
        const response = await axios.post(`${host}/create-folder`, { folderName });
            alert(response.data.message);
            return response.data.message;
    }catch(error){
        if(error){
            console.log(error);
        }
        throw new Error("Error creating folder");
    }
}