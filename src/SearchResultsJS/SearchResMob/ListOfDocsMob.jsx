import React, {useEffect, useState} from 'react';
import CardOutputMob from './CardOutputMob';
import styled from 'styled-components';
import MockArticle from '../../Images/Search-output-page/Mobile-version/Data-Scientist-image-mob.png';

const ListOfDocuments = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        margin-top: 25px;
`;

const H3 = styled.h3`
       font-family: Ferry;
        font-weight: 900;
        font-size: 28px;
        line-height: 33.6px;
        letter-spacing: 1%;
        color: rgba(0, 0, 0, 1);
`;

const ShowInSource = styled.button`
        width: 335px;
        height: 59px;
        border-radius: 5px;
        border: none;
        background-color: rgba(89, 112, 255, 1);
        font-family: Inter;
        font-weight: 500;
        font-size: 20px;
        line-height: 24.2px;
        letter-spacing: 3%;
        color: rgba(255, 255, 255, 1);
        margin-top: 36px;
         &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

function ListOfDocsMob({documentsData}) {

    const [articles, setArticles] = useState([]);
    const [displayedArticles, setDisplayedArticles] = useState(2);
  
    useEffect(() => {
      if (documentsData && Array.isArray(documentsData)) {
        const transformedArticles = documentsData.map(doc => {
          const {issueDate, url, source, attributes, title, content} = doc.ok;
          const {name} = source;
          const {isTechNews, isAnnouncement, isDigest, wordCount} = attributes;
          return {
            date: new Date(issueDate).toLocaleDateString("ru-RU"),
            url,
            sourceName: name,
            isTechNews,
            isAnnouncement,
            isDigest,
            title: title.text,
            content: content.markup,
            wordCount,
            picture: MockArticle, 
          };
        });
  
        setArticles(transformedArticles);
      }
    }, [documentsData]);
  
  
   
    const showMoreArticles = () => {
      setDisplayedArticles(prev => prev + 2);
    };
  
   
    return (
        <ListOfDocuments>
        <H3>Список<br/> документов</H3>
        {articles
          .slice(0, displayedArticles) 
          .map((article, index) => (
            <CardOutputMob key={index} {...article} />
          ))}
          {displayedArticles < articles.length && (
        <ShowInSource onClick={showMoreArticles}>Показать больше</ShowInSource>
    )}
   </ListOfDocuments>              
    )           
}

export default ListOfDocsMob;