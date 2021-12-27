import React from 'react';
import { useSelector } from 'react-redux';
import { translateByFieldSelector } from 'src/module/Setting';
import { IHomeLanguage } from '../..';
import Section from './Section.item';

const HomeSections = React.memo(() => {
    const homeLanguage: IHomeLanguage = useSelector(translateByFieldSelector)('home');
    const { sectionFactories } = homeLanguage;
    return (
        <>
            {sectionFactories.map((section, index) => (
                <Section key={section.id} {...{ ...section, index }} />
            ))}
        </>
    );
});

export default HomeSections;
