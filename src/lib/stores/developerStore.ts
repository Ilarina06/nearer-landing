import {readable} from "svelte/store";
import type {IDeveloper} from "../types/Developer";

const emptyDevelopers: IDeveloper[] = []

const developers: IDeveloper[] = [
    {
        developerName: 'Christian Ascaño',
        developerImageURL: '/assets/devs/asca_new.jpg',
        developerDescription: 'As a student, I enjoy finding bugs in the works of my colleague and it helps me expand my knowledge about the functionality of different programs and languages',
        developerAreaOfInterest: 'Network Analyst',
        developerSocialLinks: {
            linkedin: 'https://www.linkedin.com/in/christianascano/',
            facebook: 'https://www.facebook.com/i.got.rektt',
            twitter: 'https://twitter.com/igotrektt',
            email: 'christianjay.ascano@tup.edu.ph'
        }
    },
    {
        developerName: 'Rachel Anne Ilarina',
        developerImageURL: '/assets/devs/rachel.jpg',
        developerDescription: 'I am from TUP - Manila currently taking BSIT. I know some basic knowledge in frontend development using HTML, CSS and Bootstrap.',
        developerAreaOfInterest: 'Hardware Specialist',
        developerSocialLinks: {
            linkedin: 'https://www.linkedin.com/in/rachel-anne-ilarina-b18155204',
            facebook: 'https://www.facebook.com/RachelIlarina',
            twitter: 'https://twitter.com/_ilarinsss_',
            email: 'ilarinarachel@gmail.com'
        }
    },
    {
        developerName: 'Alonzo Ramos',
        developerImageURL: '/assets/devs/alonzo.png',
        developerDescription: 'I\'m a student from TUP currently taking BSIT. I like to draw and do creative things to enhance my skills and creativity. I also know the basics of frontend designing',
        developerAreaOfInterest: 'Digital Artist',
        developerSocialLinks: {
            linkedin: 'https://www.linkedin.com/in/alonzo-ramos-b00726203/',
            facebook: 'https://www.facebook.com/profile.php?id=100081445157534',
            twitter: '',
            email: 'alonzoramos09@gmail.com'
        }
    },
    {
        developerName: 'Julius Anthony Villa',
        developerImageURL: '/assets/devs/julius.png',
        developerDescription: 'I\'m a student of Technological University of the Philippines taking BSIT. I am a full-stack web and mobile developer. I am also knowledgeable in graphic designing.',
        developerAreaOfInterest: 'Software Engineer',
        developerSocialLinks: {
            linkedin: 'https://www.linkedin.com/in/julsvilla1208/',
            facebook: 'https://www.facebook.com/papa.jujubajuju',
            twitter: '',
            email: 'juliusanthony.villa@tup.edu.ph'
        }
    }
]


export const devStore = readable(emptyDevelopers, function start(set) {
    set(developers);
    return function stop() {
        console.log('Ended');
    }
})