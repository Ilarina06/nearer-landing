export interface IDeveloper {
    developerName: string;
    developerDescription: string;
    developerImageURL: string;
    developerAreaOfInterest: string;
    developerSocialLinks?: ISocialLinks;
}

interface ISocialLinks {
    twitter: string;
    facebook: string;
    linkedin: string;
    email: string;
}