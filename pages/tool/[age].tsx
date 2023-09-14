"use client"
import AgeWraper from '@/app/components/agewrapper';
import BigSubTitle from '@/app/components/bigsubtitle';
import Layout from '@/app/components/layout';
import SecondText from '@/app/components/secondtext';
import SubTitle from '@/app/components/subtitle';
import SwitchButton from '@/app/components/switchbtn';
import SubText from '@/app/components/text';
import MainTitle from '@/app/components/title';
import { ReactElement } from 'react';
import { selectData, recommendationData } from '@/utlis/data';
import SecondSubTitle from '@/app/components/secondsubtitle';
import SubmitButton from '@/app/components/submitbtn';
import LinkButton from '@/app/components/linkbtn';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Collapse from '@/app/components/collapse';
import QuestionCard from '@/app/components/questioncard';

export default function DecisionTool() {
const router = useRouter()
  return (
    <>
      <div className="lg:max-w-5xl lg:w-full text-center mt-20">
        <div className='mb-6'>
            <div className='mb-2'>
                <MainTitle>MAP Decision Tool</MainTitle>
            </div>
            <SubText>
            Answering the following questions can determine which preventive care services you should be offered. Prioritizing people with certain social characteristics for preventive health care can help improve health.
            </SubText>
        </div>
        <div className='w-full flex justify-center'>
          <AgeWraper>
            <div>
              <SubTitle active={true}> What is your age?</SubTitle>
            </div>
            <div className='bg-white px-10 py-2 mt-4 rounded-lg'>
              <BigSubTitle active={false}>{router.query.age}</BigSubTitle>
            </div>
          </AgeWraper>
        </div>
        <div className='w-full mt-10'>
          <BigSubTitle active={false}>Answer the following questions:</BigSubTitle>
          <div className='flex flex-col items-center gap-y-4 mt-4'>
            {
              selectData.map((item: {description:string, status:boolean}, index:any) =>
              <div className='w-full'>
                <QuestionCard description={item.description} status={item.status}></QuestionCard>
              </div>
              )
            }
          </div>
        </div>
        <div className='w-full p-12 bg-[color:var(--tertiary-accent-sand)] mt-24 text-left rounded-3xl'>
          <div className='mb-12'>
            <div className='mb-2'>
              <SecondSubTitle active={false}>Recommended interventions:</SecondSubTitle>
            </div>
            <SubText>
              Click on each recommendation for more details.
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
            <LinkButton text={"Share"}/>
            <Image
              src="/images/share.svg"
              alt="Share Icon"
              className="dark:invert"
              width={32}
              height={32}
            />
          </div>
          <div>
            <SubmitButton onClick={()=>{console.log("Download")}} text={"Download"}/>
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