import React from 'react'
import { Tab, Tabs } from './react-tab';
import Menu from '../../componentMenu';

export default function ReactTabs() {
    return (
        <>
        <Menu />
            <div className="img-content">
                <Tabs>
                    <Tab label="Class">
                        <div>
                            <a href="/gallery/#">Explore More</a>
                            <img src="/src/assets/images/img1.png" />
                        </div>
                    </Tab>
                    <Tab label="Event">
                        <div>
                            <a href="/gallery/#">Explore More</a>
                            <img src="/src/assets/images/img2.png" />
                        </div>
                    </Tab>
                    <Tab label="Photoshoot">
                        <div>
                            <a href="/gallery/#">Explore More</a>
                            <img src="/src/assets/images/img3.png" />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}