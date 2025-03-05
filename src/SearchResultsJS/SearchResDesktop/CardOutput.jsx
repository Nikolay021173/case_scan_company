import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {cleanHtmlContent} from '../SearchResUtil/SearchResUtil';

const CardOutputResult = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 641px;
        height: 694px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        padding: 19px 30px 35px 30px;
`;

const LinkToSource = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
`;

const Dat = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    letter-spacing: 2%;
    color: rgba(148, 148, 148, 1);
`;

const A = styled.a`
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    letter-spacing: 2%;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-offset: Auto;
    text-decoration-thickness: Auto;
    color: rgba(148, 148, 148, 1);
    margin-left: 14px;
     &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`; 

const AboutCompany = styled.div`
    font-family: Inter;
    font-weight: 500;
    font-size: 26px;
    line-height: 31.47px;
    letter-spacing: 2%;
    color: rgba(0, 0, 0, 1);
    margin-top: 24px;
`;

const TechNews = styled.button`
    width: 157px;
    height: 22px;
    border-radius: 5px;
    border:none;
    background-color: rgba(255, 182, 79, 1);
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.52px;
    letter-spacing: 2%;
    color: rgba(0, 0, 0, 1);
    margin-top: 14px;
`; 

const ContainerImageCard = styled.div`
    margin-top: 14px;
`;

const P = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    letter-spacing: 2%;
    color: rgba(0, 0, 0, 0.5);
`;

const ContainerButtAndSpan = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 17px;
`;

const Button = styled.button`
        width: 223px;
        height: 46.5px;
        border-radius: 5px;
        border: none;
        background-color: rgba(124, 227, 225, 1);
        color: rgba(0, 0, 0, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        letter-spacing: 2%;
         &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

const Span = styled.span`
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        letter-spacing: 2%;
        color: rgba(148, 148, 148, 1);
        align-self: flex-end;
`;


const CardOutput = ({ date, url, sourceName, isTechNews, isAnnouncement, isDigest, 
    title, content, wordCount, picture }) => {
  const [cleanContent, setCleanContent] = useState('');


  useEffect(() => {
    setCleanContent(cleanHtmlContent(content));
  }, [content]);


  const tagLabel = isTechNews ? "Технические новости" : isAnnouncement ? "Анонсы и события" : "Сводки новостей";


  return (
            <CardOutputResult>
                     <LinkToSource><Dat>{date}</Dat><A href={url}>
                     {sourceName}</A></LinkToSource>
                        <AboutCompany>{title}</AboutCompany>
                        <TechNews>{tagLabel}</TechNews>
                            <ContainerImageCard>
                                <img src={picture} alt="Article"></img>
                            </ContainerImageCard>    
                                <P>{cleanContent}</P>
                                <ContainerButtAndSpan>
                                <Button>Читать в источнике</Button>
                                <Span>{wordCount} слова</Span>                            
                        </ContainerButtAndSpan>
                    </CardOutputResult>
    );
};

export default CardOutput;