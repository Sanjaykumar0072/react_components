import React from "react";
import Menu from "./componentMenu";

export default function Home() {
    return (
        <>
            <Menu />
            <div className="documentation">
                <h1>Simplify Your Work with Pre-Built Components</h1>
                <p>
                    Welcome to our documentation! Our pre-built components are designed to
                    reduce your development time and make React.js coding easier.
                </p>

                <h1>Benefits of Using Pre-Built Components</h1>
                <ul>
                    <li>
                        <strong>Time-Saving:</strong> Our components are ready to use, so you
                        don't need to start from scratch. Save valuable development time.
                    </li>
                    <li>
                        <strong>Consistency:</strong> Ensure a consistent look and behavior
                        across your application with our standardized components.
                    </li>
                    <li>
                        <strong>Easy Integration:</strong> Our components are designed to
                        seamlessly integrate into your React.js projects.
                    </li>
                    <li>
                        <strong>Customization:</strong> Customize our components to match your
                        project's unique requirements.
                    </li>
                    <li>
                        <strong>Community Support:</strong> Join our community of developers
                        using our components for shared knowledge and support.
                    </li>
                </ul>

                <div className="contact">
                    <h2>Follow Me For More</h2>
                    <ul>
                        <li><a target='_blank' href="https://github.com/Sanjaykumar0072">
                            <svg stroke="#00000" fill="#00000" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                        </a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.linkedin.com/in/sanjaykumar0072/">
                                <svg stroke="#00000" fill="#00000" strokeWidth="0" viewBox="0 0 448 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </>
    )
}