import React from 'react';
import { Button } from './Button';
import { Link } from 'react-scroll';
import { Link as Link2} from 'react-router-dom';
import './Section.css';

function Section({
    lightBg, topLine, lightText, lightTextDesc, headline, subtitle, descriptions, hasButton, buttonLabel, img, alt, imgStart, project, repo, hasLink
}) {
    return (
        <div className={project ? 'project' : ''}>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className={project ? 'container project' : 'container'}>
                    <div className='row home__hero-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                {subtitle !== '' && (hasLink ? <Link2 to={repo} target='_blank'><h2 className='repo-link'>{subtitle}</h2></Link2> : <h2>{subtitle}</h2>)}

                                {descriptions.length === 1 ? (<p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{descriptions[0]}</p>) :
                                    descriptions.map((item, index) => {return (<li key={index} className='desc-item'>{item}</li>); })}

                                {hasButton && (<Link 
                                to='contact' 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <Button buttonSize='btn--wide' buttonColor='green'>
                                    {buttonLabel}
                                </Button>
                            </Link>)}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
