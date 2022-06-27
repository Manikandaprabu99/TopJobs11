export interface AddPostRequest{
    companyName: string | undefined;
    jobTitle: string | undefined;
    location: string | undefined;
    summary: string | undefined;
    salary: string | undefined;
    urlHandle: string | undefined;
    featureImageUrl: string | undefined;
    visible: boolean | undefined; 
    publishDate: string | undefined;    
    updatedDate: string | undefined;
}