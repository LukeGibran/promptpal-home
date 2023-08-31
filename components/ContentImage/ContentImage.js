import { SectionContainer } from "@components/Section";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Engineered Prompts, Instant Results",
        content:
            "With PromptPal, we've simplified the content creation process for you. Our innovative platform has engineered the prompts while our powerful AI algorithms take care of the rest. Just add your keywords, and watch as PromptPal generates compelling responses in seconds.",
        align: "right",
        image: "/feature1.webp"
    },
    {
        id: uuid(),
        title: "Unleash Your Creativity, Endless Possibilities",
        content:
            "PromptPal is designed to fuel your creativity across various domains. Whether you're a social media marketer, a blogger, a small business owner, or a legal professional, our versatile tool has got you covered. Craft captivating posts, write engaging blogs, respond to emails effortlessly, create personalized meal plans, design effective exercise routines, generate legal documents, or develop patient resources – the possibilities are endless.",
        align: "left",
        image: "/feature2.webp"
    },
    {
        id: uuid(),
        title: "Get Started with PromptPal Today",
        content:
            "Join other satisfied users who have unlocked their content creation potential with PromptPal. Start saving time, boosting creativity, and generating impressive results. Choose from our flexible pricing options to suit your needs and budget.",
        align: "right",
        image: "/feature3.webp"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item, i) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                    style={{
                        marginBottom: `${
                            i + 1 == ContentImageData.length ? "2rem" : "10rem"
                        }`
                    }}
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                        <ButtonGroup alignment="center">
                            <a
                                role="button"
                                href="https://app.promptpal.me/#/register"
                                className={`btn text-white lemonsqueezy-button ${
                                    item.align == "left"
                                        ? "bg-[#ef933a] hover:bg-[#ffb046]"
                                        : "bg-[#398492] hover:bg-[#449eaf]"
                                }`}
                                target="_blank"
                            >
                                Sign Up Now! - Free Credits
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
