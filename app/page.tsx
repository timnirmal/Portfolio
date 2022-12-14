'use client';

import AvatarCard from "../components/avatar-card/avatar-card";
import Details from "../components/details/details";
import Skill from "../components/skills";
import Experience from "../components/experiences";
import Education from "../components/education";
import Academic from "../components/academic";
import Blog from "../components/blog";
import Project from "../components/project/project";
import {useEffect, useState} from "react";
import {sanitizeConfig, skeleton} from '../helpers/utils';

export default function Page() {
    const [theme, setTheme] = useState(null);
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState(null);

    const bgColor = 'bg-base-300';

    let profileData = {
        avatar: "https://avatars.githubusercontent.com/u/42657815?v=4",
        // name: data.name ? data.name : '',
        name: 'Thimira Nirmal',
        bio: 'I am a software engineer',
        location: 'Sri Lanka',
        // company: 'Undergraduate',
    };

    // setProfile(profileData);
    useEffect(() => {
            // @ts-ignore
            setProfile(profileData);
        }
        , [profileData]);

    let resume = {
        name: 'Thimira Nirmal',
        avatar: 'https://avatars.githubusercontent.com/u/42657815?v=4',
        bio: 'I am a software engineer',
        location: 'Sri Lanka',
        // company: 'Undergraduate',
        socials: {
            github: "github.com/timnirmal",
            linkedin: "linkedin.com/in/thimira-nirmal",
            twitter: "twitter.com/timnirmal"
        },
        fileUrl: "https:",
    }

    // console.log("Sanitized Config", sanitizeConfig.resume);

    let github = {
        username: "timnirmal",
    }

    let social = {
        email: "timnirmal@gmail.com",
        phone: "071-1234567",
        website: "timnirmal.com",
        linkedin: "linkedin.com/in/thimira-nirmal",
        twitter: "twitter.com/timnirmal",
        facebook: "facebook.com/timnirmal",
        // instagram: "instagram.com/timnirmal",
        // medium: "medium.com/timnirmal",
        // dev: "dev.to/timnirmal",
        // stackoverflow: "stackoverflow.com/timnirmal",
    }

    let skills = ["Python","TypeScript", "NextJS", "Tailwind"]

    // let experiences = [
    //     // {
    //     //     company: "Company",
    //     //     position: "Position",
    //     //     date: "Date",
    //     //     description: "Description",
    //     // },
    //     // {
    //     //     company: "Company",
    //     //     position: "Position",
    //     //     date: "Date",
    //     //     description: "Description",
    //     // }
    // ]

    let academic = [
        {
            institution: "University of Sri Jayewardenepura",
            degree: "BSc ENGINEERING (Hons)",
            from: "December 2019",
            to: "Present",
            description: "Minor in Data Management",
        },
        // {
        //     school: "School",
        //     degree: "Degree",
        //     date: "Date",
        //     description: "Description",
        // }
    ]

    let education = [
        {
            //     time: PropTypes.node,
            //     qualification: PropTypes.node,
            //     institution: PropTypes.node,
            //     description: PropTypes.node,
            time: "",
            qualification: "AZ-900: Microsoft Azure Fundamentals",
            institution: "Microsoft",
            description: "Completed and passed the AZ-900 Exam",
            // description: "https://www.credly.com/badges/1f9b1f9a-1b5a-4b1f-8f9a-1b5a4b1f8f9a",
            badge: "https://images.credly.com/size/680x680/images/1f9b1f9a-1b5a-4b1f-8f9a-1b5a4b1f8f9a/AZ-900_600x600.png",
        },{
            time: "",
            qualification: "365 DATA SCIENCE - BUSINESS ANALYST/DATA ANALYST/DATA SCIENTISTS",
            institution: "365 Data Science",
            description: "Followed, completed, and passed all the exams and certifications on 365 Data Science.",
            // description: "https://www.credly.com/badges/1f9b1f9a-1b5a-4b1f-8f9a-1b5a4b1f8f9a",
            badge: "https://images.credly.com/size/680x680/images/1f9b1f9a-1b5a-4b1f-8f9a-1b5a4b1f8f9a/AZ-900_600x600.png",
        },
        {
            time: "",
            qualification: "INTRODUCTION TO CYBERSECURITY",
            institution: "Cisco",
            description: "Completed this course which was Issued by Cisco.",
            // description: "https://www.credly.com/badges/1f9b1f9a-1b5a-4b1f-8f9a-1b5a4b1f8f9a",
            badge: "https://images.credly.com/size/680x680/images/1f9b1f9a-1b5a-4b1f-8f9a-1b5a4b1f8f9a/AZ-900_600x600.png",
        }
    ]


    let projects = [
        {
            name: "AI E-COMMERCE SYSTEM",
            description: "This E-Commerce system has a Customer End (Ecommerce Site) and a Shop End (Admin " +
                "End) and Python Backend. Machine learning is used for Product Recommendation " +
                "System, Chatbot and Customer Segmentation. Data Processing, Chat, Image, Report " +
                "Generation are done with python and FastAPI as Backend.",
            link: "https://github.com/timnirmal/Ecom-Customer-Shop-End",
            image: "https://cdn-images-1.medium.com/max/2600/0*kz30LOdXT8CyOymh",
            language: "JavaScript",
        },
        {
            name: "COVID PRO - COVID PROTOCOL ASSISTANCE APP FOR SHOPS",
            description: "Covid Pro is used by shops to ensure that their customers and staff are following some of\n" +
                "the most essential protocols against the Covid 19 spread",
            link: "https://github.com/covidpro",
            image: "",
            language: "JavaScript",
        },
        {
            name: "READ MINDS CARD GAME - C++",
            description: "Card Game Which allows Magician and Assistant to Performed a Magic trick in console",
            link: "https://github.com/timnirmal/Card-Game",
            image: "",
        },
        // {
        //     name: "Project2",
        //     description: "Description2",
        //     link: "",
        //     image: "",
        // }
    ]

    let blog = {
        limit: 3,
        show: true,
        data: [
            {
                title: "Why Enhancing Virtual Reality is Important",
                description: "Virtual reality is seen as a ???fun??? technology to some without much...",
                thumbnail: "https://cdn-images-1.medium.com/max/2600/0*kz30LOdXT8CyOymh",
                link: "https://medium.com/p/ac19dd21c728",
                categories: ["vr", "technology", "virtual-reality", "engineering", "artificial-intelligence"],
                publishedAt: "2021-10-11 18:43:34 GMT+0600"
            },
            {
                title: "How to Get Started With Data Science: a Brief Guide",
                description: "You???ve heard about data science and machine learning, and you want to get started. Maybe you hear...",
                thumbnail: "https://cdn-images-1.medium.com/max/2600/0*Ah0vLtsvxqUvRWuS",
                link: "https://medium.com/p/88ec244f2fee",
                categories: ["beginner-coding", "data-science-training", "machine-learning-course"],
                publishedAt: "2021-10-11 18:43:34 GMT+0600"
            }
        ]
    }

    return (
        <div className={`p-4 lg:p-10 min-h-full ${bgColor}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                        <AvatarCard
                            profile={profile}
                            loading={loading}
                            avatarRing={true}
                            resume={resume}
                        />
                        <Details
                            profile={profile}
                            loading={loading}
                            github={github}
                            social={social}
                        />

                        {/*<Experience*/}
                        {/*    loading={loading}*/}
                        {/*    experiences={experiences}*/}
                        {/*/>*/}
                        <Academic
                            loading={loading}
                            academic={academic}
                        />
                        <Education
                            loading={loading}
                            education={education}
                        />

                    </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                        <Skill
                            loading={loading}
                            skills={skills}
                        />
                        <Project
                            repo={projects}
                            loading={loading}
                            github={github}
                        />
                        {/*<Blog*/}
                        {/*    loading={loading}*/}
                        {/*    googleAnalytics={sanitizeConfig.googleAnalytics}*/}
                        {/*    blog={blog}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}