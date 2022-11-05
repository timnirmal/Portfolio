'use client';

import AvatarCard from "../components/avatar-card/avatar-card";
import {useEffect, useState} from "react";

import {
    genericError,
    getInitialTheme,
    noConfigError,
    notFoundError,
    setupHotjar,
    tooManyRequestError,
    sanitizeConfig,
    skeleton,
} from '../helpers/utils';


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
        company: 'Undergraduate',
    };

    // setProfile(profileData);
    useEffect(() => {
        setProfile(profileData);
    }
    , [profileData]);

    let resume = {
        name: 'Thimira Nirmal',
        avatar: 'https://avatars.githubusercontent.com/u/42657815?v=4',
        bio: 'I am a software engineer',
        location: 'Sri Lanka',
        company: 'Undergraduate',
        socials: {
            github: "github.com/timnirmal",
            linkedin: "linkedin.com/in/thimira-nirmal",
            twitter: "twitter.com/timnirmal"
        },
        fileUrl: "https:",
    }

    console.log("Sanitized Config", sanitizeConfig.resume);





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
                            github={sanitizedConfig.github}
                            social={sanitizedConfig.social}
                        />
                        {/*<Skill*/}
                        {/*    loading={loading}*/}
                        {/*    skills={sanitizedConfig.skills}*/}
                        {/*/>*/}
                        {/*<Experience*/}
                        {/*    loading={loading}*/}
                        {/*    experiences={sanitizedConfig.experiences}*/}
                        {/*/>*/}
                        {/*<Education*/}
                        {/*    loading={loading}*/}
                        {/*    education={sanitizedConfig.education}*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                        {/*<Project*/}
                        {/*    repo={repo}*/}
                        {/*    loading={loading}*/}
                        {/*    github={sanitizedConfig.github}*/}
                        {/*    googleAnalytics={sanitizedConfig.googleAnalytics}*/}
                        {/*/>*/}
                        {/*<Blog*/}
                        {/*    loading={loading}*/}
                        {/*    googleAnalytics={sanitizedConfig.googleAnalytics}*/}
                        {/*    blog={sanitizedConfig.blog}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </div>
)
}