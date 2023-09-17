"use client"
import AgeWraper from '@/app/components/agewrapper';
import BigSubTitle from '@/app/components/bigsubtitle';
import Layout from '@/app/components/layout';
import SubTitle from '@/app/components/subtitle';
import SubText from '@/app/components/text';
import MainTitle from '@/app/components/title';
import { ReactElement, useEffect, useState } from 'react';
import { selectData, recommendationData } from '@/utlis/data';
import SecondSubTitle from '@/app/components/secondsubtitle';
import SubmitButton from '@/app/components/submitbtn';
import LinkButton from '@/app/components/linkbtn';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Collapse from '@/app/components/collapse';
import QuestionCard from '@/app/components/questioncard';
import jsonData from '@/utlis/webcopy.json'

export default function DecisionTool() {
  const router = useRouter()
  const langData = jsonData as any;
  const [lang, setLang] = useState("en")

  useEffect(() => {
    if(router.query.age && router.query.lang){
      setLang(router.query.lang as string)
    }
  },[router])
  return (
    <>
      <div className="lg:max-w-5xl lg:w-full text-center mt-12 md:mt-20">
        <div className='mb-6'>
            <div className='mb-2'>
                <MainTitle>{langData[lang].title_1}</MainTitle>
            </div>
            <SubText>
              {langData[lang].subtitle}
            </SubText>
        </div>
        <div className='w-full flex justify-center'>
          <AgeWraper>
            <div>
              <SubTitle active={true}> {langData[lang].ask_age}</SubTitle>
            </div>
            <div className='bg-white px-10 py-2 mt-4 rounded-lg'>
              <BigSubTitle active={false}>{router.query.age}</BigSubTitle>
            </div>
          </AgeWraper>
        </div>
        <div className='w-full mt-10'>
          <BigSubTitle active={false}>{langData[lang].question_title}</BigSubTitle>
          <div className='flex flex-col items-center gap-y-4 mt-4'>
            {
              selectData.map((item: {description:string}, index:any) =>
              <div className='w-full'>
                <QuestionCard description={item.description} yes={langData[lang].yes} no={langData[lang].no}></QuestionCard>
              </div>
              )
            }
          </div>
        </div>
        <div className='w-full p-12 bg-[color:var(--tertiary-accent-sand)] mt-24 text-left rounded-3xl'>
          <div className='mb-12'>
            <div className='mb-2'>
              <SecondSubTitle active={false}>{langData[lang].intervention_title}</SecondSubTitle>
            </div>
            <SubText>
              {langData[lang].intervention_subtitle}
            </SubText>
          </div>
          <div className='w-full flex flex-col items-center gap-y-6'>
            {recommendationData.map((item:any, index:any) =>
            <div className='w-full' key={`recommendation-${index}`}>
              <Collapse title={item.title} description={item.description} ></Collapse>
            </div>
            )}
          </div>
        </div>
        <div className='w-full mt-12 px-4 flex justify-between'>
          <div className='my-auto flex gap-x-1 cursor-pointer'>
            <LinkButton text={langData[lang].share}/>
            <Image
              src="/images/share.svg"
              alt="Share Icon"
              className="dark:invert"
              width={32}
              height={32}
            />
          </div>
          <div>
            <SubmitButton onClick={()=>{console.log("Download")}} text={langData[lang].download}/>
          </div>
        </div>
      </div>
    </>
  )
}

DecisionTool.getLayout = function getLayout(page:ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}