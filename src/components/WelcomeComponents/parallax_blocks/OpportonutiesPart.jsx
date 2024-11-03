import React from "react";
import { useInView } from "react-intersection-observer";
import FlipCard from "./FlipCard";

const AnimatedBlock = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`animated-block ${inView ? "visible" : ""}`}>
            {children}
        </div>
    );
};

const OpportonutiesPart = () => {
    return (
        <div className="opportonuties_part__content __content">
            <div className="animated-block-section-1-opportonuties-part animated-block-section">
                <AnimatedBlock>
                    <h1 id="animated-block1">Our Opportonuties</h1>
                </AnimatedBlock>
                <AnimatedBlock>
                    <p>
                        Your resume builder website is designed with
                        user-focused precision. Every feature is carefully
                        crafted and tested to ensure a seamless experience for
                        job seekers. From dynamic templates to optimized
                        customization, our intuitive interface empowers users to
                        create professional resumes effortlessly.
                    </p>
                </AnimatedBlock>
                <AnimatedBlock>
                    <p>
                        The development team is committed to enhancing the
                        site’s performance and features. Each improvement is
                        rigorously researched and validated, ensuring the most
                        effective solutions are integrated. Only tested and
                        verified enhancements make it to your screen, delivering
                        a reliable and forward-thinking resume-building
                        experience.
                    </p>
                </AnimatedBlock>
            </div>
            <div className="animated-block-section-2-opportonuties-part animated-block-section">
                <AnimatedBlock>
                    <FlipCard
                        frontContent={
                            <h2 className="h2-animated-card">
                                Maximum ease for creating resumes
                            </h2>
                        }
                        backContent={
                            <p>
                                Every feature is thoughtfully designed to
                                simplify the resume-building process
                            </p>
                        }
                    />
                </AnimatedBlock>
                <AnimatedBlock>
                    <FlipCard
                        frontContent={
                            <h2 className="h2-animated-card">
                                Flexible and stylish templates
                            </h2>
                        }
                        backContent={
                            <p>
                                Modern, customizable templates tailored for
                                various professions and purposes
                            </p>
                        }
                    />
                </AnimatedBlock>
                <AnimatedBlock>
                    <FlipCard
                        frontContent={
                            <h2 className="h2-animated-card">
                                Every improvement is validated
                            </h2>
                        }
                        backContent={
                            <p>
                                Only well-tested and proven features become part
                                of your experience
                            </p>
                        }
                    />
                </AnimatedBlock>
                <AnimatedBlock>
                    <FlipCard
                        frontContent={
                            <h2 className="h2-animated-card">
                                We’re always enhancing our platform
                            </h2>
                        }
                        backContent={
                            <p>
                                Our team integrates the best solutions and
                                innovations for your success
                            </p>
                        }
                    />
                </AnimatedBlock>
            </div>
        </div>
    );
};

export default OpportonutiesPart;
