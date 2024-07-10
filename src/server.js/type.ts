export interface Projet{
    id :number;
    titre: string;
    description:string;
    duree:string;
    image :string;
    budget:number;
    categorie: 'agricole'|'agroalimentaire';
    totalRecu :number;
    pdfProjet:string;
    recompense:string;
    localisation:string;
    categoryId:number;
    userId:number;
    contributionId:number;
}

export interface Users{
    id:number;
    nom :string;
    postNom :string;
    email :string;
    password :string;
    telephone :number;
    createdAt :string;
    role :string; 
    monToken? :string;
    localisation :string;
    profilImage :string;
    otpSecret? :number
    projetId:number;
    contributionId:number
}

export interface Contribution {
    id:number;
    montant:number;
    echeancePaiement :string;
    conditionRemboursement:string;
    releverBancaire :string;
    typeInvestissement :string;
    userId:number;
    projectId:number
}

export interface apiResponseUser{
    user:Users[];
}

export interface apiResponseProject{
    project:Projet[];
}

export interface apiResponseContribution{
    contribition:Contribution[];
    success: boolean
}