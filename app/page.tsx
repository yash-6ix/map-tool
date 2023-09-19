"use client";
import Image from "next/image";
import LanguageButton from "./components/langbtn";
import MainTitle from "./components/title";
import SubText from "./components/text";
import SubmitButton from "./components/submitbtn";
import SubTitle from "./components/subtitle";
import AgeInputBox from "./components/ageinputbox";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import jsonData from "@/utlis/webcopy.json";
import styled from "styled-components";

const Text = styled.p`
  color: #fff;
  /* Subtitle 2 */
  font-family: KievitOT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.06px;

  @media (max-width: 576px) {
    /* Change the value based on your desired breakpoint */
    font-size: 16px; /* Change the font size for smaller devices */
    letter-spacing: 0.04px;
  }
`;

export default function Home() {
  const [age, setAge] = useState<string>("");
  const [lang, setLang] = useState("en");
  const router = useRouter();
  const langData = jsonData as any;
  const pathname = usePathname();

  useEffect(() => {
    console.log(router);
    const queryString = `?lang=${lang}`;
    router.push(`${pathname}/${queryString}`);
  }, [lang]);

  const onSubmit = () => {
    if (age && parseInt(age)) {
      router.push(`/app/${parseInt(age)}`);
    }
  };

  const changeAge = (value: number) => {
    let changedAge: number = 0;
    changedAge = parseInt(age) + value;
    if (changedAge > 0) {
      setAge(changedAge.toString());
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 flex max-w-5xl w-full items-center justify-between font-mono text-sm pt-8 px-4 md:pt-12 md:px-12">
        <div className="left-0 flex w-full items-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto">
          <div id="diagonal-banner">
            Under construction! For Release: 25 September 2023
          </div>

          <Image
            src="/images/logo.svg"
            alt="MAP Logo"
            width={161}
            height={55}
            priority
          />
        </div>
        <div className="left-0 top-0 flex w-auto justify-center from-zinc-200 pb-6 pt-8 lg:static lg:p-4">
          <LanguageButton
            text={"en"}
            active={lang == "en" ? true : false}
            changeLanguage={setLang}
          />
          <span className="my-auto px-1 text-lg">/</span>
          <LanguageButton
            text={"fr"}
            active={lang == "fr" ? true : false}
            changeLanguage={setLang}
          />
        </div>
      </div>
      <div className="lg:max-w-5xl lg:w-full md:text-center mt-12 md:mt-20 px-4 md:px-12">
        <div className="mb-6">
          <div className="mb-2 text-center">
            <MainTitle>{langData[lang].title}</MainTitle>
          </div>
          <SubText>{langData[lang].subtitle}</SubText>
        </div>

        <div className="h-72 lg:h-96 w-full bg-[color:var(--tertiary-accent-sand)] flex rounded-lg justify-center">
          <div className="mx-auto my-auto max-w-sm text-center">
            <SubTitle active={false}>{langData[lang].ask_age}</SubTitle>
            <div className="mt-3 flex">
              <AgeInputBox
                onChange={setAge}
                onEnter={() => onSubmit()}
                value={age}
              />
              <div className="ms-4 flex flex-col justify-center">
                <div onClick={() => changeAge(1)}>
                  <Image
                    src="/images/arrow-up.svg"
                    alt="Arrow Up Icon"
                    className="dark:invert cursor-pointer"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <div onClick={() => changeAge(-1)}>
                  <Image
                    src="/images/arrow-down.svg"
                    alt="Arrow Down Icon"
                    className="dark:invert cursor-pointer"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 mx-12">
              <SubmitButton onClick={onSubmit} text={langData[lang].enter} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-8 px-4 md:py-20 md:px-40 mt-12 bg-lime-800 md:hidden">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          viverra ipsum. Mauris augue magna, dignissim ut nisl et, egestas
          accumsan elit.
        </Text>
      </div>
    </main>
  );
}
