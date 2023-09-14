import Image from 'next/image'
import LanguageButton from './components/langbtn'
import MainTitle from './components/title';
import SubText from './components/text';
import SubmitButton from './components/submitbtn';
import SubTitle from './components/subtitle';
import AgeInputBox from './components/ageinputbox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logo.svg"
                alt="MAP Logo"
                className="dark:invert"
                width={161}
                height={55}
                priority
              />
            </a>
        </div>
        <div className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 lg:static lg:w-auto lg:p-4">
            <LanguageButton text={"EN"} active={true}/>
            <span className="my-auto px-1 text-lg">/</span>
            <LanguageButton text={"FR"} active={false}/>
        </div>
      </div>
      <div className="lg:max-w-5xl lg:w-full text-center mt-20">
        <div className='mb-6'>
            <div className='mb-2'>
                <MainTitle>Decision Tool</MainTitle>
            </div>
            <SubText>
                Answering the following questions can determine which preventive care services you should be offered. Prioritizing people with certain social characteristics for preventive health care can help improve health.
            </SubText>
        </div>

        <div className='h-96 w-full bg-[color:var(--tertiary-accent-sand)] flex rounded-lg justify-center'>
            <div className='mx-auto my-auto max-w-sm text-center'>
                <SubTitle active={false}>What is your Age?</SubTitle>
                <div className='mt-3 flex'>
                  <AgeInputBox />
                  <div className='ms-4 flex flex-col justify-center'>
                    <Image
                      src="/images/arrow-up.svg"
                      alt="Arrow Up Icon"
                      className="dark:invert"
                      width={48}
                      height={48}
                      priority
                    />
                    <Image
                      src="/images/arrow-down.svg"
                      alt="Arrow Down Icon"
                      className="dark:invert"
                      width={48}
                      height={48}
                      priority
                    />
                  </div>
                </div>
                <div className='mt-8 mx-12'>
                  <SubmitButton text={"Enter"}/>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
