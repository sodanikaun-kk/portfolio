import { useEffect, useState } from 'react'

const AnimatedTitles = () => {
    const roles = [
        { title: 'web Developr' },
        { title: 'Full Stack Developr' },
        { title: 'Software Developr' },
        { title: 'android Developr' },
    ];

    const [currentRoleIndex, setCurrIndex] = useState(0);
    const [currentText, setCurText] = useState('');
    const [isDeleting, sectiontIsDeleting] = useState(false);
    const [TypingSpreed, setOnTypingSpreed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const current = roles[currentRoleIndex].title;
            if (!isDeleting) {
                if (currentText === current) {
                    setTimeout = (() => sectiontIsDeleting(true), 2000);
                    setOnTypingSpreed(500);
                } else {
                    setCurText(current.substring(0, currentText.length + 1));
                    setOnTypingSpreed(150);
                }
            } else {
                if (currentText === "") {
                    sectiontIsDeleting(false);
                    setCurrIndex((prev) => (prev + 1) % roles.length);
                    setOnTypingSpreed(500);
                } else {
                    setCurText(current.substring(0, currentText.length + 1));
                    setOnTypingSpreed(150);
                }
            }
        };
        const timer = setTimeout(handleTyping, TypingSpreed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, roles, TypingSpreed]);
    return (
        <div className='text-center md:text-start'>
            <h1 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                <span className='text-outline pb-1'>{currentText}</span>
                <span className='inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse'></span>
            </h1>
        </div>
    );
};

export default AnimatedTitles