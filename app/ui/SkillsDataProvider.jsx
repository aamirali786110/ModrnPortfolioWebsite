import React from 'react';

const SkillsDataProvider = ({ src, width, height, index }) => {
    return (
        <div key={index} className="skill-item">
            <img 
                src={src} 
                alt={`Skill ${index}`} 
                width={width} 
                height={height} 
                className="object-contain" 
            />
        </div>
    );
};

export default SkillsDataProvider;
