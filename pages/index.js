import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Promptpal - Save Time. Fuel Creativity. Generate Results."
                description="Are you tired of spending hours brainstorming content ideas, crafting social media posts, or drafting engaging blog articles? Look no further! PromptPal is your all-in-one AI-powered content generation tool."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                                <BadgeIcon icon="mdi:feature-highlight" />
                            </BadgeGroup>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="mx-auto text-center"
                                type="default"
                            >
                                With PromptPal You Can...
                            </PageTitle>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 mx-auto mt-10">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className=" grid w-full bg-white-600/20 p-12 grid-cols-1 md:grid-cols-2 gap-x-8">
                                        <div>
                                            <ul className="list">
                                                <li>
                                                    <strong>Meal Plans</strong>:
                                                    Plan your weekly meals
                                                    effortlessly, with
                                                    customized options to cater
                                                    to your dietary preferences
                                                    and nutritional needs.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Workout Plans
                                                    </strong>
                                                    : Get personalized workout
                                                    routines tailored to your
                                                    fitness goals, whether it's
                                                    weight loss, muscle gain, or
                                                    overall fitness.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Blog and Social Media
                                                        Posts
                                                    </strong>
                                                    : Generate engaging and
                                                    captivating content ideas
                                                    for your blog or social
                                                    media platforms, ensuring a
                                                    consistent flow of creative
                                                    inspiration.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Content Ideas
                                                    </strong>
                                                    : Struggling to come up with
                                                    fresh content? PromptPal
                                                    will provide you with an
                                                    array of content ideas
                                                    across various niches to
                                                    keep your audience engaged.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Book Outlines
                                                    </strong>
                                                    : Unlock your inner author
                                                    with comprehensive outlines
                                                    for your next novel,
                                                    non-fiction book, or memoir,
                                                    saving you countless hours
                                                    of brainstorming.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Landing Page Copy
                                                    </strong>
                                                    : Craft persuasive copy for
                                                    your landing pages that will
                                                    convert visitors into
                                                    customers and skyrocket your
                                                    conversion rates.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Job Descriptions
                                                    </strong>
                                                    : Find the perfect
                                                    candidates for your team by
                                                    effortlessly generating job
                                                    descriptions that attract
                                                    top talent.
                                                </li>
                                            </ul>
                                            <ButtonGroup alignment="start">
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

                                        <CardImage
                                            src="/feature4.webp"
                                            alt="Customizable Layouts image used."
                                        />
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className=" grid w-full bg-white-600/20 p-12 grid-cols-1 md:grid-cols-2 gap-x-8">
                                        <CardImage
                                            src="/feature5.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <div>
                                            <ul className="list">
                                                <li>
                                                    <strong>
                                                        Press Releases
                                                    </strong>
                                                    : Create attention-grabbing
                                                    press releases that
                                                    effectively communicate your
                                                    company's latest news and
                                                    updates to the media.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Long-Form Sales Letters
                                                    </strong>
                                                    : Transform your sales pitch
                                                    with compelling and
                                                    persuasive long-form sales
                                                    letters that captivate your
                                                    audience and drive
                                                    conversions.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Presentation Outlines
                                                    </strong>
                                                    : Impress your audience with
                                                    well-structured and engaging
                                                    presentation outlines that
                                                    make your ideas shine.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Video Scripts
                                                    </strong>
                                                    : Whether you're a YouTuber
                                                    or a marketer, PromptPal
                                                    will generate video scripts
                                                    that engage and entertain
                                                    your viewers.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Follow-Up Email
                                                        Sequences
                                                    </strong>
                                                    : Nurture your leads and
                                                    build lasting relationships
                                                    with professionally written
                                                    email sequences that deliver
                                                    results.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Podcast Episode Outlines
                                                        and Scripts
                                                    </strong>
                                                    : From brainstorming topics
                                                    to scripting engaging
                                                    episodes, PromptPal has got
                                                    you covered on your
                                                    podcasting journey.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Resource Creation
                                                    </strong>
                                                    : Generate valuable
                                                    resources such as cheat
                                                    sheets, guides, and
                                                    templates to provide added
                                                    value to your audience.
                                                </li>
                                            </ul>
                                            <ButtonGroup alignment="start">
                                                <a
                                                    role="button"
                                                    href="https://app.promptpal.me/#/register"
                                                    className="btn bg-[#398492] hover:bg-[#449eaf] text-white lemonsqueezy-button"
                                                    target="_blank"
                                                >
                                                    Sign Up Now! - Free Credits
                                                    <Icon icon="material-symbols:arrow-forward-rounded" />
                                                </a>
                                            </ButtonGroup>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className=" grid w-full bg-white-600/20 p-12 grid-cols-1 md:grid-cols-2 gap-x-8">
                                        <div>
                                            <ul className="list">
                                                <li>
                                                    <strong>
                                                        Content Editing
                                                    </strong>
                                                    : Elevate your writing with
                                                    PromptPal's editing
                                                    capabilities, ensuring your
                                                    content is polished,
                                                    error-free, and ready to
                                                    impress.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Legal Agreements
                                                    </strong>
                                                    : Create legal agreements
                                                    and contracts, tailored to
                                                    your specific needs, saving
                                                    you time and costly legal
                                                    fees.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Marketing Plans
                                                    </strong>
                                                    : Develop comprehensive
                                                    marketing plans that outline
                                                    your strategies and tactics,
                                                    helping you achieve your
                                                    business goals.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Personal Math Tutor
                                                    </strong>
                                                    : Improve your math skills
                                                    with personalized lessons
                                                    and exercises that make
                                                    learning enjoyable and
                                                    effective.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Recipe Creation
                                                    </strong>
                                                    : Explore a world of
                                                    culinary possibilities with
                                                    PromptPal's recipe
                                                    generation, bringing
                                                    creativity to your kitchen.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Language Translation
                                                    </strong>
                                                    : Seamlessly translate
                                                    sentences into multiple
                                                    languages, breaking down
                                                    communication barriers and
                                                    connecting with a global
                                                    audience.
                                                </li>
                                            </ul>
                                            <ButtonGroup alignment="start">
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

                                        <CardImage
                                            src="/feature6.webp"
                                            alt="Progress Tracking image used."
                                        />
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our customers have to say about
                                this template
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                    {/* Accordions */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about NutriTrack?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                </SectionContainer>
            </div>
        </Layout>
    );
}
