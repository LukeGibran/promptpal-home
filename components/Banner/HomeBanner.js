import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>Discover PromptPal!</BadgeMessage>
                        <BadgeIcon icon="material-symbols:computer-outline" />
                    </BadgeGroup>
                </MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <Content alignment="center" className="text-center mb-3">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src="/logo.png"
                                alt="logo"
                                height="200"
                                width="200"
                            />
                        </div>
                    </Content>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        Save Time. Fuel Creativity. Generate Results.
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Are you tired of spending hours brainstorming
                            content ideas, crafting social media posts, or
                            drafting engaging blog articles? Look no further!
                            PromptPal is your all-in-one AI-powered content
                            generation tool.
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <a
                                role="button"
                                href="https://app.promptpal.me/#/register"
                                className="btn bg-[#ef933a] hover:bg-[#ffb046] text-white lemonsqueezy-button"
                                target="_blank"
                            >
                                Sign Up Now! - Free Credits
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <img
                            src="/banner.png"
                            width="1024"
                            height="680"
                            alt="Page Banner"
                            className="mx-auto"
                        />
                        {/* <Image
                            src="/banner.png"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        /> */}
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
