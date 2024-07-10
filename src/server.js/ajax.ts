


import { Users,Projet,Contribution,apiResponseUser,apiResponseContribution,apiResponseProject } from "./type"




export const fetchDataUser = async():Promise<apiResponseUser> =>{
        try {
            const response = await fetch(`${process.env.GATSBY_API_URL}/users`);
            const allUsers :apiResponseUser = await response.json();
            if (allUsers) {
                console.log(allUsers);
                return allUsers;
                
            }
            
        } catch (error) {
            console.log(error.toString());
            throw error;
            
        }
}

export const fetchDataProject = async():Promise<Projet[]> =>{
    try {
        const response = await fetch(`${process.env.GATSBY_API_URL}/projects`);
        
        const allProjects :Projet[] = await response.json();
        if (allProjects) {
            return allProjects;
        }else{
            throw new error('échec lors de la récupération des données');
        }
        
    } catch (error) {
        console.error(error.toString());
        throw error;
        
    }
}

export const fetchDataContribution = async():Promise<apiResponseContribution> =>{
    try {
        const response = await fetch(`${process.env.GATSBY_API_URL}/contribution`);
        const data:apiResponseContribution= await response.json();
        if (data.success) {
            console.log(data.contribition);
            
            return data;
        }
        
    } catch (error) {
        console.error(error.toString());
        throw error;
        
    }
}

