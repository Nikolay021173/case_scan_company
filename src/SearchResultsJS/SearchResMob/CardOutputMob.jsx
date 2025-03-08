import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {cleanHtmlContent} from '../SearchResUtil/SearchResUtil';


const CardOutputResult = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 335px;
        height: 694px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        padding: 19px 14px 18px 24px;
         overflow-y: auto;
`;

const LinkToSource = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
`;

const Dat = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 1%;
    color: rgba(148, 148, 148, 1);
`;

const A = styled.a`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 1%;
    text-decoration: underline;
    color: rgba(148, 148, 148, 1);
    margin-left: 0px;
     &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

const AboutCompany = styled.div`
    font-family: Inter;
    font-weight: 500;
    font-size: 19px;
    line-height: 22.99px;
    letter-spacing: 1%;
    margin-top: 21px;
`;

const TechNews = styled.button`
    width: 132px;
    height: 20px;
    border-radius: 5px;
    border: none;
    background-color: rgba(255, 182, 79, 1);
    font-family: Inter;
    font-weight: 400;
    font-size: 10px;
    line-height: 12.1px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
    margin-top: 20px;
`; 

const P = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.52px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 0.5);
`;

const ContainerImageCard = styled.div`
    margin-top: 13px;
`;

const ContainerButtAndSpan = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 13px;
`;

const Button = styled.button`
        width: 195px;
        height: 40.7px;
        border-radius: 5px;
        border: none;
        background-color: rgba(124, 227, 225, 1);
        color: rgba(0, 0, 0, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 1%;
         &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

const Span = styled.span`
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 0%;
        color: rgba(148, 148, 148, 1);
        align-self: flex-end;
`;


const CardOutputMob = ({ date, url, sourceName, isTechNews, isAnnouncement, isDigest, title, content, 
    wordCount, picture }) => {
  const [cleanContent, setCleanContent] = useState('');

  useEffect(() => {
    setCleanContent(cleanHtmlContent(content));
  }, [content]);

  const tagLabel = isTechNews ? "Технические новости" : isAnnouncement ? "Анонсы и события" : "Сводки новостей";

  return (
<CardOutputResult style={{marginTop: '10px'}}>
    <LinkToSource><Dat>{date}</Dat><A href={url}>{sourceName}</A></LinkToSource>
        <AboutCompany>{title}</AboutCompany>
        <TechNews>{tagLabel}</TechNews>
       <ContainerImageCard>
           <img src={picture}alt="Скиллфэктори"></img>
       </ContainerImageCard>
                <P>{cleanContent}</P>
    <ContainerButtAndSpan>
           <Button>Читать в источнике</Button>
           <Span>{wordCount} слова</Span>                            
   </ContainerButtAndSpan>
</CardOutputResult>

);
};

export default CardOutputMob;