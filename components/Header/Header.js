import Link from "next/link";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="logo"
                            height="100"
                            width="100"
                        />
                    </Link>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="https://app.promptpal.me/#/register"
                            className="btn bg-[#398492] hover:bg-[#449eaf] text-white ml-4"
                            target="_blank"
                        >
                            Sign Up
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
